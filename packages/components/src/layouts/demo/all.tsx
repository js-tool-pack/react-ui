/**
 * title: 总览
 * description: 总览。
 */

import React from 'react';
import { Aside, Footer, Header, Layout, Main } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Layout vertical style={{ textAlign: 'center', background: '#efefef' }}>
      <Header className="header" style={{ background: 'pink' }}>
        header
      </Header>
      <Layout>
        <Aside style={{ width: '200px' }}>aside</Aside>
        <Main style={{ background: 'blue' }}>main</Main>
      </Layout>
      <Layout vertical>
        <Aside style={{ background: 'lime' }}>aside</Aside>
        <Main>main</Main>
      </Layout>
      <Footer style={{ background: 'pink' }}>footer</Footer>
    </Layout>
  );
};

export default App;
