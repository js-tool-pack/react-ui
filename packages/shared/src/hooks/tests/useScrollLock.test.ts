import { renderHook } from '@testing-library/react';
import { useScrollLock } from '@pkg/shared';

describe('useScrollLock', () => {
  test('basic', async () => {
    renderHook(() => {
      useScrollLock(true, document.body);
    });
    expect(document.body).toHaveStyle({
      overflow: 'hidden',
      maxWidth: 'calc(100% - 0px)',
    });
    expect(document.body.style.cssText).toBe(
      'max-width: calc(100% - 0px); overflow: hidden;',
    );
  });
  test('preventShaking off', async () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    renderHook(() => {
      useScrollLock(true, div);
    });
    expect(div.style.cssText).toBe('overflow: hidden;');
  });
});
