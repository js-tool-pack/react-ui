/**
 * title: 触发方式
 * description: 使用 trigger 可以设置 tooltip 的显示触发方式。
 *  有 'click'、 'focus'、 'hover' 三种方式可选，默认为 'hover'。
 */

import { Popover, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const triggers = ['hover', 'click'] as const;

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Space style={{ paddingTop: '30px' }}>
      {triggers.map((trigger) => (
        <Popover trigger={trigger} content={trigger} key={trigger}>
          <Button>{trigger + ' 触发'}</Button>
        </Popover>
      ))}
      <Popover trigger="focus" content="focus">
        <input placeholder="focus 触发" type="text" />
      </Popover>
      <Popover content="使用 visible 传参，外部控制显示隐藏" visible={visible}>
        <Button onClick={() => setVisible((v) => !v)}>自定义</Button>
      </Popover>
    </Space>
  );
};

export default App;
