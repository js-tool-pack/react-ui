/**
 * title: 精度
 * description: 小数位数。默认小数位数为 0。为 null 时保持原样输出。
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
      <Space>
        <div>小数位 2</div>
        <NumberTransition
          onFinished={() => {
            setDisabled(true);
            setActive(false);
          }}
          active={active}
          precision={2}
        />
      </Space>
      <Space>
        <div>小数位 null 保持原样</div>
        <NumberTransition
          onFinished={() => {
            setDisabled(true);
            setActive(false);
          }}
          precision={null}
          active={active}
        />
      </Space>
    </Space>
  );
};

export default App;
