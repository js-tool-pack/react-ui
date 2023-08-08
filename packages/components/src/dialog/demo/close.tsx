/**
 * title: 内置关闭方式
 * description: 使用内置的关闭方式关闭 dialog：按下 `ESC` 键或者点击遮罩关闭 dialog。
 */

import React, { useCallback, useMemo, useState } from 'react';
import {
  Aside,
  Button,
  Dialog,
  Footer,
  Header,
  Layout,
  Main,
} from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const close = useCallback(() => setVisible(false), []);
  const children = useMemo(() => {
    return (
      <Layout vertical style={{ textAlign: 'center', background: '#efefef' }}>
        <Header className="header" style={{ background: 'pink' }}>
          header
        </Header>
        <Layout>
          <Aside style={{ width: '200px' }}>aside</Aside>
          <Main style={{ background: 'blue' }}>main</Main>
        </Layout>
        <Layout vertical>
          <Aside style={{ background: 'lime' }}>aside</Aside>
          <Main>main</Main>
        </Layout>
        <Footer style={{ background: 'pink' }}>footer</Footer>
      </Layout>
    );
  }, []);
  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={() => setVisible(true)}>
        {visible ? '关闭' : '打开'}dialog
      </Button>
      <Dialog
        visible={visible}
        header="title"
        footer={
          <>
            <Button type="info" onClick={close} plain="dashed">
              cancel
            </Button>
            <Button
              type="primary"
              onClick={close}
              style={{ marginLeft: '10px' }}>
              confirm
            </Button>
          </>
        }
        bodyAttrs={{ style: { top: '20px' } }}
        centered
        center
        closeOnClickMask
        esc
        onClose={close}>
        {children}
      </Dialog>
    </div>
  );
};

export default App;
