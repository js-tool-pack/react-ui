/**
 * title: 尺寸
 * description: 常规 3 尺寸。
 */

import { Switch, Space } from '@tool-pack/react-ui';
import React from 'react';

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
