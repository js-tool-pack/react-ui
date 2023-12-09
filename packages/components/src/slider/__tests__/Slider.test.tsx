import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { Slider } from '..';

describe('Slider', () => {
  testAttrs(Slider);

  test('basic', () => {
    const { container } = render(<Slider />);
    expect(container).toMatchSnapshot();
  });
});
