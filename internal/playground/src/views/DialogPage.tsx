import {
  Aside,
  Button,
  Dialog,
  Footer,
  Header,
  Layout,
  Main,
} from '@pkg/components';
import { useCallback, useMemo, useState } from 'react';
import { useToggle } from '@pkg/shared';

export function DialogPage() {
  const [visible, setVisible] = useState(false);
  const [visible2, toggle2] = useToggle();
  const [visible3, toggle3] = useToggle();
  const [visible4, toggle4] = useToggle();
  const [visible5, toggle5] = useToggle();
  const close = useCallback(() => setVisible(false), []);
  const toggle = useCallback(() => setVisible((v) => !v), []);
  const footer = useMemo(
    () => (
      <div>
        <Button type="primary" plain onClick={toggle}>
          cancel
        </Button>
        <Button type="primary">confirm</Button>
      </div>
    ),
    [],
  );
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
  const dialog1Style = useMemo(() => ({ top: '20px' }), []);
  return (
    <>
      <Button type="primary" onClick={toggle}>
        show dialog
      </Button>
      <Button
        type="success"
        onClick={toggle2}
        style={{ position: 'fixed', bottom: 0 }}>
        show dialog2
      </Button>
      <Button
        type="warning"
        onClick={toggle3}
        style={{ position: 'fixed', right: 0, bottom: 0 }}>
        show dialog3
      </Button>
      <Button
        type="danger"
        onClick={toggle4}
        style={{ position: 'fixed', right: 0 }}>
        show dialog4
      </Button>
      <Button
        type="info"
        onClick={toggle5}
        style={{ position: 'fixed', right: '50%', top: '50%' }}>
        show dialog5
      </Button>

      <Dialog
        visible={visible}
        header="我是title"
        footer={footer}
        onClose={close}
        style={dialog1Style}
        closeOnClickMask>
        {children}
      </Dialog>
      <Dialog
        visible={visible2}
        header="我是title2"
        onClose={toggle2}
        style={{ top: '-60px' }}
        centered={true}
        closeOnClickMask>
        hello world
      </Dialog>
      <Dialog
        visible={visible3}
        header="我是title3"
        onClose={toggle3}
        style={{ top: '180px' }}
        closeOnClickMask>
        hello world
      </Dialog>
      <Dialog
        visible={visible4}
        header={null}
        onClose={toggle4}
        style={{ top: '150px' }}
        closeOnClickMask>
        {children}
      </Dialog>
      <Dialog
        visible={visible5}
        header="我是title5"
        onClose={toggle5}
        centered={true}
        closeOnClickMask>
        {children}
      </Dialog>
    </>
  );
}
