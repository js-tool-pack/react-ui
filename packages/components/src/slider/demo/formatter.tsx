/**
 * title: 格式化 tooltip
 */

import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Slider formatter={(value) => value + '%'} tooltip="always" value={50} />
    </>
  );
};

export default App;
