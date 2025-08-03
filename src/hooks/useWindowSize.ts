import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);

  const handelSize = () => {
    setSizeWindow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handelSize);

    return () => {
      window.removeEventListener('resize', handelSize);
    };
  }, []);

  return { sizeWindow };
};
