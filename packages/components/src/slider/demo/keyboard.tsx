/**
 * title: 按键操作
 * description: 可以使用键盘上的上下左右箭头控制滑块的增减。
 */

import { Slider, Switch } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(50);
  const [keyboard, setKeyboard] = useState(true);
  return (
    <>
      keyboard:
      <Switch onChange={setKeyboard} checked={keyboard} size="small" />
      <Slider
        onChange={(v) => {
          setValue(v);
        }}
        keyboard={keyboard}
        value={value}
      />
      {value}
    </>
  );
};

export default App;
