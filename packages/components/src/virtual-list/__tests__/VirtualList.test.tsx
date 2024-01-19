import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { VirtualList } from '..';

describe('VirtualList', () => {
  testAttrs(VirtualList);
  it('basic', () => {
    expect(
      render(
        <VirtualList>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </VirtualList>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });
});
