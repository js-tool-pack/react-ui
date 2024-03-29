import { useBeforeDestroy, useForceUpdate } from '@pkg/shared';
import { renderHook, act } from '@testing-library/react';

describe('useBeforeDestroy', () => {
  test('basic', () => {
    const onBeforeDestroy = jest.fn();

    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const forceUpdate = useForceUpdate();
      useBeforeDestroy(onBeforeDestroy);
      return forceUpdate;
    });
    const forceUpdate = hook.result.current;

    expect(renderTimes).toBe(1);
    expect(onBeforeDestroy).not.toBeCalled();

    act(forceUpdate);
    expect(renderTimes).toBe(2);
    expect(onBeforeDestroy).not.toBeCalled();

    hook.unmount();
    expect(renderTimes).toBe(2);
    expect(onBeforeDestroy).toBeCalled();
  });
});
