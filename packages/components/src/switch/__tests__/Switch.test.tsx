import { fireEvent, render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { Switch } from '..';

describe('Switch', () => {
  testAttrs(Switch);

  test('snap', () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('checked', () => {
    const { container } = render(<Switch checked />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('content', () => {
    const { container } = render(
      <Switch uncheckedChildren="false" checkedChildren="true" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('disabled', () => {
    const { container } = render(<Switch disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('icon', () => {
    expect(
      render(<Switch uncheckedIcon={2} checkedIcon={1} />).container.firstChild,
    ).toMatchSnapshot();
    expect(
      render(<Switch uncheckedIcon={2} checkedIcon={1} checked />).container
        .firstChild,
    ).toMatchSnapshot();
  });

  test('loading', () => {
    expect(render(<Switch loading />).container.firstChild).toMatchSnapshot();
  });

  test('onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<Switch onChange={onChange} />);

    expect(onChange).not.toBeCalled();
    fireEvent.click(container.firstChild!);
    expect(onChange).toBeCalled();
  });
});
