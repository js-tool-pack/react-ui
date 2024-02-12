/**
 * title: 基础用法
 * description: VirtualList 基础用法。
 */

import { VirtualList, Alert } from '@tool-pack/react-ui';
import React from 'react';

const length = 50;

const App: React.FC = () => {
  return (
    <>
      <h3>内含 {length} 个固定宽度 Alert 组件</h3>
      <VirtualList
        attrs={{
          style: {
            backgroundColor: '#fdf3f8',
            height: '300px',
          },
        }}
      >
        {Array.from({ length }).map((_, i) => (
          <Alert key={i}>{i}</Alert>
        ))}
      </VirtualList>
    </>
  );
};

export default App;
