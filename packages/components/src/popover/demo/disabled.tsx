/**
 * title: 禁用
 * description: 设置 disabled 为 true, 可以禁用 Popover 的任何触发显示方式。
 */

import React, { useState } from 'react';
import { Popover, Button, Space } from '@tool-pack/react-ui';

const triggers = ['hover', 'click'] as const;

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <Space vertical>
      <label>
        <input
          checked={disabled}
          type="checkbox"
          onChange={(e) => setDisabled(e.target.checked)}
        />
        disabled
      </label>
      <Space>
        {triggers.map((trigger) => (
          <Popover
            key={trigger}
            disabled={disabled}
            trigger={trigger}
            content={trigger}>
            <Button>{trigger + ' 触发'}</Button>
          </Popover>
        ))}
        <Popover disabled={disabled} trigger="focus" content="focus">
          <input type="text" placeholder="focus 触发" />
        </Popover>
        <Popover
          disabled={disabled}
          visible={visible}
          content="使用 visible 传参，外部控制显示隐藏">
          <Button onClick={() => setVisible((v) => !v)}>自定义</Button>
        </Popover>
      </Space>
    </Space>
  );
};

export default App;
