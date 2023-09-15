/**
 * title: 动画时长
 * description: 自定义动画时长，单位为毫秒。默认为 3000。
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
        duration={8000}
        to={25}
      />
    </Space>
  );
};

export default App;
