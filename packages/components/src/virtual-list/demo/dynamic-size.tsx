/**
 * title: 动态尺寸
 */

import { VirtualList, Alert } from '@tool-pack/react-ui';
import React from 'react';

const length = 100;

const App: React.FC = () => {
  return (
    <>
      <h3>列表内含 {length} 个不定高度 Alert 组件</h3>
      <VirtualList
        attrs={{
          style: {
            backgroundColor: '#fdf3f8',
            height: '300px',
          },
        }}
      >
        {Array.from({ length }).map((_, i) => (
          <Alert title={i} key={i}>
            {String(i).repeat(~~(Math.random() * 500))}
          </Alert>
        ))}
      </VirtualList>
    </>
  );
};

export default App;
