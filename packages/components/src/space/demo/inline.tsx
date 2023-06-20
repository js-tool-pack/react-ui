/**
 * title: inline
 * description: 使用 inline 参数使 space 改为行内元素。
 */

import React from 'react';
import { Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const style: React.CSSProperties = { width: '200px', height: '100px' };
  return (
    <Space vertical inline style={{ background: '#e6a23c' }}>
      <div style={{ ...style, background: '#1677ff' }}></div>
      <div style={{ ...style, background: '#f56c6c' }}></div>
    </Space>
  );
};

export default App;
