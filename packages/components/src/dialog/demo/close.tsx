/**
 * title: 内置关闭方式
 * description: 使用内置的关闭方式关闭 dialog：按下 `ESC` 键或者点击遮罩关闭 dialog。
 */

import {
  Button,
  Dialog,
  Footer,
  Header,
  Layout,
  Aside,
  Main,
} from '@tool-pack/react-ui';
import React, { useCallback, useState, useMemo } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const close = useCallback(() => setVisible(false), []);
  const children = useMemo(() => {
    return (
      <Layout style={{ background: '#efefef', textAlign: 'center' }} vertical>
        <Header style={{ background: 'pink' }} className="header">
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
      <Button onClick={() => setVisible(true)} type="primary">
        {visible ? '关闭' : '打开'}dialog
      </Button>
      <Dialog
        footer={
          <>
            <Button onClick={close} plain="dashed" type="info">
              cancel
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              onClick={close}
              type="primary"
            >
              confirm
            </Button>
          </>
        }
        bodyAttrs={{ style: { top: '20px' } }}
        visible={visible}
        closeOnClickMask
        onClose={close}
        header="title"
        centered
        center
        esc
      >
        {children}
      </Dialog>
    </div>
  );
};

export default App;
