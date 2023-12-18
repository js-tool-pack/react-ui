import { renderHook, act } from '@testing-library/react';
import { useStateRef } from '@pkg/shared';
import { useRef } from 'react';

describe('useStateRef', () => {
  test('basic', () => {
    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const ref = useRef<number>(1);
      return [...useStateRef(ref.current), ref] as const;
    });
    const [value, setValue, forceUpdate, ref] = hook.result.current;

    expect(renderTimes).toBe(1);
    expect(value.current).toBe(1);

    act(() => setValue(2));
    expect(value.current).toBe(2);
    expect(ref.current).toBe(1);

    act(() => {
      ref.current = 3;
      forceUpdate();
    });
    expect(ref.current).toBe(3);
    expect(value.current).toBe(3);
  });
});
