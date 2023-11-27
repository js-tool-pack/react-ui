/**
 * title: 回调
 * description: 宽高调整后的回调
 */

import { useMessageHolder, Resizer } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <div>
      {holder}
      <div
        style={{
          background: 'rgb(222 133 210 / 62%)',
          position: 'relative',
          height: '10px',
        }}
      >
        <Resizer onResized={() => message.info('resized')} />
      </div>
    </div>
  );
};

export default App;
