/**
 * title: tooltip
 * description: tooltip 的开关，可选值为 'always' ｜ boolean，默认为 true
 */

import { Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(50);
  return (
    <>
      tooltip=true [default]
      <Slider tooltip={true} value={30} />
      tooltip=false {value}
      <Slider onChange={setValue} tooltip={false} value={value} />
      tooltip=always
      <Slider tooltip="always" value={75} />
    </>
  );
};

export default App;
