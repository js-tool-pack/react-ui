import { renderHook, act } from '@testing-library/react';
import { useForceUpdate, useMounted } from '@pkg/shared';

describe('useMounted', () => {
  test('basic', () => {
    const onBeforeDestroy = jest.fn();
    const onMounted = jest.fn(() => onBeforeDestroy);

    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const forceUpdate = useForceUpdate();
      useMounted(onMounted);
      return forceUpdate;
    });
    const forceUpdate = hook.result.current;

    expect(renderTimes).toBe(1);
    expect(onMounted.mock.calls.length).toBe(1);
    expect(onBeforeDestroy).not.toBeCalled();

    act(forceUpdate);
    expect(renderTimes).toBe(2);
    expect(onMounted.mock.calls.length).toBe(1);
    expect(onBeforeDestroy).not.toBeCalled();

    hook.unmount();
    expect(renderTimes).toBe(2);
    expect(onMounted.mock.calls.length).toBe(1);
    expect(onBeforeDestroy).toBeCalled();
  });
});
