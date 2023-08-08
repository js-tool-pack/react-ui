/**
 * title: 精度
 * description: 小数位数。默认小数位数为 0。为 null 时保持原样输出。
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
      <Space>
        <div>小数位 2</div>
        <NumberTransition
          active={active}
          precision={2}
          onFinished={() => {
            setDisabled(true);
            setActive(false);
          }}
        />
      </Space>
      <Space>
        <div>小数位 null 保持原样</div>
        <NumberTransition
          active={active}
          precision={null}
          onFinished={() => {
            setDisabled(true);
            setActive(false);
          }}
        />
      </Space>
    </Space>
  );
};

export default App;
