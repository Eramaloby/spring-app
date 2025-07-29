// src/services/authApi.test.ts
import { setupApiStore } from '../test-utils/testStore';
import { authApi } from './authApi';
import type {
  LoginRequestBody,
  LoginSuccessResponse,
  LoginErrorResponse,
} from '../types/auth.types';

import type { User } from '../features/user/userTypes';

let store: ReturnType<typeof setupApiStore>;

describe('authApi - login mutation (fetch mock)', () => {
  let mockFetch: jest.Mock;

  beforeEach(() => {
    store = setupApiStore();
    mockFetch = jest.fn();
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
    store.dispatch(authApi.util.resetApiState());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const createMockResponse = (
    body: LoginSuccessResponse | LoginErrorResponse,
    options: { status?: number; ok?: boolean; headers?: HeadersInit } = {}
  ): Response => {
    const defaultOptions = { status: 200, ok: true };
    const mergedOptions = { ...defaultOptions, ...options };

    const mockResponse = {
      ...mergedOptions,
      json: () => Promise.resolve(body),
      text: () => Promise.resolve(JSON.stringify(body)),
      arrayBuffer: jest.fn(),
      blob: jest.fn(),
      formData: jest.fn(),
      headers: new Headers(mergedOptions.headers),
      url: 'mock-url',
      clone: () => createMockResponse(body, mergedOptions),
      redirected: false,
      type: 'default',
      statusText: options.status === 200 ? 'OK' : 'Error',
      ok: mergedOptions.ok,
      body: null,
      bodyUsed: false,
      trailer: Promise.resolve(new Headers()),
      bytes: () => Promise.resolve(new Uint8Array()),
    };

    return mockResponse as Response;
  };

  test('should login successfully and return transformed data', async () => {
    const credentials: LoginRequestBody = { login: 'testuser', password: 'testpassword' };
    const mockUser: User = { login: 'testuser' };
    const successApiResponse: LoginSuccessResponse = {
      message: 'Login successful',
      user: mockUser,
    };

    mockFetch.mockResolvedValueOnce(
      createMockResponse(successApiResponse, { status: 200, ok: true })
    );

    const requestPromise = store.dispatch(authApi.endpoints.login.initiate(credentials));
    const result = await requestPromise.unwrap();

    expect(mockFetch).toHaveBeenCalledTimes(1);

    const actualRequest = mockFetch.mock.calls[0][0];

    expect(actualRequest).toBeInstanceOf(Request);

    expect(actualRequest.url).toBe('http://localhost:3000/login');
    expect(actualRequest.method).toBe('POST');
    expect(actualRequest.headers.get('Content-Type')).toBe('application/json');

    const actualBody = await actualRequest.text();
    expect(JSON.parse(actualBody)).toEqual(credentials);

    expect(result).toEqual(successApiResponse);
  });

  test('should handle API error and return transformed error response', async () => {
    const credentials: LoginRequestBody = { login: 'wronguser', password: 'wrongpassword' };
    const errorApiResponse: LoginErrorResponse = { message: 'Wrong login or password!' };

    mockFetch.mockResolvedValueOnce(
      createMockResponse(errorApiResponse, { status: 401, ok: false })
    );

    let caughtError: LoginErrorResponse | Error | undefined;
    try {
      await store.dispatch(authApi.endpoints.login.initiate(credentials)).unwrap();
    } catch (error) {
      caughtError = error as LoginErrorResponse | Error;
    }

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(caughtError).toBeDefined();
    expect(caughtError).toEqual(errorApiResponse);
  });

  test('should handle network error (no internet connection)', async () => {
    const credentials: LoginRequestBody = { login: 'network', password: 'error' };
    const networkError = new TypeError('Failed to fetch');

    mockFetch.mockRejectedValueOnce(networkError);

    let caughtError: { message?: string } | undefined;
    try {
      await store.dispatch(authApi.endpoints.login.initiate(credentials)).unwrap();
    } catch (error) {
      caughtError = error as { message?: string };
    }

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(caughtError).toBeDefined();

    expect(caughtError?.message).toBe('Rejected');
  });
});
