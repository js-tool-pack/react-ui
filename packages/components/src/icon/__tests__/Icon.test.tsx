import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { Icon } from '~/icon';

describe('Icon', () => {
  testAttrs(Icon);

  test('basic', () => {
    const { container } = render(<Icon size={20}>123</Icon>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('size', () => {
    const { container } = render(<Icon size={20}>123</Icon>);
    expect(container.firstChild).toHaveStyle({ fontSize: '20px' });
  });

  test('color', () => {
    const { container } = render(<Icon color="#fff">123</Icon>);
    expect(container.firstChild).toHaveStyle({ color: '#fff' });
  });

  test('className', () => {
    const { container } = render(<Icon className="foo">123</Icon>);
    expect(container.firstChild).toHaveClass('t-icon foo');
  });

  test('role', () => {
    const { container } = render(<Icon className="foo">123</Icon>);
    expect(container.firstChild).toHaveAttribute('role', 'img');
  });
});
