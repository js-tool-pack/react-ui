import { Header, Layout, Footer, Aside, Main } from '~/layouts';
import { RenderResult, render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';

describe('layouts', () => {
  describe('attrs', () => {
    testAttrs(Layout, 'Layout');
    testAttrs(Header, 'Header');
    testAttrs(Main, 'Main');
    testAttrs(Aside, 'Aside');
    testAttrs(Footer, 'Footer');
  });

  test('tag', () => {
    const getChild = (res: RenderResult) => res.container.firstChild;
    expect(getChild(render(<Layout tag="span" />))).toMatchSnapshot();
    expect(getChild(render(<Main tag="span" />))).toMatchSnapshot();
    expect(getChild(render(<Aside tag="span" />))).toMatchSnapshot();
    expect(getChild(render(<Header tag="span" />))).toMatchSnapshot();
    expect(getChild(render(<Footer tag="span" />))).toMatchSnapshot();
  });

  test('vertical', () => {
    const { container } = render(
      <Layout vertical>
        <Header>header</Header>
        <Layout>
          <Aside>aside</Aside>
          <Main>main</Main>
        </Layout>
        <Footer>footer</Footer>
      </Layout>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveClass('t-layout--v');
  });
});
