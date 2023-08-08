/**
 * title: 重置
 * description: 重置为初始状态。
 */

import React, { useState } from 'react';
import { Button, NumberTransition, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [signal, setSignal] = useState({});

  const reset = () => {
    setDisabled(false);
    setActive(false);
    setSignal({});
  };

  const onFinished = () => {
    setDisabled(true);
    setActive(false);
  };

  return (
    <Space vertical>
      <Space>
        <Button
          type="primary"
          disabled={disabled}
          onClick={() => setActive((v) => !v)}>
          {active ? '暂停' : '启动'}
        </Button>
        <Button onClick={reset}>重置</Button>
      </Space>
      <NumberTransition
        resetSignal={signal}
        active={active}
        to={50}
        onFinished={onFinished}
      />
    </Space>
  );
};

export default App;
