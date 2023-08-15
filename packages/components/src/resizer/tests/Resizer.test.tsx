import { testAttrs } from '~/testAttrs';
import { Resizer } from '..';
import { render } from '@testing-library/react';

describe('Resizer', () => {
  testAttrs(Resizer);

  test('snap', () => {
    const { container } = render(<Resizer>foo bar</Resizer>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
