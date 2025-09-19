import { useEffect, MouseEvent } from 'react';

export const closeModalByKeyBoard = (toggle: () => void) => {
  useEffect(() => {
    const handelKeyEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        toggle();
      }
    };
    document.addEventListener('keydown', handelKeyEscape);
    return () => {
      document.removeEventListener('keydown', handelKeyEscape);
    };
  }, [toggle]);

  const handelCloseClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  return handelCloseClick;
};
