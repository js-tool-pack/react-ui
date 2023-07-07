/**
 * title: 禁用
 * description: 设置 disabled 为 true, 可以禁用 Tooltip 的任何触发显示方式。
 */

import React, { useState } from 'react';
import { Tooltip, Button, Space } from '@tool-pack/react-ui';

const triggers = ['hover', 'click', 'focus'] as const;

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
          <Tooltip
            key={trigger}
            disabled={disabled}
            trigger={trigger}
            title={trigger}>
            <Button>{trigger + ' 触发'}</Button>
          </Tooltip>
        ))}
        <Tooltip
          placement={'top'}
          disabled={disabled}
          visible={visible}
          title={'使用 visible 传参，外部控制显示隐藏'}>
          <Button onClick={() => setVisible((v) => !v)}>自定义</Button>
        </Tooltip>
      </Space>
    </Space>
  );
};

export default App;
