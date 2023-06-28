import { useOutlet, usePrefersColor } from 'dumi';
import React, { useEffect } from 'react';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();

  useEffect(() => {
    if (!color) return;
    const { classList } = document.documentElement;
    classList.remove('light', 'dark');
    classList.add(color);
  }, [color]);

  return outlet;
};

export default GlobalLayout;
