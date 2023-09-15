/**
 * title: 自定义图标
 */

import { Switch, Icons, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Space>
      <Switch
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
        uncheckedChildren="false"
        checkedChildren="true"
        size="small"
      />
      <Switch
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
      />
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
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
        onChange={setChecked}
        checked={checked}
        loading={loading}
        size="large"
      />
    </Space>
  );
};

export default App;
