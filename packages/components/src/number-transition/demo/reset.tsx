/**
 * title: 重置
 * description: 重置为初始状态。
 */

import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

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
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
          {active ? '暂停' : '启动'}
        </Button>
        <Button onClick={reset}>重置</Button>
      </Space>
      <NumberTransition
        onFinished={onFinished}
        resetSignal={signal}
        active={active}
        to={50}
      />
    </Space>
  );
};

export default App;
