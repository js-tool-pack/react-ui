import { Popover } from '..';
import { act, fireEvent, render } from '@testing-library/react';
import { Button } from '~/button';
import { nextTick } from '@tool-pack/basic';

describe('Popover', () => {
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
      <Popover
        visible
        attrs={{ className: 'foo', style: { background: '#fff' }, onClick }}
        appendTo={null}>
        <Button>foo bar</Button>
      </Popover>,
    );
    const balloon = container.querySelector('.t-word-balloon');

    expect(balloon).toHaveClass('foo');
    expect(balloon).toHaveStyle({ background: '#fff' });

    expect(onClick).not.toBeCalled();
    fireEvent.click(balloon!);
    expect(onClick).toBeCalled();
  });

  describe('appendTo', () => {
    test('null', () => {
      const { container } = render(
        <Popover visible content={<div>foo bar</div>} appendTo={null}>
          <Button>foo bar</Button>
        </Popover>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('undefined(default)', () => {
      const { container } = render(
        <Popover visible content={<div>foo bar</div>} appendTo={undefined}>
          <Button>foo bar</Button>
        </Popover>,
      );
      expect(container.firstChild).toMatchSnapshot();
      expect(document.body).toMatchSnapshot();
    });

    test('fn', () => {
      const { container } = render(
        <div>
          <div className="wrapper"></div>
          <Popover
            visible
            content={<div>foo bar</div>}
            appendTo={() => document.querySelector('.wrapper')!}>
            <Button>foo bar</Button>
          </Popover>
        </div>,
      );
      expect(container.querySelector('.wrapper')).toMatchSnapshot();
    });
  });

  describe('trigger', () => {
    test('focus', () => {
      const { container } = render(
        <Popover trigger="focus" content="focus">
          <input type="text" placeholder="focus 触发" />
        </Popover>,
      );

      expect(document.body).toMatchSnapshot();
      fireEvent.focus(container.querySelector('input')!);
      expect(document.body).toMatchSnapshot();
    });

    test('click', () => {
      const { container } = render(
        <Popover trigger="click" content="click">
          <Button>click触发</Button>
        </Popover>,
      );

      expect(document.body).toMatchSnapshot();
      fireEvent.click(container.querySelector('button')!);
      expect(document.body).toMatchSnapshot();
    });

    test('click disabled', () => {
      const { container } = render(
        <Popover disabled trigger="click" content="click">
          <Button>click触发</Button>
        </Popover>,
      );

      expect(document.body).toMatchSnapshot();
      fireEvent.click(container.querySelector('button')!);
      expect(document.body).toMatchSnapshot();
    });

    test('hover', () => {
      const { container } = render(
        <Popover trigger="hover" content="hover">
          <Button>hover触发</Button>
        </Popover>,
      );

      expect(document.body).toMatchSnapshot();
      fireEvent.mouseEnter(container.querySelector('button')!);
      expect(document.body).toMatchSnapshot();
    });

    test('contextmenu', async () => {
      const { container } = render(
        <Popover trigger="contextmenu" content="contextmenu">
          {/* 不能用 button，因为 contextmenu 事件不能透传给 Button 组件 */}
          {/*<Button className="trigger">鼠标右击触发</Button>*/}
          <div className="trigger">鼠标右击触发</div>
        </Popover>,
      );

      expect(document.body).toMatchSnapshot();
      fireEvent.contextMenu(container.querySelector('.trigger')!);
      await act(() => nextTick());

      expect(document.body).toMatchSnapshot();
    });

    test('arr focus', () => {
      const { container } = render(
        <Popover trigger={['focus', 'click']} content="focus">
          <input type="text" placeholder="focus 触发" />
        </Popover>,
      );
      fireEvent.focus(container.querySelector('input')!);
      expect(document.body).toMatchSnapshot();
    });

    test('arr click', () => {
      const { container } = render(
        <Popover trigger={['focus', 'click']} content="click">
          <Button>click触发</Button>
        </Popover>,
      );
      fireEvent.click(container.querySelector('button')!);
      expect(document.body).toMatchSnapshot();
    });
  });

  test('placement', () => {
    render(
      <Popover visible placement="right-end" content="bar">
        <Button>foo</Button>
      </Popover>,
    );
    expect(document.querySelector('.t-word-balloon')).toHaveClass(
      't-word-balloon--right-end',
    );
  });

  describe('delay', () => {
    test('delay default', () => {
      const { container } = render(
        <Popover trigger="hover" content="hover">
          <Button>hover触发</Button>
        </Popover>,
      );

      expect(document.querySelector('.t-word-balloon')).toBeNull();
      fireEvent.mouseEnter(container.querySelector('button')!);
      expect(document.querySelector('.t-word-balloon')).not.toBeNull();
    });

    test('delay 500', () => {
      jest.useFakeTimers();
      const { container } = render(
        <Popover delay={500} trigger="hover" content="hover">
          <Button>hover触发</Button>
        </Popover>,
      );

      expect(document.querySelector('.t-word-balloon')).toBeNull();
      fireEvent.mouseEnter(container.querySelector('button')!);
      expect(document.querySelector('.t-word-balloon')).toBeNull();
      act(() => jest.advanceTimersByTime(500));
      expect(document.querySelector('.t-word-balloon')).not.toBeNull();
    });

    test('leaveDelay default', () => {
      jest.useFakeTimers();
      const { container } = render(
        <Popover trigger="hover" content="hover">
          <Button>hover触发</Button>
        </Popover>,
      );

      expect(document.querySelector('.t-word-balloon')).toBeNull();
      fireEvent.mouseEnter(container.querySelector('button')!);
      expect(document.querySelector('.t-word-balloon')).not.toBeNull();

      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
      fireEvent.mouseLeave(document.querySelector('.t-word-balloon')!);
      act(() => jest.advanceTimersByTime(200));
      // todo: 这里暂时测不了，需要给 Transition 组件添加一个默认定时器触发 transitionend 事件
      // expect(document.querySelector('.t-word-balloon')).toHaveClass(
      //   't-popover-leave-active',
      // );
      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
    });
    test('leaveDelay 500', () => {
      jest.useFakeTimers();
      const { container } = render(
        <Popover trigger="hover" content="hover">
          <Button>hover触发</Button>
        </Popover>,
      );

      expect(document.querySelector('.t-word-balloon')).toBeNull();
      fireEvent.mouseEnter(container.querySelector('button')!);
      expect(document.querySelector('.t-word-balloon')).not.toBeNull();

      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
      fireEvent.mouseLeave(document.querySelector('.t-word-balloon')!);
      act(() => jest.advanceTimersByTime(500));
      // todo: 这里暂时测不了，需要给 Transition 组件添加一个默认定时器触发 transitionend 事件
      // expect(document.querySelector('.t-word-balloon')).toHaveClass(
      //   't-popover-leave-active',
      // );
      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
    });
  });
});
