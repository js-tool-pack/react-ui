/**
 * title: 头尾插槽
 */

import React from 'react';
import { Select, SelectOptionsItem } from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = Array.from({ length: 20 }).map((_, i) => ({
  value: i,
  label: String(i),
}));
const App: React.FC = () => {
  return (
    <>
      <Select
        header={<div style={{ padding: '10px' }}>header 插槽</div>}
        options={options}
        placeholder="header"
      />
      <br />
      <Select
        footer={<div style={{ padding: '10px' }}>footer 插槽</div>}
        options={options}
        placeholder="footer"
      />
    </>
  );
};

export default App;
