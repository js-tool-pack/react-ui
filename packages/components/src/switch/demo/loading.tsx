/**
 * title: 加载中
 */

import { Switch, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Space>
      <Switch loading />
      <Switch
        attrs={{
          onClickCapture(e) {
            if (loading) return;
            e.stopPropagation();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setChecked((v) => !v);
            }, 3500);
          },
        }}
        onChange={setChecked}
        checked={checked}
        loading={loading}
        size="large"
      />
    </Space>
  );
};

export default App;
