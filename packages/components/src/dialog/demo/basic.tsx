/**
 * title: 基础用法
 * description: dialog的基础用法。
 */

import React, { useReducer, useState } from 'react';
import { Button, Dialog } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((l) => !l, false);
  const [value, setValue] = useState('');

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
        <div>随便说说</div>
        <textarea
          style={{
            marginTop: '10px',
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
          }}
          placeholder="输入..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Dialog>
    </div>
  );
};

export default App;
