/**
 * title: 垂直排列
 * description: 使用 vertical 参数使 space 组件垂直排列。
 */

import { Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const style: React.CSSProperties = { height: '100px', width: '200px' };
  return (
    <Space style={{ background: '#e6a23c' }} vertical>
      <div style={{ ...style, background: '#1677ff' }}></div>
      <div style={{ ...style, background: '#f56c6c' }}></div>
    </Space>
  );
};

export default App;
