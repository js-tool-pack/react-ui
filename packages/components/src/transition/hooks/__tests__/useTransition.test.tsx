import { renderHook, render, act } from '@testing-library/react';
import { STATUS } from '~/transition/transition.enums';
import { useTransition } from '~/transition/hooks';
import React, { useState } from 'react';
import { omit } from '@tool-pack/basic';

describe('useTransition', () => {
  it('should work', () => {
    const innerCb = jest.fn();
    const cb = jest.fn();
    const Child = <div>123</div>;
    const hook = renderHook(() => {
      const [status, setStatus] = useState<STATUS>(STATUS.idle);
      const res = useTransition(status, 'trans', Child, innerCb, cb);
      return [res, setStatus] as const;
    });

    const [, setStatus] = hook.result.current;

    expect(omit(hook.result.current[0]!, ['_owner' as any])).toEqual(
      omit(
        React.cloneElement(Child, {
          ref: { current: null },
          className: '',
          style: {},
        }),
        ['_owner' as any],
      ),
    );

    // renderHook 内拿不到 dom 的 ref，否则会被调用
    expect(innerCb).not.toBeCalled();
    expect(cb).not.toBeCalled();

    act(() => setStatus(STATUS.show));
    expect(omit(hook.result.current[0]!, ['_owner' as any])).toEqual(
      omit(
        React.cloneElement(Child, {
          className: 'trans-enter-from',
          ref: { current: null },
          style: {},
        }),
        ['_owner' as any],
      ),
    );

    act(() => setStatus(STATUS.hide));
    expect(omit(hook.result.current[0]!, ['_owner' as any])).toEqual(
      omit(
        React.cloneElement(Child, {
          className: 'trans-leave-from',
          ref: { current: null },
          style: {},
        }),
        ['_owner' as any],
      ),
    );
  });
  it('should work 2', () => {
    const innerCb = jest.fn();
    const cb = jest.fn();
    const Child = <div>123</div>;
    const App = () => {
      return useTransition(STATUS.idle, 'trans', Child, innerCb, cb);
    };
    render(<App />);

    // 在 render 时可以获取到 dom 的 ref，但是又不好控制 hook
    expect(innerCb).toBeCalled();
    expect(cb).toBeCalled();
  });
});
