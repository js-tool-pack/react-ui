/**
 * title: 分组
 */

import React from 'react';
import { Select, SelectOptionsItem } from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = [
  {
    type: 'group',
    key: '[0, 20)',
    label: '[0, 20)',
    children: [
      ...Array.from({ length: 10 }).map((_, i) => ({
        value: i,
        label: String(i),
      })),
      {
        type: 'group',
        key: '[10, 20)',
        label: '[10, 20)',
        children: Array.from({ length: 10 }).map((_, i) => ({
          value: i + 10,
          label: String(i + 10),
        })),
      },
    ],
  },
  { type: 'divider', key: 'd1' },
  {
    type: 'group',
    key: '[20, 30)',
    label: '[20, 30)',
    children: Array.from({ length: 10 }).map((_, i) => ({
      value: i + 20,
      label: String(i + 20),
    })),
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
