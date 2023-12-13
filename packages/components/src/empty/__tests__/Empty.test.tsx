import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { Empty } from '..';

describe('Empty', () => {
  testAttrs(Empty);

  it('basic', () => {
    expect(render(<Empty />).container).toMatchSnapshot();
  });
  it('custom', () => {
    expect(
      render(
        <Empty description={2} icon="1">
          3
        </Empty>,
      ).container,
    ).toMatchSnapshot();
  });
});
