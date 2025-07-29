export const sendLogToServer = async (logData: {
  level: string;
  message: string;
  details?: unknown;
}) => {
  try {
    await fetch('http://localhost:3000/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData),
    });
  } catch (error) {
    console.error('Failed to send log to server:', error); // eslint-disable-line no-console
  }
};
