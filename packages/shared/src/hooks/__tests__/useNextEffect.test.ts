import { act, renderHook } from '@testing-library/react';
import { useForceUpdate, useNextEffect } from '@pkg/shared';

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
});
