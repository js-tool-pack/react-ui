/**
 * title: 基础用法
 * description: Calendar 基础用法。
 */

import { Calendar } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());
  return (
    <>
      <Calendar onChange={setValue} value={value} />
      <div>已选日期：{value?.toString()}</div>
    </>
  );
};

export default App;
