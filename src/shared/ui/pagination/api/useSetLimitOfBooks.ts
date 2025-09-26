import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { useEffect } from 'react';

type UseSetLimitOfBooksProps = (arg: number) => void;

export const useSetLimitOfBooks = (setLimit: UseSetLimitOfBooksProps) => {
  const { sizeWindow } = useWindowSize();

  useEffect(() => {
    if (sizeWindow >= 1440) {
      setLimit(10);
    } else if (sizeWindow > 768 && sizeWindow < 1440) {
      setLimit(8);
    } else if (sizeWindow < 768) {
      setLimit(2);
    }
  }, [sizeWindow]);
};
