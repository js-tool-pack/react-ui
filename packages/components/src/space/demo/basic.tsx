/**
 * title: 基础用法
 * description: space 基础用法。
 */

import React from 'react';
import { Space, Button } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space>
      <Button type="primary">bt1</Button>
      <Button type="danger">bt2</Button>
    </Space>
  );
};

export default App;
