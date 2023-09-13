/**
 * title: 基础用法
 */

import React, { useState } from 'react';
import { Select, SelectOptionsItem } from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = [
  {
    value: 1,
    label: 'foo',
  },
  {
    value: 2,
    label: 'bar',
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <Select
        value={value}
        onChange={(selected, options) => {
          setValue(selected);
          console.log('selected ', value, selected, options);
        }}
        options={options}
        placeholder="select"
      />
      <br />
      <Select disabled value={value} options={options} placeholder="select" />
    </>
  );
};

export default App;
