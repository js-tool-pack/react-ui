import { testAttrs } from '~/testAttrs';
import { Option } from '~/option';
import { render } from '@testing-library/react';
import { CircleClose } from '@pkg/icons';

describe('Option', () => {
  testAttrs(Option);

  test('snap', () => {
    const { container } = render(<Option>foo bar</Option>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('disabled', () => {
    const { container } = render(<Option disabled>foo bar</Option>);
    expect(container.firstChild).toHaveAttribute('disabled', '');
  });

  test('extra', () => {
    const { container } = render(
      <Option extra={'hello world'}>foo bar</Option>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('icon', () => {
    const { container } = render(
      <Option icon={<CircleClose />}>foo bar</Option>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('readonly', () => {
    const { container } = render(<Option readonly>foo bar</Option>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
