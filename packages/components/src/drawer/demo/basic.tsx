/**
 * title: 基础用法
 * description: Drawer 基础用法。
 */

import React, { useState } from 'react';
import {
  Button,
  Drawer,
  Layout,
  Divider,
  PLACEMENTS,
  Space,
} from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [placement, setPlacement] =
    useState<(typeof PLACEMENTS)[number]>('right');

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <Space>
      <div>
        {PLACEMENTS.map((p) => (
          <label key={p}>
            <input
              type="radio"
              checked={placement === p}
              onChange={() => setPlacement(p)}
            />
            {p}
          </label>
        ))}
      </div>
      <Button type="primary" onClick={show}>
        打开
      </Button>
      <Drawer
        visible={visible}
        title="Basic Drawer"
        placement={placement}
        onClose={hide}
        footer={'footer'}>
        <Layout vertical>
          body
          <br />
          <br />
          <Divider lineStyle="dashed">华丽的分割线</Divider>
          <textarea
            value={value}
            rows={8}
            onChange={(e) => setValue(e.target.value)}
          />
          <Divider lineStyle="dashed">华丽的分割线</Divider>
          <ul style={{ padding: '20px' }}>
            {[...Array.from({ length: 50 }).keys()].map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </Layout>
      </Drawer>
    </Space>
  );
};

export default App;
