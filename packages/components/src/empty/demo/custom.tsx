/**
 * title: 自定义
 */

import { Button, Empty, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Empty
      icon={
        <Icon size={35}>
          <Icons.CircleWarningFill />
        </Icon>
      }
      description="暂无数据"
    >
      <Button>点击刷新</Button>
    </Empty>
  );
};

export default App;
