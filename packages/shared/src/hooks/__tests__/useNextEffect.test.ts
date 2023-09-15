import { useForceUpdate, useNextEffect } from '@pkg/shared';
import { renderHook, act } from '@testing-library/react';

describe('useNextEffect', () => {
  test('basic', () => {
    let renderTimes = 0;
    const result = renderHook(() => {
      renderTimes++;
      const nextEffect = useNextEffect();
      const forceUpdate = useForceUpdate();

      return (cb: () => void) => {
        nextEffect(cb);
        forceUpdate();
      };
    });

    const nextEffect = result.result.current;

    expect(renderTimes).toBe(1);

    const cb1 = jest.fn();
    act(() => nextEffect(cb1));
    expect(cb1.mock.calls.length).toBe(1);
    expect(renderTimes).toBe(2);

    const cb2 = jest.fn();
    act(() => nextEffect(cb2));
    expect(cb1.mock.calls.length).toBe(1);
    expect(cb2.mock.calls.length).toBe(1);
    expect(renderTimes).toBe(3);
  });
  test('cancel', () => {
    let renderTimes = 0;
    const result = renderHook(() => {
      renderTimes++;
      const nextEffect = useNextEffect();
      const forceUpdate = useForceUpdate();

      return (cb: () => void) => {
        const cancel = nextEffect(cb);
        forceUpdate();
        return cancel;
      };
    });

    const nextEffect = result.result.current;

    expect(renderTimes).toBe(1);

    const cb = jest.fn();
    act(() => nextEffect(cb)());
    expect(cb).not.toBeCalled();
    expect(renderTimes).toBe(2);
  });
  test('withEffects', () => {
    let renderTimes = 0;
    const result = renderHook(() => {
      renderTimes++;
      const [nextEffect, effects] = useNextEffect(true);
      const forceUpdate = useForceUpdate();

      return [nextEffect, forceUpdate, effects] as const;
    });

    const [nextEffect, forceUpdate, effects] = result.result.current;

    expect(renderTimes).toBe(1);

    const cb = jest.fn();
    act(() => {
      nextEffect(cb);
      effects.length = 0;
      forceUpdate();
    });
    expect(cb).not.toBeCalled();
    expect(renderTimes).toBe(2);
  });
  test('clearPrev', () => {
    let renderTimes = 0;
    const result = renderHook(() => {
      renderTimes++;
      const [nextEffect] = useNextEffect(true);
      const forceUpdate = useForceUpdate();

      return [nextEffect, forceUpdate] as const;
    });

    const [nextEffect, forceUpdate] = result.result.current;

    expect(renderTimes).toBe(1);

    const cb = jest.fn();
    act(() => {
      nextEffect(cb);
      nextEffect(cb);
      forceUpdate();
    });
    expect(cb.mock.calls.length).toBe(2);
    expect(renderTimes).toBe(2);

    act(() => {
      nextEffect(cb);
      nextEffect(() => cb(123), true);
      forceUpdate();
    });
    expect(cb.mock.calls.length).toBe(3);
    expect(cb.mock.calls[2][0]).toBe(123);
    expect(renderTimes).toBe(3);
  });
});
