/**
 * title: 基础用法
 * description: Drawer 基础用法。
 */

import React, { useState } from 'react';
import { Button, Drawer } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <>
      <Button onClick={show}>打开</Button>
      <Drawer visible={visible} onClose={hide} closeOnClickMask>
        123123
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Drawer>
    </>
  );
};

export default App;
