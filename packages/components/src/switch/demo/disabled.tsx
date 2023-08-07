/**
 * title: 禁止点击
 */

import React, { useState } from 'react';
import { Space, Switch } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Space vertical>
      <Space>
        <span>disabled: </span>
        <Switch checked={disabled} onChange={setDisabled} />
      </Space>
      <Space>
        <Switch size="small" disabled={disabled} />
        <Switch checked disabled={disabled} />
        <Switch size="large" disabled={disabled} />
      </Space>
    </Space>
  );
};

export default App;
