/**
 * title: 基础用法
 * description: Input 基础用法。
 */

import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input />
      <br />
      <Input placeholder="disabled" disabled />
    </>
  );
};

export default App;
