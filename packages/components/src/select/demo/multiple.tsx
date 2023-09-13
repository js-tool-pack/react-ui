/**
 * title: 多选
 */

import React, { useState } from 'react';
import { Select, SelectOptionsItem } from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i,
  label: String(i),
}));
const App: React.FC = () => {
  const [value, setValue] = useState([1, 15]);
  return (
    <>
      <Select
        placeholder="select"
        onChange={(values, options) => {
          setValue(value);
          console.log(values, options);
        }}
        options={options}
        value={value}
        multiple
      />
      <br />
      <Select
        disabled
        placeholder="select"
        onChange={(values, options) => {
          setValue(value);
          console.log(values, options);
        }}
        options={options}
        value={value}
        multiple
      />
    </>
  );
};

export default App;
