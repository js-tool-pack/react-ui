/**
 * title: 按钮形状
 * description: 按钮有`none` `default` `round` `circle` 4种形状。
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
    <Button shape="none">none</Button>
    <Button>default</Button>
    <Button shape="round">round</Button>
    <Button style={{ fontSize: '12px' }} shape="circle" size="large">
      circle
    </Button>
  </Layout>
);

export default App;
