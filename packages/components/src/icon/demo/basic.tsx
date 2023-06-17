/**
 * title: 基础用法
 * description: icon的基础用法。
 */

import React from 'react';
import { Icon, Icons } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <div className="demo-icon-basic" style={{ fontSize: '20px' }}>
      <style>{`.demo-icon-basic .t-icon {vertical-align: middle;}`}</style>
      <Icon size={26} style={{ color: 'blue' }}>
        <Icons.Close />
      </Icon>
      <Icon color="red">
        <Icons.Loading />
      </Icon>
    </div>
  );
};

export default App;
