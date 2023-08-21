import { renderHook } from '@testing-library/react';
import { useEffect, useRef } from 'react';
import { useAppendTo } from '@pkg/shared';

describe('useAppendTo', () => {
  test('basic', async () => {
    // hook 渲染次数
    let renderTimes = 0;
    const { result } = renderHook(() => {
      const [target] = useAppendTo();
      renderTimes++;
      return [target] as const;
    });

    expect(result.current[0]).toBe(null);
    expect(renderTimes).toBe(1);
  });
  test('default', async () => {
    // hook 渲染次数
    let renderTimes = 0;
    const defaultAppendTo = () => document.body;
    const { result } = renderHook(() => {
      const [target] = useAppendTo(defaultAppendTo, defaultAppendTo);
      renderTimes++;
      return [target] as const;
    });

    expect(result.current[0]).toBe(defaultAppendTo());
    expect(renderTimes).toBe(1);
  });
  test('fn null', async () => {
    // hook 渲染次数
    let renderTimes = 0;
    const defaultAppendTo = () => document.body;
    const { result } = renderHook(() => {
      const [target] = useAppendTo(() => null, defaultAppendTo);
      renderTimes++;
      return [target] as const;
    });

    expect(result.current[0]).toBe(null);
    expect(renderTimes).toBe(2);
  });
  test('fn HTMLElement', async () => {
    const div = document.createElement('div');
    div.className = 'div';
    document.body.appendChild(div);
    // hook 渲染次数
    let renderTimes = 0;
    const defaultAppendTo = () => document.body;
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement | null>(null);
      // 模拟 useRef 获取 dom
      useEffect(() => {
        ref.current = div;
      }, []);

      const [target] = useAppendTo(() => ref.current, defaultAppendTo);
      renderTimes++;
      return [target] as const;
    });

    expect(result.current[0]).toBe(div);
    expect(renderTimes).toBe(2);
  });
});
