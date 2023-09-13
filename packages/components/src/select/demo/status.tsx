/**
 * title: 状态
 */

import React from 'react';
import { Select, SelectOptionsItem } from '@tool-pack/react-ui';

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
  return (
    <>
      <Select placeholder="select" options={options} status="warning" />
      <br />
      <Select placeholder="select" options={options} status="error" />
    </>
  );
};

export default App;
