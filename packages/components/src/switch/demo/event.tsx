/**
 * title: 事件
 */

import { useMessageHolder, Switch } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Switch
        onChange={(checked) => {
          if (checked) message.success('开启');
          else message.info('关闭');
        }}
      />
    </>
  );
};

export default App;
