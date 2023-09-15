/**
 * title: 指定渲染位置
 * description: 可以通过 appendTo 指定抽屉 dom 渲染位置。appendTo 为 null 时渲染在当前位置
 */

import { Button, Drawer, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [appendTo, setAppendTo] = useState<HTMLElement | null>(null);

  const hide = () => setVisible(false);

  const appendToCurrent = () => {
    if (appendTo !== null && visible) {
      hide();
      return;
    }
    setAppendTo(null);
    setTimeout(() => setVisible(true));
  };
  const appendToNestDemo = () => {
    if (visible) {
      hide();
      return;
    }
    setAppendTo(document.querySelector('.drawer-demo-nest') as HTMLElement);
    setTimeout(() => setVisible(true));
  };

  return (
    <Space
      style={{
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        height: '260px',
      }}
      vertical
    >
      <Button onClick={appendToCurrent} type="primary">
        渲染在当前dom
      </Button>
      <Button onClick={appendToNestDemo} type="primary" plain>
        渲染在嵌套demo
      </Button>
      <Drawer
        appendTo={() => appendTo}
        visible={visible}
        onClose={hide}
        header={null}
        zIndex={1}
      >
        hello world
      </Drawer>
    </Space>
  );
};

export default App;
