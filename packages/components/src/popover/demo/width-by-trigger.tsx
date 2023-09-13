/**
 * title: 使用触发元素的宽度
 */

import React from 'react';
import { Popover, Button } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Popover widthByTrigger trigger="click" content="宽度与按钮一致">
      <Button>click me～～</Button>
    </Popover>
  );
};

export default App;
