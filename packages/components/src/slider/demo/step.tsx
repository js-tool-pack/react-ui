/**
 * title: 步长
 */

import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      step = 0.1
      <Slider value={20} step={0.1} />
      step = 10
      <Slider value={50} step={10} />
    </div>
  );
};

export default App;
