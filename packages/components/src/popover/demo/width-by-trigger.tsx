/**
 * title: 使用触发元素的宽度
 */

import { Popover, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Popover content="宽度与按钮一致" trigger="click" widthByTrigger>
      <Button>click me～～</Button>
    </Popover>
  );
};

export default App;
