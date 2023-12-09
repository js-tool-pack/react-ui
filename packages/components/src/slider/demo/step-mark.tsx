/**
 * title: 刻度做步长
 */

import { SliderMarks, Slider } from '@tool-pack/react-ui';
import React from 'react';

const marks: SliderMarks = {
  100: { label: '100°C' },
  83: { label: '83°C' },
  50: { label: '50°C' },
  35: { label: '35°C' },
  20: { label: '20°C' },
};
const App: React.FC = () => {
  return (
    <>
      <Slider marks={marks} step="mark" value={20} />
      <Slider value={[20, 50]} marks={marks} step="mark" />
    </>
  );
};

export default App;
