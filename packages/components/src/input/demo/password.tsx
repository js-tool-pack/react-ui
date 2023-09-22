/**
 * title: 密码
 */

import { Input } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [password, setPassword] = useState('');
  return (
    <>
      <Input
        showPasswordOn="mouseDown"
        onChange={setPassword}
        placeholder="password"
        value={password}
        type="password"
        clearable
      />
      <br />
      <Input
        onChange={setPassword}
        showPasswordOn="click"
        placeholder="password"
        value={password}
        type="password"
        clearable
      />
      <br />
    </>
  );
};

export default App;
