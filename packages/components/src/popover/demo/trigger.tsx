/**
 * title: 触发方式
 * description: 使用 trigger 可以设置 tooltip 的显示触发方式。
 *  有 'click'、 'focus'、 'hover' 三种方式可选，默认为 'hover'。
 */

import React, { useState } from 'react';
import { Popover, Button, Space } from '@tool-pack/react-ui';

const triggers = ['hover', 'click'] as const;

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Space style={{ paddingTop: '30px' }}>
      {triggers.map((trigger) => (
        <Popover key={trigger} trigger={trigger} content={trigger}>
          <Button>{trigger + ' 触发'}</Button>
        </Popover>
      ))}
      <Popover trigger="focus" content="focus">
        <input type="text" placeholder="focus 触发" />
      </Popover>
      <Popover visible={visible} content="使用 visible 传参，外部控制显示隐藏">
        <Button onClick={() => setVisible((v) => !v)}>自定义</Button>
      </Popover>
    </Space>
  );
};

export default App;
