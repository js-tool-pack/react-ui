/**
 * title: 图标
 * description: 可以自定义图标或去掉图标。
 */

import { Alert, Icons, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <Alert icon={<Icons.CircleSuccessFill />} title="自定义图标">
        可以使用自定义图标更换默认图标
      </Alert>
      <Alert title="移除图标" icon={null}>
        icon 为 null 时移除图标
      </Alert>
    </Space>
  );
};

export default App;
