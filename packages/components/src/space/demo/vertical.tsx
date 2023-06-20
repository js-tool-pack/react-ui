/**
 * title: 垂直排列
 * description: 使用 vertical 参数使 space 组件垂直排列。
 */

import React from 'react';
import { Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const style: React.CSSProperties = { width: '200px', height: '100px' };
  return (
    <Space vertical style={{ background: '#e6a23c' }}>
      <div style={{ ...style, background: '#1677ff' }}></div>
      <div style={{ ...style, background: '#f56c6c' }}></div>
    </Space>
  );
};

export default App;
