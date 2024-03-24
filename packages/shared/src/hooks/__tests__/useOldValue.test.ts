import { renderHook, act } from '@testing-library/react';
import { useDeferredValue, useState } from 'react';
import { useOldValue } from '@pkg/shared';

describe('useOldValue', () => {
  it('useDeferredValue', () => {
    let value;
    let times = 0;
    const { result } = renderHook(() => {
      const [v, sv] = useState(1);
      const oldV = useDeferredValue(v);
      value = v;
      times++;
      return [oldV, sv] as const;
    });

    const [, setValue] = result.current;
    expect(result.current[0]).toBe(1);
    expect(times).toBe(1);

    act(() => setValue(2));
    expect(result.current[0]).toBe(2);
    expect(value).toBe(2);
    expect(times).toBe(3);

    act(() => {
      setValue(2);
      setValue(3);
      setValue(4);
      setValue(5);
    });
    expect(result.current[0]).toBe(5);
    expect(value).toBe(5);
    expect(times).toBe(5);
  });
  it('useOldValue', () => {
    let value;
    let times = 0;
    const { result } = renderHook(() => {
      const [v, sv] = useState(1);
      const oldV = useOldValue(v);
      value = v;
      times++;
      return [oldV, sv] as const;
    });

    const [, setValue] = result.current;
    // 跟 useDeferredValue 不一样，useDeferredValue 初始值跟原值一样
    expect(result.current[0]).toBe(undefined);

    act(() => setValue(2));
    // 跟 useDeferredValue 不一样，因为它自己触发了一次更新，所以跟原值一样
    expect(result.current[0]).toBe(1);
    expect(value).toBe(2);
    expect(times).toBe(2);

    act(() => {
      setValue(2);
      setValue(3);
      setValue(4);
      setValue(5);
    });
    expect(result.current[0]).toBe(2);
    expect(value).toBe(5);
    expect(times).toBe(3);
  });
});
