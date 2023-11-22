import { renderHook, act } from '@testing-library/react';
import { createHtmlElement } from '@tool-pack/dom';
import { useUniqueRoot } from '@pkg/shared';
import { useState } from 'react';

describe('useUniqueRoot', () => {
  test('basic', async () => {
    let times = 0;
    const hook = renderHook(() => {
      times++;
      const root = useUniqueRoot('test');
      const [, setState] = useState(0);
      return [root, setState] as const;
    });
    expect(times).toBe(1);
    expect(hook.result.current[0]).not.toBeNull();
    expect(hook.result.current[0]).toBeInTheDocument();
    const root = hook.result.current[0];

    act(() => hook.result.current[1](1));
    expect(times).toBe(2);
    expect(root).toBe(hook.result.current[0]);
  });

  test('exists', async () => {
    const root = createHtmlElement('div', { props: { id: 'test2' } });
    createHtmlElement('div', {
      parent: document.body,
      children: [root],
    });

    const hook = renderHook(() => useUniqueRoot('test2'));
    expect(root).toBe(hook.result.current);
  });

  test('unmount', async () => {
    const hook = renderHook(() => useUniqueRoot('test3'));
    const hook2 = renderHook(() => useUniqueRoot('test3'));
    expect(document.querySelector('#test3')).not.toBeNull();
    hook.unmount();
    expect(document.querySelector('#test3')).not.toBeNull();
    hook2.unmount();
    expect(document.querySelector('#test3')).toBeNull();
  });
});
