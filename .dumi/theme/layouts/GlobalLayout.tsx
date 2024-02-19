import { useOutlet, usePrefersColor, useLocale } from 'dumi';
import { ConfigProvider } from '@tool-pack/react-ui';
import enUS from '@tool-pack/react-ui/locale/en-US';
import zhCN from '@tool-pack/react-ui/locale/zh-CN';
import React, { useEffect } from 'react';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  const locale = useLocale();

  useEffect(() => {
    if (!color) return;
    const { classList } = document.documentElement;
    classList.remove('light', 'dark');
    classList.add(color);
  }, [color]);

  return (
    <ConfigProvider locale={locale.id === 'zh-CN' ? zhCN : enUS}>
      {outlet}
    </ConfigProvider>
  );
};

export default GlobalLayout;
