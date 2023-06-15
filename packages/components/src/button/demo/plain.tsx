/**
 * title: 按钮边框
 * description: boolean | 'dashed' | 'text'。
 */

import React from 'react';
import { Button, Layout } from '@tool-pack/react-ui';

const App: React.FC = () => (
  <Layout
    style={{
      gap: '8px',
      flexWrap: 'wrap',
      overflow: 'visible',
      alignItems: 'center',
    }}>
    <Button type="primary" plain={false}>
      false
    </Button>
    <Button type="primary" plain>
      true
    </Button>
    <Button type="primary" plain="dashed">
      dashed
    </Button>
    <Button type="primary" plain="text">
      text
    </Button>
  </Layout>
);

export default App;
