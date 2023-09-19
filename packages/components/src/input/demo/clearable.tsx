/**
 * title: 可清理
 */

import { Input } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  return <Input onChange={setValue} value={value} clearable></Input>;
};

export default App;
