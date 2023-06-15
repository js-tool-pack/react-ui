/**
 * title: 按钮形状
 * description: 按钮有`none` `default` `round` `circle` 4种形状。
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
    <Button shape="none">none</Button>
    <Button>default</Button>
    <Button shape="round">round</Button>
    <Button size="large" shape="circle" style={{ fontSize: '12px' }}>
      circle
    </Button>
  </Layout>
);

export default App;
