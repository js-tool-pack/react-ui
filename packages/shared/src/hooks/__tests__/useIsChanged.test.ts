import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { useIsChanged } from '@pkg/shared';

it('useIsChanged', () => {
  let renderTimer = 0;
  let result: (boolean | number)[] = [];
  const hook = renderHook(() => {
    const [value, setValue] = useState(0);
    const [isChanged, oldValue] = useIsChanged(value);
    renderTimer++;
    result = [isChanged, oldValue];
    return [isChanged, oldValue, setValue] as const;
  });
  const [, , setValue] = hook.result.current;
  expect(hook.result.current[0]).toBe(false);
  expect(hook.result.current[1]).toBe(0);
  expect(result).toEqual([false, 0]);
  expect(renderTimer).toBe(1);

  act(() => setValue(1));
  expect(hook.result.current[0]).toBe(true);
  expect(hook.result.current[1]).toBe(0);
  expect(result).toEqual([true, 0]);
  expect(renderTimer).toBe(2);

  act(() => setValue(1));
  expect(hook.result.current[0]).toBe(true);
  expect(hook.result.current[1]).toBe(0);
  // 这里不一样是因为setValue传的值跟旧值是一样的，不会触发renderHook的返回值更新，但是hook确实是执行了的
  expect(result).toEqual([false, 1]);
  expect(renderTimer).toBe(3);

  act(() => setValue(2));
  expect(hook.result.current[0]).toBe(true);
  expect(hook.result.current[1]).toBe(1);
  expect(result).toEqual([true, 1]);
  expect(renderTimer).toBe(4);

  act(() => setValue(3));
  expect(hook.result.current[0]).toBe(true);
  expect(hook.result.current[1]).toBe(2);
  expect(result).toEqual([true, 2]);
  expect(renderTimer).toBe(5);
});
