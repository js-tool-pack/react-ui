import { act, renderHook } from '@testing-library/react';
import { useEffect, useRef, useState } from 'react';
import { useVisible } from '@pkg/shared';

describe('useVisible', () => {
  test('common', async () => {
    // hook 渲染次数
    let renderTimes = 0;
    const { result } = renderHook(() => {
      const [state, setState] = useState(false);
      const [visible, close] = useVisible(state);
      renderTimes++;
      return [visible, close, setState] as const;
    });
    const [, close, setState] = result.current;

    expect(result.current[0]).toBe(false);

    await act(() => setState(true));
    expect(result.current[0]).toBe(true);

    await act(() => setState(false));
    expect(result.current[0]).toBe(false);

    await act(() => setState(true));
    expect(result.current[0]).toBe(true);

    await act(close);
    expect(result.current[0]).toBe(false);

    await act(close);
    await act(close);
    expect(renderTimes).toBe(5);
  });
  test('boolean', async () => {
    const hook = renderHook(() => {
      const [state, setState] = useState(false);
      const [num, setNum] = useState(0);
      const [visible, close] = useVisible(state, () => {
        const res = num >= 2;
        setNum((v) => v + 1);
        return res;
      });
      return [visible, close, setState] as const;
    });

    const { result } = hook;
    const [, close, setState] = result.current;

    expect(result.current[0]).toBe(false);
    await act(() => setState(true));
    expect(result.current[0]).toBe(true);

    // num = 0
    await act(close);
    expect(result.current[0]).toBe(true);

    // num = 1
    await act(close);
    expect(result.current[0]).toBe(true);

    // num = 2
    // await act(close); // 由于 num 使用的是 useState，hook 内部的回调拿不到 num 最新值
    await act(hook.result.current[1]); // 最后这次判断必须要全链调用，否则 hook 内部的回调拿不到 num 最新值
    expect(result.current[0]).toBe(false);
  });
  test('promise', async () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(false);
      const numRef = useRef(0);
      const [visible, close] = useVisible(state, () => {
        return numRef.current++ >= 2 ? Promise.resolve() : Promise.reject();
      });
      return [visible, close, setState] as const;
    });

    const [, close, setState] = result.current;

    expect(result.current[0]).toBe(false);
    await act(() => setState(true));
    expect(result.current[0]).toBe(true);

    // num = 0
    await act(close);
    expect(result.current[0]).toBe(true);

    // num = 1
    await act(close);
    expect(result.current[0]).toBe(true);

    // num = 2
    await act(close);
    expect(result.current[0]).toBe(false);
  });
  test('mixed', async () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState(false);
      const numRef = useRef(1);
      const [visible, close] = useVisible(
        state,
        (): boolean | void | Promise<void> => {
          const num = numRef.current++;
          switch (num) {
            case 1:
              return false;
            case 2:
              return Promise.reject();
            case 3:
              return;
            case 4:
              return true;
            case 5:
              return Promise.resolve();
          }
        },
      );

      useEffect(() => {
        setState(visible);
      }, [visible]);

      return [visible, close, setState] as const;
    });

    const [, close, setState] = result.current;

    expect(result.current[0]).toBe(false);
    await act(() => setState(true));
    expect(result.current[0]).toBe(true);
    await act(() => setState(false));
    expect(result.current[0]).toBe(false);
    await act(() => setState(true));
    expect(result.current[0]).toBe(true);

    // num = 1
    await act(close);
    expect(result.current[0]).toBe(true);

    // num = 2
    await act(close);
    expect(result.current[0]).toBe(true);

    // num = 3
    await act(close);
    expect(result.current[0]).toBe(false);

    await act(() => setState(true));
    expect(result.current[0]).toBe(true);

    // num = 4
    await act(close);
    expect(result.current[0]).toBe(false);

    await act(() => setState(true));
    expect(result.current[0]).toBe(true);

    // num = 5
    await act(close);
    expect(result.current[0]).toBe(false);
  });
});
