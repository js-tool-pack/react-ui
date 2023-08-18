/**
 * title: 嵌套使用
 */

import React, { useState } from 'react';
import { Button, ButtonGroup, Drawer, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Space
      className="drawer-demo-nest"
      style={{ position: 'relative', height: '100px', overflow: 'hidden' }}>
      <Button type="primary" onClick={show}>
        打开
      </Button>
      <Drawer
        esc={!visible2 && !visible3}
        visible={visible}
        header={null}
        onClose={hide}>
        <ButtonGroup>
          <Button type="primary" onClick={() => setVisible2(true)}>
            打开嵌套抽屉
          </Button>
          <Button
            type="primary"
            plain="dashed"
            onClick={() => setVisible3(true)}>
            打开内部嵌套抽屉
          </Button>
        </ButtonGroup>

        <Drawer
          esc
          visible={visible2}
          title="嵌套抽屉"
          placement="left"
          closeOnClickMask={false}
          onLeave={() => setVisible2(false)}
          onClose={(): boolean | void => {
            if (window.confirm('确认关闭？')) {
              setVisible2(false);
            } else return false;
          }}>
          hello world <br />
          <textarea cols={30} rows={10}></textarea>
        </Drawer>

        <Drawer
          esc={visible}
          appendTo={null}
          visible={visible3}
          title="内部嵌套抽屉"
          size="50vh"
          placement="bottom"
          onLeave={() => setVisible3(false)}>
          hello world <br />
          <textarea cols={30} rows={10}></textarea>
        </Drawer>
      </Drawer>
    </Space>
  );
};

export default App;
