/**
 * title: 基础用法
 * description: NumberTransition 基础用法。
 */

import React, { useState } from 'react';
import { Button, NumberTransition, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <Space vertical>
      <Space>
        <Button
          type="primary"
          disabled={disabled}
          onClick={() => setActive((v) => !v)}>
          {active ? '暂停' : '启动'}
        </Button>
      </Space>
      <NumberTransition
        active={active}
        from={30}
        to={50}
        onFinished={() => {
          setDisabled(true);
          setActive(false);
        }}
      />
    </Space>
  );
};

export default App;
