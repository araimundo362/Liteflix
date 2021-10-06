import { useState, useEffect } from 'react';

export const useMobile = () => {
  const [isMobile, set] = useState(false);

  useEffect(() => {
    set(window.innerWidth < 1024);
  }, []);

  return isMobile;
};
