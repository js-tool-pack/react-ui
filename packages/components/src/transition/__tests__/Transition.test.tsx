import { TRANSITION_LIFE_CIRCLE, TRANSITION_STATUS, Transition } from '..';
import { fireEvent, render, act } from '@testing-library/react';
import { useReducer, useEffect, useRef } from 'react';
import { testAttrs } from '~/testAttrs';
import { Button } from '~/button';

describe('Transition', () => {
  testAttrs(({ attrs }) => (
    <Transition attrs={attrs}>
      <div>foo bar</div>
    </Transition>
  ));

  test('snap', () => {
    expect(
      render(
        <Transition>
          <div>foo bar</div>
        </Transition>,
      ).container.firstChild,
    ).toMatchSnapshot();
    expect(
      render(
        <Transition show={false}>
          <div>foo bar</div>
        </Transition>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  test('appear', () => {
    expect(
      render(
        <Transition appear={true}>
          <div>foo bar</div>
        </Transition>,
      ).container.firstChild,
    ).toMatchSnapshot();

    expect(
      render(
        <Transition appear={false}>
          <div>foo bar</div>
        </Transition>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  test('on', () => {
    jest.useFakeTimers();
    const on = jest.fn();
    expect(
      render(
        <Transition appear={true} on={on}>
          <div>foo bar</div>
        </Transition>,
      ).container.firstChild,
    ).toMatchSnapshot();

    act(() => jest.advanceTimersByTime(500));

    expect(on).toBeCalled();
    expect(on.mock.calls.length).toBe(5);
    expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.before],
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.ready],
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.go],
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.expired],
      [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
    ]);

    on.mock.calls.length = 0;

    render(
      <Transition appear={false} on={on}>
        <div>foo bar</div>
      </Transition>,
    );

    act(() => jest.advanceTimersByTime(500));

    expect(on.mock.calls.length).toBe(1);
    expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
      [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
    ]);
  });

  describe('mode', () => {
    test('default', () => {
      const on = jest.fn();
      const App = () => {
        const [visible, setVisible] = useReducer(
          (prevState) => !prevState,
          true,
        );

        return (
          <div>
            <Button onClick={setVisible} type="primary" shape="round">
              切 换
            </Button>

            <Transition mode="default" name="fade" on={on}>
              {visible ? (
                <div className="mode" key={1}>
                  default(out)
                </div>
              ) : (
                <div key={2}>default(in)</div>
              )}
            </Transition>
          </div>
        );
      };

      const { container } = render(<App />);
      expect(container.firstChild).toMatchSnapshot();
      expect(on).toBeCalled();
      expect(on.mock.calls.length).toBe(1);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
      ]);

      fireEvent.click(container.querySelector('.t-button')!);

      expect(on.mock.calls.length).toBe(7);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
        // hide
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.go],
        // show
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.go],
      ]);
    });
    test('out-in', () => {
      const on = jest.fn();
      const App = () => {
        const [visible, setVisible] = useReducer(
          (prevState) => !prevState,
          true,
        );

        return (
          <div>
            <Button onClick={setVisible} type="primary" shape="round">
              切 换
            </Button>

            <Transition mode="out-in" name="fade" on={on}>
              {visible ? (
                <div className="mode" key={1}>
                  out
                </div>
              ) : (
                <div key={2}>in</div>
              )}
            </Transition>
          </div>
        );
      };

      const { container } = render(<App />);
      expect(container.firstChild).toMatchSnapshot();
      expect(on).toBeCalled();
      expect(on.mock.calls.length).toBe(1);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
      ]);

      fireEvent.click(container.querySelector('.t-button')!);

      expect(on.mock.calls.length).toBe(4);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
        // hide
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.go],
      ]);
    });
    test('in-out', () => {
      const on = jest.fn();
      const App = () => {
        const [visible, setVisible] = useReducer(
          (prevState) => !prevState,
          true,
        );

        return (
          <div>
            <Button onClick={setVisible} type="primary" shape="round">
              切 换
            </Button>

            <Transition mode="in-out" name="fade" on={on}>
              {visible ? (
                <div className="mode" key={1}>
                  out
                </div>
              ) : (
                <div key={2}>in</div>
              )}
            </Transition>
          </div>
        );
      };

      const { container } = render(<App />);
      expect(container.firstChild).toMatchSnapshot();
      expect(on).toBeCalled();
      expect(on.mock.calls.length).toBe(1);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
      ]);

      fireEvent.click(container.querySelector('.t-button')!);

      expect(on.mock.calls.length).toBe(5);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
        // out idle
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.before],
        // show
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.go],
      ]);
    });
  });

  test('ref', () => {
    let outerRef;
    const App = () => {
      const ref = useRef<HTMLDivElement>(null);
      useEffect(() => {
        outerRef = ref.current;
      });
      return (
        <Transition name="fade">
          <div className="mode" ref={ref} key={1}>
            out
          </div>
        </Transition>
      );
    };
    render(<App />);

    expect(outerRef).toHaveClass('mode');
    expect(outerRef).toMatchSnapshot();
  });
});
