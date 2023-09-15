/**
 * title: 基础用法
 * description: Drawer 基础用法。
 */

import {
  PLACEMENTS,
  Divider,
  Button,
  Drawer,
  Layout,
  Space,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

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
              onChange={() => setPlacement(p)}
              checked={placement === p}
              type="radio"
            />
            {p}
          </label>
        ))}
      </div>
      <Button type="primary" onClick={show}>
        打开
      </Button>
      <Drawer
        placement={placement}
        title="Basic Drawer"
        visible={visible}
        footer={'footer'}
        onClose={hide}
      >
        <Layout vertical>
          body
          <br />
          <br />
          <Divider lineStyle="dashed">华丽的分割线</Divider>
          <textarea
            onChange={(e) => setValue(e.target.value)}
            value={value}
            rows={8}
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
