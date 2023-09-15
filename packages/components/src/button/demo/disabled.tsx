/**
 * title: 禁止点击
 * description: 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */

import { Layout as OriginLayout, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => (
  <Layout vertical>
    <Layout>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Layout>
    <Layout>
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Layout>
  </Layout>
);

const Layout: React.FC<Parameters<typeof OriginLayout>[0]> = React.memo(
  (props) => (
    <OriginLayout
      {...props}
      style={{
        overflow: 'visible',
        flexWrap: 'wrap',
        gap: '8px',
        ...props.style,
      }}
    >
      {props.children}
    </OriginLayout>
  ),
);

export default App;
