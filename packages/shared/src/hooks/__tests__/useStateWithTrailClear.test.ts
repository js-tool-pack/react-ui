import { renderHook, act } from '@testing-library/react';
import { useStateWithTrailClear } from '@pkg/shared';
import { useState } from 'react';

describe('useStateWithTrailClear', () => {
  test('basic', () => {
    let times = 0;
    const hook = renderHook(() => {
      times++;
      const [st, setSt] = useState(false);
      const [state, setState] = useStateWithTrailClear(st);
      return [st, setSt, state, setState] as const;
    });

    const [, setSt, , setState] = hook.result.current;

    expect(times).toBe(3);
    expect(hook.result.current[0]).toBe(false);
    expect(hook.result.current[2]).toBe(undefined);

    act(() => setSt(true));
    expect(times).toBe(6);
    expect(hook.result.current[0]).toBe(true);
    expect(hook.result.current[2]).toBe(undefined);

    // 同样的state不会触发更新
    act(() => setSt(true));
    // times 不是 hook，加了就是加了
    expect(times).toBe(7);
    expect(hook.result.current[0]).toBe(true);
    expect(hook.result.current[2]).toBe(undefined);

    act(() => setState(false));
    expect(times).toBe(9);
    expect(hook.result.current[0]).toBe(true);
    expect(hook.result.current[2]).toBe(undefined);
  });
  test('相同值', () => {
    let times = 0;
    const hook = renderHook(() => {
      times++;
      const [st, setSt] = useState(false);
      const [state, setState] = useStateWithTrailClear(st);
      return [st, setSt, state, setState] as const;
    });

    const [, , , setState] = hook.result.current;

    expect(times).toBe(3);

    // setState 除了 undefined 都能触发 effect
    act(() => setState(true));
    expect(times).toBe(5);
    expect(hook.result.current[0]).toBe(false);
    expect(hook.result.current[2]).toBe(undefined);

    act(() => setState(undefined));
    expect(times).toBe(6);
    expect(hook.result.current[0]).toBe(false);
    expect(hook.result.current[2]).toBe(undefined);
  });
});
