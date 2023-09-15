/**
 * title: 组合嵌套
 * description: 普通嵌套时，父子窗体是独立的，鼠标从父窗体移入子窗体，父窗体会消失；<br />
 *   内部嵌套时，子窗体插入父窗体，鼠标从父窗体移入子窗体，父窗体不会消失。
 */

import { Popover, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Popover
        content={
          <Popover content="父子窗体相互独立" placement="right">
            <span>hover~</span>
          </Popover>
        }
        attrs={{ style: { width: '100px' } }}
      >
        <Button>普通嵌套</Button>
      </Popover>
      <Popover
        content={
          <Popover
            attrs={{ style: { width: 'max-content' } }}
            // 虽然子窗体嵌入了内部，但是判断方位还是需要指定为外部视口
            viewport={() => document.body}
            content="子窗体嵌入父窗体内部"
            placement="right"
            // appendTo 为 null 时窗体会插入 span 内部
            appendTo={null}
          >
            <span style={{ position: 'relative' }}>hover~</span>
          </Popover>
        }
        attrs={{ style: { width: '100px' } }}
      >
        <Button>内部嵌套</Button>
      </Popover>
    </Space>
  );
};

export default App;
