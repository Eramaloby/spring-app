import { isRejectedWithValue, isFulfilled } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

import { sendLogToServer } from '../../services/sendLogToServer';

export const rtkQueryLogger: Middleware = (_api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const { payload } = action;
    let errorMessage = 'An unknown API error occurred.';

    if (typeof payload === 'object' && payload !== null) {
      if (
        'data' in payload &&
        typeof payload.data === 'object' &&
        payload.data !== null &&
        'message' in payload.data
      ) {
        errorMessage = (payload.data as { message: string }).message;
      } else if ('error' in payload && typeof payload.error === 'string') {
        errorMessage = payload.error;
      } else if ('message' in payload && typeof payload.message === 'string') {
        errorMessage = payload.message;
      }
    }

    console.error('RTK Query API Error (local console for debug):', errorMessage, payload);

    sendLogToServer({
      level: 'error',
      message: `RTK Query API Error: ${errorMessage}`,
      details: payload,
    });
  } else if (isFulfilled(action)) {
    sendLogToServer({
      level: 'info',
      message: `RTK Query API Success: ${action.type}`,
      details: action.payload,
    });
  }

  return next(action);
};
