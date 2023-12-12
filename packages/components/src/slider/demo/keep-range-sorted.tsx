/**
 * title: 范围维持排序状态
 * description: 当 value 为数组并设置 keepRangeSorted 为 true 时，当拖动的值小于前面的值会推动前面的把手，
 *   当拖动的值大于后面的值会推动后面的把手，而不是穿过去
 */

import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<number[]>([0, 30, 50, 60, 100]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} keepRangeSorted value={value} />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
