import { act, fireEvent, renderHook } from '@testing-library/react';
import { useForceUpdate, useEventListenerOnMounted } from '@pkg/shared';
import { createHtmlElement } from '@tool-pack/dom';
import { useState } from 'react';

describe('useEventListenerOnMounted', () => {
  test('basic', () => {
    const onClick = jest.fn();

    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const forceUpdate = useForceUpdate();
      useEventListenerOnMounted(window, 'click', onClick, { capture: true });
      return forceUpdate;
    });
    const forceUpdate = hook.result.current;

    expect(renderTimes).toBe(1);
    expect(onClick).not.toBeCalled();

    fireEvent.click(document.body);
    expect(renderTimes).toBe(1);
    expect(onClick).toBeCalled();

    act(forceUpdate);
    expect(renderTimes).toBe(2);
    expect(onClick.mock.calls.length).toBe(1);

    hook.unmount();
    expect(renderTimes).toBe(2);
    expect(onClick.mock.calls.length).toBe(1);

    fireEvent.click(document.body);
    expect(renderTimes).toBe(2);
    expect(onClick.mock.calls.length).toBe(1);
  });
  test('getTarget', () => {
    const onClick = jest.fn();
    const div = createHtmlElement('div', { parent: document.body });

    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const forceUpdate = useForceUpdate();
      useEventListenerOnMounted(() => div, 'click', onClick, { capture: true });
      return forceUpdate;
    });
    const forceUpdate = hook.result.current;

    expect(renderTimes).toBe(1);
    expect(onClick).not.toBeCalled();

    fireEvent.click(document.body);
    expect(renderTimes).toBe(1);
    expect(onClick).not.toBeCalled();

    fireEvent.click(div);
    expect(renderTimes).toBe(1);
    expect(onClick).toBeCalled();

    act(forceUpdate);
    expect(renderTimes).toBe(2);
    expect(onClick.mock.calls.length).toBe(1);

    hook.unmount();
    expect(renderTimes).toBe(2);
    expect(onClick.mock.calls.length).toBe(1);

    fireEvent.click(div);
    expect(renderTimes).toBe(2);
    expect(onClick.mock.calls.length).toBe(1);
  });
  test('enabled', () => {
    const onClick = jest.fn();

    let renderTimes = 0;
    const hook = renderHook(() => {
      renderTimes++;
      const [enabled, setEnabled] = useState(false);
      useEventListenerOnMounted(
        window,
        'click',
        onClick,
        { capture: true },
        enabled,
      );
      return setEnabled;
    });
    const setEnabled = hook.result.current;

    expect(renderTimes).toBe(1);
    expect(onClick).not.toBeCalled();

    fireEvent.click(document.body);
    expect(renderTimes).toBe(1);
    expect(onClick).not.toBeCalled();

    act(() => setEnabled(true));
    fireEvent.click(document.body);
    expect(renderTimes).toBe(2);
    expect(onClick).toBeCalled();
    expect(onClick.mock.calls.length).toBe(1);

    hook.unmount();
    expect(renderTimes).toBe(2);

    fireEvent.click(document.body);
    expect(renderTimes).toBe(2);
    expect(onClick.mock.calls.length).toBe(1);
  });
});
