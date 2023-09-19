/**
 * title: 尺寸
 */

import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="small" size="small" />
      <br />
      <Input placeholder="medium" size="medium" />
      <br />
      <Input placeholder="large" size="large" />
    </>
  );
};

export default App;
