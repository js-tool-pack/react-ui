/**
 * title: 嵌套使用
 */

import { ButtonGroup, Button, Drawer, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Space
      style={{ position: 'relative', overflow: 'hidden', height: '100px' }}
      className="drawer-demo-nest"
    >
      <Button type="primary" onClick={show}>
        打开
      </Button>
      <Drawer
        esc={!visible2 && !visible3}
        visible={visible}
        onClose={hide}
        header={null}
      >
        <ButtonGroup>
          <Button onClick={() => setVisible2(true)} type="primary">
            打开嵌套抽屉
          </Button>
          <Button
            onClick={() => setVisible3(true)}
            type="primary"
            plain="dashed"
          >
            打开内部嵌套抽屉
          </Button>
        </ButtonGroup>

        <Drawer
          onClose={(): boolean | void => {
            if (window.confirm('确认关闭？')) {
              setVisible2(false);
            } else return false;
          }}
          onLeave={() => setVisible2(false)}
          closeOnClickMask={false}
          visible={visible2}
          placement="left"
          title="嵌套抽屉"
          esc
        >
          hello world <br />
          <textarea cols={30} rows={10}></textarea>
        </Drawer>

        <Drawer
          onLeave={() => setVisible3(false)}
          visible={visible3}
          placement="bottom"
          appendTo={null}
          title="内部嵌套抽屉"
          esc={visible}
          size="50vh"
        >
          hello world <br />
          <textarea cols={30} rows={10}></textarea>
        </Drawer>
      </Drawer>
    </Space>
  );
};

export default App;
