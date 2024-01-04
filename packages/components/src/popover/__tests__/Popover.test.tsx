import { fireEvent, render, act } from '@testing-library/react';
import { VisibleController, useNextEffect } from '@pkg/shared';
import { useState, useRef } from 'react';
import { Button } from '~/button';
import { Popover } from '..';

describe('Popover', () => {
  function getBalloon() {
    return document.querySelector('.t-word-balloon') as HTMLElement;
  }

  jest.useFakeTimers();
  test('attrs', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Popover
        attrs={{ style: { background: '#fff' }, className: 'foo', onClick }}
        appendTo={null}
        visible
      >
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
        <Popover content={<div>foo bar</div>} appendTo={null} visible>
          <Button>foo bar</Button>
        </Popover>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    test('undefined(default)', () => {
      const { container } = render(
        <Popover content={<div>foo bar</div>} appendTo={undefined} visible>
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
            appendTo={() => document.querySelector('.wrapper')!}
            content={<div>foo bar</div>}
            visible
          >
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
          <input placeholder="focus 触发" type="text" />
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
        <Popover trigger="click" content="click" disabled>
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

    test('contextmenu', () => {
      const { container } = render(
        <Popover trigger="contextmenu" content="contextmenu">
          {/* 不能用 Button，因为 contextmenu 事件不能透传给 Button 组件 */}
          {/*<Button className="trigger">鼠标右击触发</Button>*/}
          <div className="trigger">鼠标右击触发</div>
        </Popover>,
      );

      expect(document.body).toMatchSnapshot();
      fireEvent.contextMenu(container.querySelector('.trigger')!);
      act(() => jest.advanceTimersByTime(0));
      expect(document.body).toMatchSnapshot();

      act(() => jest.advanceTimersByTime(500));

      fireEvent.contextMenu(container.querySelector('.trigger')!);
      act(() => jest.advanceTimersByTime(100));
      expect(document.querySelector('.t-word-balloon')).not.toHaveClass(
        't-popover-leave-active',
      );
    });

    test('arr focus', () => {
      const { container } = render(
        <Popover trigger={['focus', 'click']} content="focus">
          <input placeholder="focus 触发" type="text" />
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
      <Popover placement="right-end" content="bar" visible>
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
        <Popover trigger="hover" content="hover" delay={500}>
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
            onVisibleChange={onVisibleChange}
            visible={visible}
            content="1"
          >
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
              }}
            >
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
          onVisibleChange={(visible) => (visibleRef.current = visible)}
          trigger="click"
          content="1"
        >
          <div
            onClick={(e) => {
              if (visibleRef.current) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
          >
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
  });

  describe('hovers', () => {
    const getBtn = () => document.querySelector('button')!;
    const Actions = {
      enterBalloon: () => fireEvent.mouseEnter(getBalloon()),
      leaveBalloon: () => fireEvent.mouseLeave(getBalloon()),
      enterTrigger: () => fireEvent.mouseEnter(getBtn()),
      leaveTrigger: () => fireEvent.mouseLeave(getBtn()),
    };

    it('destroyOnHide 快速 hover', () => {
      jest.useFakeTimers();
      const App = () => {
        const visibleRef = useRef(false);
        return (
          <Popover
            onVisibleChange={(visible) => (visibleRef.current = visible)}
            destroyOnHide
            content="1"
          >
            <button>hover</button>
          </Popover>
        );
      };
      render(<App />);

      expect(getBalloon()).toBeNull();
      Actions.enterTrigger();
      expect(getBalloon()).not.toBeNull();

      Actions.leaveTrigger();
      expect(getBalloon()).not.toBeNull();
      Actions.enterBalloon();
      expect(getBalloon()).not.toBeNull();
      Actions.leaveBalloon();
      Actions.enterTrigger();
      Actions.leaveTrigger();
      Actions.enterBalloon();
      Actions.leaveBalloon();

      act(() => jest.advanceTimersByTime(500));
      expect(getBalloon()).toBeNull();
    });
    it('balloon 快速 hover', () => {
      jest.useFakeTimers();
      render(
        <Popover content="1">
          <button>hover</button>
        </Popover>,
      );

      expect(getBalloon()).toBeNull();
      Actions.enterTrigger();
      expect(getBalloon()).not.toBeNull();

      act(() => jest.advanceTimersByTime(500));

      Actions.leaveTrigger();
      expect(getBalloon()).not.toHaveClass('t-popover-leave-active');
      Actions.enterBalloon();
      Actions.leaveBalloon();
      expect(getBalloon()).not.toHaveClass('t-popover-leave-active');
      Actions.enterBalloon();
      Actions.leaveBalloon();

      // 第一次是退出延时
      act(() => jest.advanceTimersByTime(200));
      expect(getBalloon()).not.toHaveClass('t-transition--invisible');
      // 第二次是动画延时
      // 需要两次才会有 t-transition--invisible
      act(() => jest.advanceTimersByTime(500));
      expect(getBalloon()).toHaveClass('t-transition--invisible');
    });
    it('当 content 变化时，鼠标离开不会失效', () => {
      jest.useFakeTimers();
      const App = () => {
        const [content, setContent] = useState(1);
        const ref = useRef<HTMLButtonElement>(null);

        const nextEffect = useNextEffect();
        return (
          <>
            <Popover>
              <button ref={ref}>{content}</button>
            </Popover>
            <div
              onClick={() => {
                const btn = ref.current;
                if (!btn) return;

                nextEffect(() => {
                  setContent((v) => v++);
                  setContent((v) => v++);
                  setContent((v) => v++);
                });

                const event = new Event('mouseleave');
                btn.dispatchEvent(event);
              }}
              id="click"
            >
              点击
            </div>
          </>
        );
      };
      render(<App />);

      expect(getBalloon()).toBeNull();

      Actions.enterTrigger();
      expect(getBalloon()).not.toBeNull();
      act(() => jest.advanceTimersByTime(500));

      fireEvent.click(document.querySelector('#click')!);
      fireEvent.click(document.querySelector('#click')!);

      act(() => jest.advanceTimersByTime(500));
      expect(getBalloon()).not.toHaveClass('t-transition--invisible');
      act(() => jest.advanceTimersByTime(500));
      // expect(getBalloon()).toHaveClass('t-transition--invisible');
    });
  });
  test('通过 visibleControllerRef 控制显隐', () => {
    jest.useFakeTimers();
    const App = () => {
      const controllerRef = useRef<VisibleController>(null);
      return (
        <>
          <Popover visibleControllerRef={controllerRef}>
            <div>test</div>
          </Popover>
          <button onClick={() => controllerRef.current?.show()} id="show">
            open
          </button>
          <button onClick={() => controllerRef.current?.hide()} id="hide">
            close
          </button>
        </>
      );
    };
    render(<App />);

    expect(getBalloon()).toBeNull();
    fireEvent.click(document.querySelector('#show')!);

    expect(getBalloon()).not.toBeNull();

    const cls = {
      enterActive: 't-popover-enter-active',
      leaveActive: 't-popover-leave-active',
      invisible: 't-transition--invisible',
    };
    expect(getBalloon()).not.toHaveClass(cls.invisible);

    expect(getBalloon()).toHaveClass(cls.enterActive);
    act(() => jest.advanceTimersByTime(500));

    expect(getBalloon()).not.toHaveClass(cls.enterActive);
    expect(getBalloon()).not.toHaveClass(cls.leaveActive);

    fireEvent.click(document.querySelector('#hide')!);
    expect(getBalloon()).toHaveClass(cls.leaveActive);

    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).toHaveClass(cls.invisible);
  });
});
