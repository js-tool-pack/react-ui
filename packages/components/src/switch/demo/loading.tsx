/**
 * title: 加载中
 */

import React, { useState } from 'react';
import { Space, Switch } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Space>
      <Switch loading />
      <Switch
        size="large"
        checked={checked}
        onChange={setChecked}
        loading={loading}
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
      />
    </Space>
  );
};

export default App;
