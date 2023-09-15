/**
 * title: 清空
 */

import {
  SelectOptionsItem,
  useMessageHolder,
  Select,
} from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
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
