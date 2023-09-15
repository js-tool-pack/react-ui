/**
 * title: 隐藏已选
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  const [value, setValue] = useState<React.Key[]>([]);
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
