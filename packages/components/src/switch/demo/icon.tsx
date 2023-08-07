/**
 * title: 自定义图标
 */

import React, { useState } from 'react';
import { Icons, Space, Switch } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Space>
      <Switch
        size="small"
        checkedChildren="true"
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedChildren="false"
        uncheckedIcon={<Icons.CircleCloseFill />}
      />
      <Switch
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
      />
      <Switch
        size="large"
        checked={checked}
        onChange={setChecked}
        loading={loading}
        checkedIcon={<Icons.CircleSuccessFill />}
        uncheckedIcon={<Icons.CircleCloseFill />}
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
