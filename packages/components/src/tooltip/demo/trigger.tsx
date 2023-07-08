/**
 * title: 触发方式
 * description: 使用 trigger 可以设置 tooltip 的显示触发方式。
 *  有 'click'、 'focus'、 'hover' 三种方式可选，默认为 'hover'。
 */

import React, { useState } from 'react';
import { Tooltip, Button, Space } from '@tool-pack/react-ui';

const triggers = ['hover', 'click'] as const;

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Space style={{ paddingTop: '30px' }}>
      {triggers.map((trigger) => (
        <Tooltip key={trigger} trigger={trigger} title={trigger}>
          <Button>{trigger + ' 触发'}</Button>
        </Tooltip>
      ))}
      <Tooltip trigger="focus" title="focus">
        <input type="text" placeholder="focus 触发" />
      </Tooltip>
      <Tooltip visible={visible} title="使用 visible 传参，外部控制显示隐藏">
        <Button onClick={() => setVisible((v) => !v)}>自定义</Button>
      </Tooltip>
    </Space>
  );
};

export default App;
