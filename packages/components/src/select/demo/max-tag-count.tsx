/**
 * title: 多选标签数量限制
 */

import React, { useState } from 'react';
import { Select, SelectOptionsItem } from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i,
  label: String(i),
}));
const App: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Select
      placeholder={'test'}
      onChange={(values, options) => {
        setValue(value);
        console.log(values, options);
      }}
      options={options}
      value={value}
      multiple
      maxTagCount={2}
    />
  );
};

export default App;
