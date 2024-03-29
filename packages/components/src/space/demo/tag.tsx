/**
 * title: 指定根html标签
 * description: 可以使用 tag 参数指定 space 组件的根html标签，tag 默认 section。
 */

import { Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space tag="div">
      <Button type="primary">bt1</Button>
      <Button type="danger">bt2</Button>
    </Space>
  );
};

export default App;
