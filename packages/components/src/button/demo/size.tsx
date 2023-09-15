/**
 * title: 按钮尺寸
 * description: 按钮有大、中、小三种尺寸。 <br />通过设置 `size` 为 `large` `medium` `small` 分别把按钮设为大、中、小尺寸。若不设置 `size`，则尺寸为中。
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
    <Button size="small">small</Button>
    <Button>default</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </Layout>
);

export default App;
