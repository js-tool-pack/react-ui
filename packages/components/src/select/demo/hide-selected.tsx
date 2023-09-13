/**
 * title: 隐藏已选
 */

import React, { useState } from 'react';
import { Select, SelectOptionsItem } from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i,
  label: String(i),
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
