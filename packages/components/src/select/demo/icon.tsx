/**
 * title: 自定义 icon
 */

import React, { useState } from 'react';
import { Select, SelectOptionsItem, Icons } from '@tool-pack/react-ui';

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
  const [visible, setVisible] = useState(false);
  return (
    <Select
      onVisibleChange={setVisible}
      icon={visible ? <Icons.Close /> : <Icons.CircleWarningFill />}
      options={options}
      placeholder="select"
      clearable
    />
  );
};

export default App;
