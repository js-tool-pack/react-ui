/**
 * title: 尺寸
 * description: 常规 3 尺寸。
 */

import React from 'react';
import { Space, Switch } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space>
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </Space>
  );
};

export default App;
