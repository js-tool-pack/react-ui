/**
 * title: 基础用法
 * description: icon的基础用法。
 */

import React from 'react';
import { Icon, Icons, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space className="demo-icon-basic" style={{ fontSize: '16px' }}>
      <Icon size={26} attrs={{ style: { color: 'blue' } }}>
        <Icons.Close />
      </Icon>
      <Icon color="red">
        <Icons.Loading />
      </Icon>
    </Space>
  );
};

export default App;
