/**
 * title: 基础用法
 * description: VirtualList 基础用法。
 */

import { VirtualList, Alert } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <VirtualList
      attrs={{
        style: {
          backgroundColor: '#fdf3f8',
          height: '200px',
        },
      }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <Alert key={i}>{i}</Alert>
      ))}
    </VirtualList>
  );
};

export default App;
