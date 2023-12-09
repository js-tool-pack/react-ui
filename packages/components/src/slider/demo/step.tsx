/**
 * title: 步长
 * description: 每次增加或减少的量，默认为 1；该参数不能小于 0
 */

import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      step = 0.1
      <Slider value={20} step={0.1} />
      step = 3
      <Slider value={21} step={3} />
      step = 10
      <Slider value={50} step={10} />
    </div>
  );
};

export default App;
