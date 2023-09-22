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

  test('textarea', () => {
    expect(
      render(<Input type="textarea" />).container.firstChild,
    ).toMatchSnapshot();
  });

  test('count', () => {
    expect(render(<Input showCount />).container.firstChild).toMatchSnapshot();
    expect(
      render(<Input maxLength={20} showCount />).container.firstChild,
    ).toMatchSnapshot();
    expect(
      render(<Input type="textarea" showCount />).container.firstChild,
    ).toMatchSnapshot();
    expect(
      render(<Input type="textarea" maxLength={20} showCount />).container
        .firstChild,
    ).toMatchSnapshot();

    expect(
      render(
        <Input value="👨‍👨‍👦‍👦" maxLength={20} showCount />,
      ).container.querySelector('.t-input__count'),
    ).toHaveTextContent('11 / 20');

    const segmenter = new Intl.Segmenter('fr', {
      granularity: 'grapheme',
    });
    expect(
      render(
        <Input
          count={(value) => Array.from(segmenter.segment(value)).length}
          value="👨‍👨‍👦‍👦"
          maxLength={20}
          showCount
        />,
      ).container.querySelector('.t-input__count'),
    ).toHaveTextContent('1 / 20');
  });

  describe('password', () => {
    test('basic', () => {
      const { container } = render(<Input type="password" />);
      expect(container.firstChild).toMatchSnapshot();
      expect(getInput()).toHaveValue('');
    });

    test('value', () => {
      render(<Input type="password" value="123" />);
      expect(getInput()).not.toHaveAttribute('value');

      fireEvent.focus(getInput()!);
      expect(getInput()).not.toHaveAttribute('value');

      fireEvent.blur(getInput()!);
      expect(getInput()).not.toHaveAttribute('value');

      fireEvent.change(getInput()!, { target: { value: '321' } });
      expect(getInput()).not.toHaveAttribute('value');
    });

    test('showPasswordOn = click', () => {
      render(<Input showPasswordOn="click" type="password" value="123" />);

      expect(getInput()).toHaveValue('123');
      expect(getInput()).not.toHaveAttribute('value');

      fireEvent.click(getSwitch()!);
      expect(getInput()).toHaveAttribute('value');

      fireEvent.click(getSwitch()!);
      expect(getInput()).not.toHaveAttribute('value');
    });

    test('showPasswordOn = mouseDown', () => {
      render(<Input showPasswordOn="mouseDown" type="password" value="123" />);

      expect(getInput()).toHaveValue('123');
      expect(getInput()).not.toHaveAttribute('value');

      fireEvent.mouseDown(getSwitch()!);
      expect(getInput()).toHaveAttribute('value');

      fireEvent.mouseUp(getSwitch()!);
      expect(getInput()).not.toHaveAttribute('value');
    });

    function getSwitch() {
      return document.querySelector<HTMLElement>('.t-input__switch');
    }
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
