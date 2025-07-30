import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const sendLogToServer = async (logData: {
  level: string;
  message: string;
  details?: unknown;
}) => {
  try {
    await axios.post(`${apiUrl}log/`, logData);
  } catch (error) {
    console.error('Failed to send log to server:', error); // eslint-disable-line no-console
  }
};
