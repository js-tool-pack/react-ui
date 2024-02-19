/**
 * title: 多选
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  const [value, setValue] = useState([1, 15]);
  return (
    <>
      <Select
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
        onChange={(values, options) => {
          setValue(value);
          console.log(values, options);
        }}
        options={options}
        value={value}
        disabled
        multiple
      />
    </>
  );
};

export default App;
