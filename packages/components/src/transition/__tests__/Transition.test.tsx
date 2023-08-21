import { testAttrs } from '~/testAttrs';
import { Transition, TRANSITION_STATUS, TRANSITION_LIFE_CIRCLE } from '..';
import { fireEvent, render } from '@testing-library/react';
import { useEffect, useReducer, useRef } from 'react';
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
    const on = jest.fn();
    expect(
      render(
        <Transition appear={true} on={on}>
          <div>foo bar</div>
        </Transition>,
      ).container.firstChild,
    ).toMatchSnapshot();
    expect(on).toBeCalled();
    expect(on.mock.calls.length).toBe(4);
    expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.ready],
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.before],
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.run],
      [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.running],
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
            <Button type="primary" shape="round" onClick={setVisible}>
              切 换
            </Button>

            <Transition name="fade" on={on} mode="default">
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
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.ready],
      ]);

      fireEvent.click(container.querySelector('.t-button')!);

      expect(on.mock.calls.length).toBe(9);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.ready],
        // hide
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.run],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.running],
        // show
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.run],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.running],
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
            <Button type="primary" shape="round" onClick={setVisible}>
              切 换
            </Button>

            <Transition name="fade" on={on} mode="out-in">
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
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.ready],
      ]);

      fireEvent.click(container.querySelector('.t-button')!);

      expect(on.mock.calls.length).toBe(5);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.ready],
        // hide
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.run],
        [TRANSITION_STATUS.hide, TRANSITION_LIFE_CIRCLE.running],
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
            <Button type="primary" shape="round" onClick={setVisible}>
              切 换
            </Button>

            <Transition name="fade" on={on} mode="in-out">
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
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.ready],
      ]);

      fireEvent.click(container.querySelector('.t-button')!);

      expect(on.mock.calls.length).toBe(6);
      expect(on.mock.calls.map((it) => it.slice(1))).toEqual([
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.ready],
        // out idle
        [TRANSITION_STATUS.idle, TRANSITION_LIFE_CIRCLE.ready],
        // show
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.ready],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.before],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.run],
        [TRANSITION_STATUS.show, TRANSITION_LIFE_CIRCLE.running],
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
          <div ref={ref} className="mode" key={1}>
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
