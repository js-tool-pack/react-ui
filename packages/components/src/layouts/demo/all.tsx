/**
 * title: 总览
 * description: 总览。
 */

import { Footer, Header, Layout, Aside, Main } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Layout style={{ background: '#efefef', textAlign: 'center' }} vertical>
      <Header style={{ background: 'pink' }} className="header">
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
