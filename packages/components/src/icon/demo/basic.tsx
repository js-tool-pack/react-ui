/**
 * title: 基础用法
 * description: icon的基础用法。
 */

import { Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space style={{ fontSize: '16px' }} className="demo-icon-basic">
      <Icon attrs={{ style: { color: 'blue' } }} size={26}>
        <Icons.Close />
      </Icon>
      <Icon color="red">
        <Icons.Loading />
      </Icon>
    </Space>
  );
};

export default App;
