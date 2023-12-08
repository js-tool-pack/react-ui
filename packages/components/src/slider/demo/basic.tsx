/**
 * title: 基础用法
 * description: Slider 基础用法。
 */

import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(50);
  return (
    <>
      <Slider
        onChange={(v) => {
          setValue(v);
        }}
        value={value}
      />
      {value}
    </>
  );
};

export default App;
