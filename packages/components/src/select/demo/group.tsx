/**
 * title: 分组
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = [
  {
    children: [
      ...Array.from({ length: 10 }).map((_, i) => ({
        label: String(i),
        value: i,
      })),
      {
        children: Array.from({ length: 10 }).map((_, i) => ({
          label: String(i + 10),
          value: i + 10,
        })),
        label: '[10, 20)',
        key: '[10, 20)',
        type: 'group',
      },
    ],
    label: '[0, 20)',
    key: '[0, 20)',
    type: 'group',
  },
  { type: 'divider', key: 'd1' },
  {
    children: Array.from({ length: 10 }).map((_, i) => ({
      label: String(i + 20),
      value: i + 20,
    })),
    label: '[20, 30)',
    key: '[20, 30)',
    type: 'group',
  },
];
const App: React.FC = () => {
  return (
    <>
      <Select placeholder="select" options={options} filterable />
      <br />
      <Select
        placeholder="multiple select"
        options={options}
        filterable
        multiple
      />
    </>
  );
};

export default App;
