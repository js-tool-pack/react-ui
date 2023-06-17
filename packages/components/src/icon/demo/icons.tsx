/**
 * title: 所有的icon
 * description: 展示组件库内所有的icon。
 */

import React from 'react';
import { Icon, Icons } from '@tool-pack/react-ui';
import { Clipboard as ClipboardTool } from '@tool-pack/bom';

const App: React.FC = () => {
  const copy = (iconName: string) => {
    ClipboardTool.copy(`<Icon><Icons.${iconName} /></Icon>`);
  };
  return (
    <div className="demo-icon-icons">
      {Object.keys(Icons).map((k) => (
        <Icon key={k} onClick={() => copy(k)}>
          {React.createElement(Icons[k])}
        </Icon>
      ))}
    </div>
  );
};

export default App;
