/**
 * title: 状态
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React from 'react';

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
  return (
    <>
      <Select placeholder="select" options={options} status="warning" />
      <br />
      <Select placeholder="select" options={options} status="error" />
    </>
  );
};

export default App;
