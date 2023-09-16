import { renderHook, act } from '@testing-library/react';
import { useValueWithPrev } from '@pkg/shared';
import { useState } from 'react';

describe('useValueWithPrev', () => {
  it('should work', () => {
    let values: any[] = [];
    const hook = renderHook(() => {
      const [child, setChild] = useState<unknown>();
      const children = useValueWithPrev(child);
      values = children;
      return [children, setChild] as const;
    });

    const [, setChild] = hook.result.current;

    expect(hook.result.current[0]).toEqual([undefined, undefined]);
    expect(hook.result.current[0]).toEqual(values);

    act(() => setChild(true));
    expect(hook.result.current[0]).toEqual([true, undefined]);
    expect(hook.result.current[0]).toEqual(values);

    // 同样的元素不会替换
    act(() => setChild(true));
    expect(hook.result.current[0]).toEqual([true, undefined]);
    expect(hook.result.current[0]).toEqual(values);

    act(() => setChild(false));
    expect(hook.result.current[0]).toEqual([false, true]);
    expect(hook.result.current[0]).toEqual(values);

    act(() => setChild(false));
    expect(hook.result.current[0]).toEqual([false, true]);
    expect(hook.result.current[0]).toEqual(values);

    act(() => setChild(false));
    expect(hook.result.current[0]).toEqual([false, true]);
    expect(hook.result.current[0]).toEqual(values);
  });
});
