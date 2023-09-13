/**
 * title: 清空
 */

import React from 'react';
import {
  Select,
  SelectOptionsItem,
  useMessageHolder,
} from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i,
  label: String(i),
}));
const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const onClear = () => message.success('clear');
  return (
    <>
      {holder}
      <Select
        placeholder="select"
        options={options}
        onClear={onClear}
        clearable
      />
      <br />
      <Select
        placeholder="multiple select"
        options={options}
        onClear={onClear}
        clearable
        multiple
      />
    </>
  );
};

export default App;
