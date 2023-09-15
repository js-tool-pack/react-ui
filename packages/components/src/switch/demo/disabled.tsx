/**
 * title: 禁止点击
 */

import { Switch, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Space vertical>
      <Space>
        <span>disabled: </span>
        <Switch onChange={setDisabled} checked={disabled} />
      </Space>
      <Space>
        <Switch disabled={disabled} size="small" />
        <Switch disabled={disabled} checked />
        <Switch disabled={disabled} size="large" />
      </Space>
    </Space>
  );
};

export default App;
