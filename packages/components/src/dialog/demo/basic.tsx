/**
 * title: 基础用法
 * description: dialog的基础用法。
 */

import { Button, Dialog } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((l) => !l, false);
  const [value, setValue] = useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary">
        {visible ? '关闭' : '打开'}dialog
      </Button>
      <Dialog
        bodyAttrs={{ style: { top: '100px' } }}
        onClose={setVisible}
        visible={visible}
        footer="footer"
        header="title"
      >
        <div>随便说说</div>
        <textarea
          style={{
            boxSizing: 'border-box',
            marginTop: '10px',
            display: 'block',
            width: '100%',
          }}
          onChange={(e) => setValue(e.target.value)}
          placeholder="输入..."
          value={value}
        />
      </Dialog>
    </div>
  );
};

export default App;
