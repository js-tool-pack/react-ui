import { renderHook, render, fireEvent, act } from '@testing-library/react';
import { useScrollLock } from '@pkg/shared';
import { useState } from 'react';

describe('useScrollLock', () => {
  test('basic', async () => {
    jest.useFakeTimers();
    const App = () => {
      const [visible, setVisible] = useState(true);
      useScrollLock(visible, document.body);
      return (
        <div>
          <button onClick={() => setVisible(false)}>unlock</button>
        </div>
      );
    };
    render(<App />);

    expect(document.body).toHaveStyle({
      overflow: 'hidden',
    });
    expect(document.body.style.cssText).toBe(
      'max-width: calc(100% - 1024px); overflow: hidden;',
    );

    expect(window.innerWidth).toBe(1024);
    expect(document.documentElement.offsetWidth).toBe(0);

    fireEvent.click(document.querySelector('button')!);
    expect(document.body.style.cssText).toBe(
      'max-width: calc(100% - 1024px); overflow: hidden;',
    );
    act(() => jest.advanceTimersByTime(500));
    expect(document.body.style.cssText).toBe('');
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
