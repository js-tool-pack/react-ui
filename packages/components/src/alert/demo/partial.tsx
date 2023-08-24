/**
 * title: 移除内部元素
 * description: 内部元素全都可以去掉。
 */

import React from 'react';
import { Alert, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <Alert title="完全状态" bordered closable>
        完全状态包含：边框、图标、标题、描述、关闭按钮
      </Alert>
      <Alert icon={null} bordered={false} title="移除部分">
        移除边框、图标、关闭按钮
      </Alert>
      <Alert title="移除描述" bordered={false} closable />
      <Alert
        title="只留下标题和关闭按钮"
        bordered={false}
        icon={null}
        closable
      />

      <Alert closable bordered={false}>
        移除title
      </Alert>
      <Alert icon={null} bordered={false} />
    </Space>
  );
};

export default App;
