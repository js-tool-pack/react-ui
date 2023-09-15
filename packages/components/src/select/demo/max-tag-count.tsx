/**
 * title: 多选标签数量限制
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Select
      onChange={(values, options) => {
        setValue(value);
        console.log(values, options);
      }}
      placeholder={'test'}
      options={options}
      maxTagCount={2}
      value={value}
      multiple
    />
  );
};

export default App;
