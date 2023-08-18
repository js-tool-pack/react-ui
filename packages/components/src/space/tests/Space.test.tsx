import { testAttrs } from '~/testAttrs';
import { Space } from '..';
import { render } from '@testing-library/react';

describe('Space', () => {
  testAttrs(Space);

  test('snap', () => {
    const { container } = render(
      <Space>
        <div>1</div>
        <div>2</div>
      </Space>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('tag', () => {
    const { container } = render(<Space tag="div" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('gap', () => {
    const { container } = render(<Space gap={20} />);
    expect(container.firstChild).toHaveStyle({ gap: '20px' });
  });

  test('vertical', () => {
    const { container } = render(<Space vertical />);
    expect(container.firstChild).toHaveClass('t-space--vertical');
  });

  test('inline', () => {
    const { container } = render(<Space inline />);
    expect(container.firstChild).toHaveClass('t-space--inline');
  });

  test('fill', () => {
    const { container } = render(<Space fill fillRatio={20} />);
    expect(container.firstChild).toHaveClass('t-space--fill');
    expect(container.firstChild).toHaveStyle({ '--t-space-fill-ratio': '20%' });
  });

  test('separator', () => {
    const { container } = render(
      <Space separator={<div className="sep">|</div>}>
        <div>1</div>
        <div>2</div>
      </Space>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
