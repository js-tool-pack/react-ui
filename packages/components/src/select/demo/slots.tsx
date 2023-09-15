/**
 * title: 头尾插槽
 */

import { SelectOptionsItem, Select } from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  label: String(i),
  value: i,
}));
const App: React.FC = () => {
  return (
    <>
      <Select
        header={<div style={{ padding: '10px' }}>header 插槽</div>}
        placeholder="header"
        options={options}
      />
      <br />
      <Select
        footer={<div style={{ padding: '10px' }}>footer 插槽</div>}
        placeholder="footer"
        options={options}
      />
    </>
  );
};

export default App;
