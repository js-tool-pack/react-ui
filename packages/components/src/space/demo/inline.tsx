/**
 * title: inline
 * description: 使用 inline 参数使 space 改为行内元素。
 */

import { Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const style: React.CSSProperties = { height: '100px', width: '200px' };
  return (
    <Space style={{ background: '#e6a23c' }} vertical inline>
      <div style={{ ...style, background: '#1677ff' }}></div>
      <div style={{ ...style, background: '#f56c6c' }}></div>
    </Space>
  );
};

export default App;
