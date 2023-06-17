/**
 * title: 所有的icon
 * description: 展示组件库内所有的icon。
 */

import React from 'react';
import { Icon, Icons, Space } from '@tool-pack/react-ui';
import { Clipboard as ClipboardTool } from '@tool-pack/bom';

const App: React.FC = () => {
  const copy = (iconName: string) => {
    ClipboardTool.copy(`<Icon><Icons.${iconName} /></Icon>`);
  };
  return (
    <Space className="demo-icon-icons">
      {Object.keys(Icons).map((k) => (
        <Icon key={k} onClick={() => copy(k)}>
          {React.createElement(Icons[k])}
        </Icon>
      ))}
    </Space>
  );
};

export default App;
