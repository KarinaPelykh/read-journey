import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
    if (isOpen) {
      document.body.style.overflow = 'auto';
    }
  };

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };
  return { isOpen, open, close, toggle };
};
