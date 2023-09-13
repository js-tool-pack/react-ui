/**
 * title: 尺寸
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
  const [value, setValue] = useState<number>(2);
  return (
    <>
      <Select
        size="small"
        value={value}
        onChange={setValue}
        options={options}
        placeholder="select"
      />
      <br />
      <Select
        size="medium"
        value={value}
        onChange={setValue}
        options={options}
        placeholder="select"
      />
      <br />
      <Select
        size="large"
        value={value}
        onChange={setValue}
        options={options}
        placeholder="select"
      />
    </>
  );
};

export default App;
