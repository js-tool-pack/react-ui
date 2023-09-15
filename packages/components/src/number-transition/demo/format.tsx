/**
 * title: 格式化
 * description: 对数字显示格式化。
 */

import { NumberTransition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const format = new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec');

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
        format={(value) => {
          return format.format(Number(value));
        }}
        active={active}
        to={50}
      />
    </Space>
  );
};

export default App;
