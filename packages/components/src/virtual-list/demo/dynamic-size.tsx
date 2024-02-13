/**
 * title: 动态尺寸
 */

import { VirtualList, Select, Alert } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options = [
  { label: 100, value: 100 },
  { label: 500, value: 500 },
  { label: 1000, value: 1000 },
  { label: 5000, value: 5000 },
  { label: 10000, value: 10000 },
];
const App: React.FC = () => {
  const [num, setNum] = useState(100);
  return (
    <>
      item 数量：
      <Select
        attrs={{
          style: { display: 'inline-flex', minWidth: '100px' },
        }}
        onChange={setNum}
        options={options}
        size="small"
        value={num}
      />
      <br />
      <br />
      <VirtualList
        attrs={{
          style: {
            backgroundColor: '#fdf3f8',
            height: '300px',
          },
        }}
      >
        {Array.from({ length: num }).map((_, i) => (
          <Alert title={i} key={i}>
            {(i + ' ').repeat(~~(Math.random() * 500))}
          </Alert>
        ))}
      </VirtualList>
    </>
  );
};

export default App;
