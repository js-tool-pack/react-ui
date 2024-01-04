import { useImperativeHandle, useEffect, useRef } from 'react';
import { renderHook } from '@testing-library/react';
import { useForwardRef } from '@pkg/shared';

describe('useForwardRef', () => {
  test('basic', () => {
    const current = jest.fn();
    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      // eslint-disable-next-line @typescript-eslint/ban-types
      const ref = useRef<Function>(null);
      const ref2 = useForwardRef(ref);
      useImperativeHandle(ref2, () => current);
      return ref;
    });
    const ref = hook.result.current;

    expect(renderTimes).toBe(1);

    expect(current).not.toBeCalled();
    expect(current).toBe(ref.current);

    ref.current?.(123);
    expect(current).toBeCalled();
    expect(renderTimes).toBe(1);
    expect(current.mock.calls[0][0]).toBe(123);
  });
  test('function ref', () => {
    const fnRef = jest.fn();
    const current = jest.fn();
    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const ref = useForwardRef(fnRef);

      useEffect(() => {
        (ref as any).current = current;
      }, []);
      return ref;
    });
    const ref = hook.result.current;

    expect(renderTimes).toBe(1);

    expect(current).not.toBeCalled();
    expect(fnRef.mock.calls[0][0]).toBe(current);
    expect(current).toBe(ref.current);

    ref.current?.(123);
    expect(current).toBeCalled();
    expect(renderTimes).toBe(1);
    expect(current.mock.calls[0][0]).toBe(123);
  });
});
