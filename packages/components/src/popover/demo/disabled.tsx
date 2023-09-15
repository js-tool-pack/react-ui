/**
 * title: 禁用
 * description: 设置 disabled 为 true, 可以禁用 Popover 的任何触发显示方式。
 */

import { Popover, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const triggers = ['hover', 'click'] as const;

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <Space vertical>
      <label>
        <input
          onChange={(e) => setDisabled(e.target.checked)}
          checked={disabled}
          type="checkbox"
        />
        disabled
      </label>
      <Space>
        {triggers.map((trigger) => (
          <Popover
            disabled={disabled}
            trigger={trigger}
            content={trigger}
            key={trigger}
          >
            <Button>{trigger + ' 触发'}</Button>
          </Popover>
        ))}
        <Popover disabled={disabled} trigger="focus" content="focus">
          <input placeholder="focus 触发" type="text" />
        </Popover>
        <Popover
          content="使用 visible 传参，外部控制显示隐藏"
          disabled={disabled}
          visible={visible}
        >
          <Button onClick={() => setVisible((v) => !v)}>自定义</Button>
        </Popover>
      </Space>
    </Space>
  );
};

export default App;
