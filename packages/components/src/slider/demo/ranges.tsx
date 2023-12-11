/**
 * title: 多点范围
 * description: 当 value 为数组时，数组的每一个值都会有一个对应的拖动把手
 */

import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<number[]>([20, 50, 60, 90]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} value={value} />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
