/**
 * title: 加载中
 */

import React, { useEffect, useState } from 'react';
import { Button, Icons, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Space vertical>
      <Button
        size="small"
        type="danger"
        loading={loading}
        icon={<Icons.CircleWarning />}
        onClick={() => setLoading(true)}>
        Delete
      </Button>

      <Button type="success" loading={loading} onClick={() => setLoading(true)}>
        Commit
      </Button>

      <Button
        type="primary"
        size="large"
        loading={loading}
        icon={<Icons.CircleWarning />}
        onClick={() => setLoading(true)}
      />
    </Space>
  );
};

export default App;
