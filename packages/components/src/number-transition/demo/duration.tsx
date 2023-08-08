/**
 * title: 动画时长
 * description: 自定义动画时长，单位为毫秒。默认为 3000。
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
        duration={8000}
        to={25}
        onFinished={() => {
          setDisabled(true);
          setActive(false);
        }}
      />
    </Space>
  );
};

export default App;
