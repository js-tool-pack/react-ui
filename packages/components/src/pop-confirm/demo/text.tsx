/**
 * title: 按钮
 * description: 自定义按钮文本或去除按钮。
 */

import React from 'react';
import { Button, PopConfirm, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space>
      <PopConfirm
        attrs={{ style: { width: '220px' } }}
        confirmText="confirm"
        cancelText="No, Thanks"
        content="确认要删除？">
        <Button>自定义文案</Button>
      </PopConfirm>

      <PopConfirm cancelText={null} placement="bottom" content="确认要删除？">
        <Button>只有确认</Button>
      </PopConfirm>

      <PopConfirm
        attrs={{ style: { width: '220px' } }}
        confirmText={null}
        placement="left-start"
        content="确认要删除？确认要删除？确认要删除？确认要删除？确认要删除？">
        <Button>只有取消</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
