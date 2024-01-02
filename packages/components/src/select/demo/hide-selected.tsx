/**
 * title: 隐藏已选
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
})) satisfies SelectOptionsItem[];
const App: React.FC = () => {
  const [value, setValue] = useState<number[]>([]);
  return (
    <>
      <Select
        filter={(_, option) => {
          return !value.includes(option.value);
        }}
        placeholder="multiple select"
        onChange={setValue}
        options={options}
        value={value}
        multiple
      />
    </>
  );
};

export default App;
