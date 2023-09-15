/**
 * title: 移除内部元素
 * description: 内部元素全都可以去掉。
 */

import { Alert, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <Alert title="完全状态" bordered closable>
        完全状态包含：边框、图标、标题、描述、关闭按钮
      </Alert>
      <Alert bordered={false} title="移除部分" icon={null}>
        移除边框、图标、关闭按钮
      </Alert>
      <Alert bordered={false} title="移除描述" closable />
      <Alert
        title="只留下标题和关闭按钮"
        bordered={false}
        icon={null}
        closable
      />

      <Alert bordered={false} closable>
        移除title
      </Alert>
      <Alert bordered={false} icon={null} />
    </Space>
  );
};

export default App;
