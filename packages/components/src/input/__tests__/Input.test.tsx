import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { InputProps, Input } from '..';

describe('Input', () => {
  testAttrs<InputProps>(({ attrs, ref, ...rest }) => {
    return <Input {...rest} rootAttrs={attrs as any} rootRef={ref as any} />;
  });

  test('basic', () => {
    expect(render(<Input />).container).toMatchSnapshot();
    expect(
      render(<Input attrs={{ className: 'hello' }} />).container,
    ).toMatchSnapshot();
  });
});
