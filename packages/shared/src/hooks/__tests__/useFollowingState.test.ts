import { renderHook, act } from '@testing-library/react';
import { useFollowingState } from '@pkg/shared';
import { useState } from 'react';

describe('useFollowingState', () => {
  test('basic', () => {
    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const [value, setValue] = useState<number>(1);
      return [...useFollowingState(value), setValue] as const;
    });

    const [, setState, setValue] = hook.result.current;

    expect(renderTimes).toBe(1);
    expect(hook.result.current[0]).toBe(1);

    act(() => setState(2));
    expect(hook.result.current[0]).toBe(2);

    act(() => setValue(3));
    expect(hook.result.current[0]).toBe(3);

    act(() => setState(0));
    expect(hook.result.current[0]).toBe(0);

    expect(renderTimes).toBe(5);
  });
  test('cb', () => {
    const hook = renderHook(() => {
      const [value, setValue] = useState<number>(1);
      return [...useFollowingState(value, String), setValue] as const;
    });

    const [, setState, setValue] = hook.result.current;

    expect(hook.result.current[0]).toBe('1');

    act(() => setState('2'));
    expect(hook.result.current[0]).toBe('2');

    act(() => setValue(3));
    expect(hook.result.current[0]).toBe('3');
  });
});
