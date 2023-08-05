/**
 * title: 格式化
 * description: 对数字显示格式化。
 */

import React, { useState } from 'react';
import { Button, NumberTransition, Space } from '@tool-pack/react-ui';

const format = new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec');

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
        to={50}
        format={(value) => {
          return format.format(Number(value));
        }}
        onFinished={() => {
          setDisabled(true);
          setActive(false);
        }}
      />
    </Space>
  );
};

export default App;
