/**
 * title: 基础用法
 * description: dialog的基础用法。
 */

import React, { useReducer } from 'react';
import { Button, Dialog } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((l) => !l, false);
  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={setVisible}>
        {visible ? '关闭' : '打开'}dialog
      </Button>
      <Dialog
        visible={visible}
        header="title"
        footer="footer"
        style={{ top: '100px' }}
        onClose={setVisible}>
        body
      </Dialog>
    </div>
  );
};

export default App;
