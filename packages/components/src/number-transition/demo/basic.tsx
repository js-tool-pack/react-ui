/**
 * title: 基础用法
 * description: NumberTransition 基础用法。
 */

import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

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
      </Space>
      <NumberTransition
        onFinished={() => {
          setDisabled(true);
          setActive(false);
        }}
        active={active}
        from={30}
        to={50}
      />
    </Space>
  );
};

export default App;
