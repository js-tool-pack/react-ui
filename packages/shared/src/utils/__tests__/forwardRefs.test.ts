import { renderHook } from '@testing-library/react';
import { forwardRefs } from '../';
import { useRef } from 'react';

describe('forwardRefs', () => {
  test('forwardRefs should work', () => {
    const ref2 = jest.fn();
    const hook = renderHook(() => {
      const ref1 = useRef();
      forwardRefs(100, ref1, ref2);
      return ref1.current;
    });
    expect(hook.result.current).toBe(100);
    expect(ref2.mock.calls[0][0]).toBe(100);
  });
});
