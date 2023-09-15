/**
 * title: 按钮边框
 * description: boolean | 'dashed' | 'text'。
 */

import { Button, Layout } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => (
  <Layout
    style={{
      alignItems: 'center',
      overflow: 'visible',
      flexWrap: 'wrap',
      gap: '8px',
    }}
  >
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
