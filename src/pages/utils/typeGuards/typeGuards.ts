import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

export function isSerializedError(error: unknown): error is SerializedError {
  return typeof error === 'object' && error != null && 'message' in error && !('status' in error);
}

export function isHttpError(
  error: FetchBaseQueryError
): error is FetchBaseQueryError & { status: number; data: unknown } {
  return typeof error.status === 'number';
}

export function isNetworkError(
  error: FetchBaseQueryError
): error is FetchBaseQueryError & { status: 'FETCH_ERROR'; error: string } {
  return error.status === 'FETCH_ERROR';
}
