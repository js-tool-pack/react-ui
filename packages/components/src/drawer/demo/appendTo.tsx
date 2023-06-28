/**
 * title: 指定渲染位置
 * description: 可以通过 appendTo 指定抽屉 dom 渲染位置。appendTo 为 null 时渲染在当前位置
 */

import React, { useState } from 'react';
import { Button, Drawer, Space } from '@tool-pack/react-ui';

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
        position: 'relative',
        height: '260px',
        overflow: 'hidden',
        justifyContent: 'center',
      }}
      vertical>
      <Button type="primary" onClick={appendToCurrent}>
        渲染在当前dom
      </Button>
      <Button type="primary" plain onClick={appendToNestDemo}>
        渲染在嵌套demo
      </Button>
      <Drawer
        visible={visible}
        zIndex={1}
        onClose={hide}
        header={null}
        appendTo={appendTo}>
        hello world
      </Drawer>
    </Space>
  );
};

export default App;
