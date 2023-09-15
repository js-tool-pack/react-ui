/**
 * title: 自定义 icon
 */

import { SelectOptionsItem, Select, Icons } from '@tool-pack/react-ui';
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
  const [visible, setVisible] = useState(false);
  return (
    <Select
      icon={visible ? <Icons.Close /> : <Icons.CircleWarningFill />}
      onVisibleChange={setVisible}
      placeholder="select"
      options={options}
      clearable
    />
  );
};

export default App;
