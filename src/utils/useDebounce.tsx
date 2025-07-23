import { useEffect, useRef } from 'react';

function useDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): [React.RefObject<NodeJS.Timeout | null>] {
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [callback, delay]);

  return [debounceTimer];
}

export default useDebounce;
