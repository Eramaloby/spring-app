import { useState } from 'react';

export const useForm = <T extends Record<string, string>>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return [state, handleChange, setState] as const;
};
