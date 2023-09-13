import { Popover } from '..';
import { act, fireEvent, render } from '@testing-library/react';
import { Button } from '~/button';
import { nextTick } from '@tool-pack/basic';
import { useRef, useState } from 'react';

describe('Popover', () => {
  jest.useFakeTimers();
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
      act(() => jest.advanceTimersByTime(0));
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
      act(() => jest.advanceTimersByTime(0));
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
      act(() => jest.advanceTimersByTime(0));
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

      expect(document.querySelector('.t-word-balloon')).toHaveClass(
        't-popover-enter-active',
      );

      // Transition 超时300毫秒后会切换为 idle 或 invisible
      act(() => jest.advanceTimersByTime(300));
      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-enter-active',
      );

      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
      fireEvent.mouseLeave(document.querySelector('.t-word-balloon')!);
      // 离开 200 毫秒后启动离开动画
      act(() => jest.advanceTimersByTime(200));
      expect(document.querySelector('.t-word-balloon')).toHaveClass(
        't-popover-leave-active',
      );
      // 300 毫秒后 invisible
      act(() => jest.advanceTimersByTime(300));
      expect(document.querySelector('.t-word-balloon')).toHaveClass(
        't-transition--invisible',
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

      expect(document.querySelector('.t-word-balloon')).toHaveClass(
        't-popover-enter-active',
      );
      act(() => jest.advanceTimersByTime(500));
      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-enter-active',
      );

      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
      fireEvent.mouseLeave(document.querySelector('.t-word-balloon')!);
      act(() => jest.advanceTimersByTime(500));
      expect(document.querySelector('.t-word-balloon')).toHaveClass(
        't-popover-leave-active',
      );
      act(() => jest.advanceTimersByTime(500));
      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
      expect(document.querySelector('.t-word-balloon')).toHaveClass(
        't-transition--invisible',
      );
    });
  });

  describe('onVisibleChange', () => {
    test('basic', () => {
      jest.useFakeTimers();
      const onVisibleChange = jest.fn();
      const { container } = render(
        <Popover onVisibleChange={onVisibleChange} content="1">
          <Button>hover</Button>
        </Popover>,
      );
      expect(onVisibleChange).not.toBeCalled();

      fireEvent.mouseEnter(container.firstChild!);
      expect(onVisibleChange).toBeCalled();
      expect(onVisibleChange.mock.calls[0][0]).toBeTruthy();

      act(() => jest.advanceTimersByTime(300));
      fireEvent.mouseLeave(container.firstChild!);
      act(() => jest.advanceTimersByTime(200));
      expect(onVisibleChange.mock.calls[1][0]).toBeFalsy();
    });

    test('external', () => {
      jest.useFakeTimers();
      const onVisibleChange = jest.fn();

      const App = () => {
        const [visible, setVisible] = useState(false);
        return (
          <Popover
            visible={visible}
            onVisibleChange={onVisibleChange}
            content="1">
            <Button onClick={() => setVisible((v) => !v)}>click</Button>
          </Popover>
        );
      };
      const { container } = render(<App />);
      expect(onVisibleChange).not.toBeCalled();

      fireEvent.click(container.firstChild!);
      expect(onVisibleChange).not.toBeCalled();
    });
  });

  it('触发元素拦截点击事件后禁止触发', () => {
    jest.useFakeTimers();
    const App = () => {
      return (
        <Popover trigger="click" content="1">
          <div>
            click
            <Button
              attrs={{
                onClickCapture: (e) => {
                  e.stopPropagation();
                },
              }}>
              close
            </Button>
          </div>
        </Popover>
      );
    };
    const { container } = render(<App />);

    const onClick = jest.fn();
    document.addEventListener('click', onClick);

    // react 的合成事件无法阻止原生事件冒泡，反过来却可以，
    // 因为 react 的事件是代理在 document 上的，实际已经冒泡或者捕获在 document 上了
    // 除非是在捕获阶段拦截
    fireEvent.click(container.querySelector('button')!);
    act(() => jest.advanceTimersByTime(500));
    expect(document.body).toMatchSnapshot();

    expect(onClick).not.toBeCalled();
  });

  it('被触发元素拦截事件后点击外部事件仍然有效', () => {
    jest.useFakeTimers();
    const App = () => {
      const visibleRef = useRef(false);
      return (
        <Popover
          trigger="click"
          onVisibleChange={(visible) => (visibleRef.current = visible)}
          content="1">
          <div
            onClick={(e) => {
              if (visibleRef.current) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}>
            <button>click</button>
          </div>
        </Popover>
      );
    };
    const { container } = render(<App />);

    expect(getBalloon()).toBeNull();

    fireEvent.click(container.querySelector('button')!);
    act(() => jest.advanceTimersByTime(0));
    act(() => jest.advanceTimersByTime(300));

    expect(getBalloon()).toMatchSnapshot();
    expect(getBalloon()).not.toHaveClass('t-popover-enter-active');

    fireEvent.click(container.querySelector('button')!);
    expect(getBalloon()).not.toHaveClass('t-popover-leave-active');

    act(() => jest.advanceTimersByTime(300));

    // 未修复前这一步会无效，外部事件会无法被 div 拦截，导致外部点击事件监听被移除而无法关闭弹窗
    fireEvent.click(document.body);
    expect(getBalloon()).toHaveClass('t-popover-leave-active');

    act(() => jest.advanceTimersByTime(0));
    act(() => jest.advanceTimersByTime(300));
    expect(getBalloon()).toMatchSnapshot();

    function getBalloon() {
      return document.querySelector('.t-word-balloon') as HTMLElement;
    }
  });
});
