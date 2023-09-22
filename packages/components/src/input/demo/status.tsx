/**
 * title: 状态
 */

import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="select" status="warning" />
      <br />
      <Input placeholder="select" status="error" />
    </>
  );
};

export default App;
