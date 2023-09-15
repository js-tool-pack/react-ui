/**
 * title: 加载中
 */

import { Button, Icons, Space } from '@tool-pack/react-ui';
import React, { useEffect, useState } from 'react';

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
        onClick={() => setLoading(true)}
        icon={<Icons.CircleWarning />}
        loading={loading}
        type="danger"
        size="small"
      >
        Delete
      </Button>

      <Button onClick={() => setLoading(true)} loading={loading} type="success">
        Commit
      </Button>

      <Button
        onClick={() => setLoading(true)}
        icon={<Icons.CircleWarning />}
        loading={loading}
        type="primary"
        size="large"
      />
    </Space>
  );
};

export default App;
