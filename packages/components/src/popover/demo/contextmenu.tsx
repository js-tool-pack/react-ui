/**
 * title: 鼠标右击启动
 */

import { Popover } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <Popover trigger="contextmenu" content="test">
        <div
          style={{
            justifyContent: 'center',
            background: 'deeppink',
            alignItems: 'center',
            display: 'flex',
            height: '200px',
          }}
        >
          鼠标右击
        </div>
      </Popover>
    </div>
  );
};

export default App;
