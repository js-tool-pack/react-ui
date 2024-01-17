/**
 * title: 基础用法
 * description: DatePicker 基础用法。
 */

import { DatePicker } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(() => new Date());
  return (
    <>
      <div>{value.toString()}</div>
      <DatePicker onChange={setValue} value={value} />
    </>
  );
};

export default App;
