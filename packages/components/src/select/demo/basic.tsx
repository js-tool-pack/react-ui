/**
 * title: 基础用法
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <Select
        onChange={(selected, options) => {
          setValue(selected);
          console.log('selected ', value, selected, options);
        }}
        placeholder="select"
        options={options}
        value={value}
      />
      <br />
      <Select placeholder="select" options={options} value={value} disabled />
    </>
  );
};

export default App;
