/**
 * title: 鼠标右击启动
 */

import React from 'react';
import { Popover } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <div>
      <Popover trigger="contextmenu" content="test">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            background: 'deeppink',
          }}>
          鼠标右击
        </div>
      </Popover>
    </div>
  );
};

export default App;
