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

  test('expandable', () => {
    const { container } = render(<Option expandable>foo bar</Option>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('icon', () => {
    const { container } = render(
      <Option icon={<CircleClose />} expandable>
        foo bar
      </Option>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('readonly', () => {
    const { container } = render(<Option readonly>foo bar</Option>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
