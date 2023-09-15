import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { Resizer } from '..';

describe('Resizer', () => {
  testAttrs(Resizer);

  test('snap', () => {
    const { container } = render(<Resizer>foo bar</Resizer>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
