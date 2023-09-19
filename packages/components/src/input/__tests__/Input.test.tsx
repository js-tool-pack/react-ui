import { fireEvent, render } from '@testing-library/react';
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

  test('clearable', () => {
    const { container } = render(<Input clearable />);
    expect(container).toMatchSnapshot();

    expect(getInput()).toHaveValue('');
    expect(getClear()).toBeNull();

    fireEvent.change(getInput()!, { target: { value: 'foo bar' } });
    expect(getInput()).toHaveValue('foo bar');
    expect(getClear()).not.toBeNull();

    expect(getInput()).toHaveValue('foo bar');
    fireEvent.click(getClear()!);
    expect(getInput()).toHaveValue('');
  });

  test('size', () => {
    expect(render(<Input />).container.firstChild).toHaveClass('t--size-m');
    expect(render(<Input size="small" />).container.firstChild).toHaveClass(
      't--size-sm',
    );
    expect(render(<Input size="medium" />).container.firstChild).toHaveClass(
      't--size-m',
    );
    expect(render(<Input size="large" />).container.firstChild).toHaveClass(
      't--size-lg',
    );
  });

  test('prefix', () => {
    expect(
      render(<Input prefix="foo" />).container.firstChild,
    ).toMatchSnapshot();
  });

  test('suffix', () => {
    expect(
      render(<Input suffix="bar" />).container.firstChild,
    ).toMatchSnapshot();
  });

  test('loading', () => {
    expect(render(<Input loading />).container.firstChild).toMatchSnapshot();
  });

  function getClear(container?: HTMLElement) {
    return (container || document).querySelector<HTMLElement>(
      '.t-input__clear',
    );
  }
  function getInput(container?: HTMLElement) {
    return (container || document).querySelector<HTMLInputElement>('input');
  }
});
