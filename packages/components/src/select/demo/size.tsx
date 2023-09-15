/**
 * title: 尺寸
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
  const [value, setValue] = useState<number>(2);
  return (
    <>
      <Select
        placeholder="select"
        onChange={setValue}
        options={options}
        value={value}
        size="small"
      />
      <br />
      <Select
        placeholder="select"
        onChange={setValue}
        options={options}
        size="medium"
        value={value}
      />
      <br />
      <Select
        placeholder="select"
        onChange={setValue}
        options={options}
        value={value}
        size="large"
      />
    </>
  );
};

export default App;
