/**
 * title: 按钮
 * description: 自定义按钮文本或去除按钮。
 */

import { PopConfirm, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <PopConfirm
        cancelProps={{ children: 'No, Thanks' }}
        attrs={{ style: { width: '220px' } }}
        confirmProps={{ children: 'ok' }}
        content="确认要删除？"
      >
        <Button>自定义文案</Button>
      </PopConfirm>

      <PopConfirm cancelProps={null} placement="bottom" content="确认要删除？">
        <Button>只有确认</Button>
      </PopConfirm>

      <PopConfirm
        content="确认要删除？确认要删除？确认要删除？确认要删除？确认要删除？"
        attrs={{ style: { width: '220px' } }}
        placement="left-start"
        confirmProps={null}
      >
        <Button>只有取消</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
