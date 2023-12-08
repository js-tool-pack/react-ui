/**
 * title: 范围
 */

import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<[number, number]>([20, 50]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} value={value} />
      <div style={{ textAlign: 'center', height: '150px' }}>
        <Slider onChange={(v) => setValue(v)} value={value} vertical />
        <Slider
          attrs={{ style: { marginLeft: '150px' } }}
          onChange={(v) => setValue(v)}
          value={value}
          vertical
          reverse
        />
      </div>
      <Slider onChange={(v) => setValue(v)} value={value} reverse />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
