/**
 * title: 按钮类型
 * description: 按钮有六种类型：默认按钮、主按钮、成功按钮、信息按钮、警告按钮和危险按钮。主按钮在同一个操作区域最多出现一次。
 */

import React from 'react';
import { Button, Layout } from '@tool-pack/react-ui';

const App: React.FC = () => (
  <Layout style={{ gap: '8px', flexWrap: 'wrap', overflow: 'visible' }}>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="success">Success Button</Button>
    <Button type="info">Info Button</Button>
    <Button type="warning">warning Button</Button>
    <Button type="danger">warning Button</Button>
  </Layout>
);

export default App;
