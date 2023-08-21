import { Tooltip } from '..';
import { fireEvent, render } from '@testing-library/react';
import { Button } from '~/button';

describe('Tooltip', () => {
  // 模拟 ResizeObserver，ResizeObserver 不存在于 jsdom 中
  const MockObserverInstance: ResizeObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
  beforeEach(() => {
    global.ResizeObserver = jest
      .fn()
      .mockImplementation(() => MockObserverInstance);
  });

  test('attrs', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Tooltip
        visible
        attrs={{ className: 'foo', style: { background: '#fff' }, onClick }}
        appendTo={null}>
        <Button>foo bar</Button>
      </Tooltip>,
    );
    const balloon = container.querySelector('.t-word-balloon');

    expect(balloon).toHaveClass('foo');
    expect(balloon).toHaveStyle({ background: '#fff' });

    expect(onClick).not.toBeCalled();
    fireEvent.click(balloon!);
    expect(onClick).toBeCalled();
  });
});
