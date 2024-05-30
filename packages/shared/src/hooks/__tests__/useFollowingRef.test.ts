import { renderHook, act } from '@testing-library/react';
import { useFollowingRef } from '@pkg/shared';
import { useState } from 'react';

describe('useFollowingRef', () => {
  test('base', () => {
    let times = 0;
    const hook = renderHook(() => {
      const [state, setState] = useState(1);
      const followingStateRef = useFollowingRef(state, (v) => v * 2);
      times++;
      return [followingStateRef, setState] as const;
    });
    const [value, setValue] = hook.result.current;

    expect(value.current).toBe(2);
    expect(times).toBe(1);

    act(() => setValue(3));
    expect(value.current).toBe(6);
    expect(times).toBe(2);
  });
});
