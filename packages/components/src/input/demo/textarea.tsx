/**
 * title: 多行输入
 */

import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="textarea" type="textarea" clearable rows={5} />
      <br />
      <Input placeholder="textarea disabled" type="textarea" disabled />
    </>
  );
};

export default App;
