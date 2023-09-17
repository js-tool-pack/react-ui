import { LIFE_CIRCLE, STATUS } from '~/transition/transition.enums';
import { renderHook, act } from '@testing-library/react';
import { Mode, El } from '~/transition/transition.types';
import { useDispatcher } from '~/transition/hooks';
import { useState } from 'react';

describe('useDispatcher', () => {
  describe('mode', () => {
    function testSingleEl(mode: Mode) {
      const hook = renderHook(() => {
        const [child, setChild] = useState<El>();
        const res = useDispatcher(mode, undefined, false, child);
        return [res, setChild] as const;
      });

      const [, setChild] = hook.result.current;

      expect(hook.result.current[0]).toEqual([
        undefined,
        undefined,
        STATUS.idle,
        STATUS.idle,
        undefined,
      ]);

      act(() => setChild(true));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        true,
        STATUS.hide,
        STATUS.show,
      ]);

      act(() => setChild(false));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        true,
        false,
        STATUS.hide,
        STATUS.show,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.show,
          LIFE_CIRCLE.after,
        ),
      );

      return hook;
    }

    test('out-in', () => {
      const hook = testSingleEl('out-in');
      const [, setChild] = hook.result.current;
      act(() => setChild(<div></div>));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        false,
        <div></div>,
        STATUS.hide,
        STATUS.show,
      ]);

      act(() => setChild(<div>123</div>));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        // 先出
        STATUS.hide,
        STATUS.none,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.hide,
          LIFE_CIRCLE.after,
        ),
      );

      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        STATUS.none,
        // 后进
        STATUS.show,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.show,
          LIFE_CIRCLE.after,
        ),
      );
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        STATUS.none,
        // 固定下来
        STATUS.idle,
      ]);
    });

    test('in-out', () => {
      const hook = testSingleEl('in-out');
      const [, setChild] = hook.result.current;
      act(() => setChild(<div></div>));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        false,
        <div></div>,
        STATUS.hide,
        STATUS.show,
      ]);

      act(() => setChild(<div>123</div>));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        STATUS.idle,
        // 先进
        STATUS.show,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.show,
          LIFE_CIRCLE.after,
        ),
      );

      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        // 后出
        STATUS.hide,
        STATUS.idle,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.hide,
          LIFE_CIRCLE.after,
        ),
      );
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        STATUS.none,
        // 固定下来
        STATUS.idle,
      ]);
    });

    test('default', () => {
      const hook = testSingleEl('default');

      const [, setChild] = hook.result.current;
      act(() => setChild(<div></div>));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        false,
        <div></div>,
        STATUS.hide,
        STATUS.show,
      ]);

      act(() => setChild(<div>123</div>));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        // 同进
        STATUS.hide,
        STATUS.show,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.show,
          LIFE_CIRCLE.after,
        ),
      );

      expect(hook.result.current[0].slice(0, -1)).toEqual([
        <div></div>,
        <div>123</div>,
        // 同出
        STATUS.none,
        STATUS.idle,
      ]);
    });

    test('appear', () => {
      const Child = <div>123</div>;
      const hook = renderHook(() => {
        return useDispatcher('default', undefined, true, Child);
      });

      expect(hook.result.current[4]).not.toBeUndefined();
      expect(hook.result.current.slice(0, -1)).toEqual([
        undefined,
        Child,
        STATUS.hide,
        STATUS.show,
      ]);

      act(() =>
        hook.result.current[4]!(document.body, STATUS.show, LIFE_CIRCLE.after),
      );
      expect(hook.result.current.slice(0, -1)).toEqual([
        undefined,
        Child,
        STATUS.none,
        STATUS.idle,
      ]);
    });
  });

  describe('show', () => {
    it('should not work when onAfterLeave is not preceded by onLeaveStart', () => {
      const children = <div key={1}>123123</div>;
      const hook = renderHook(() => {
        const [show, setShow] = useState(true);
        const res = useDispatcher('default', show, false, children);
        return [res, setShow] as const;
      });

      const [, setShow] = hook.result.current;

      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.idle,
      ]);

      act(() => setShow(false));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.hide,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.hide,
          LIFE_CIRCLE.after,
        ),
      );
      expect(hook.result.current[0].slice(0, -1)).not.toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.invisible,
      ]);
    });

    it('should work when onAfterLeave is preceded by onLeaveStart', () => {
      const children = <div key={1}>123123</div>;
      const hook = renderHook(() => {
        const [show, setShow] = useState(true);
        const res = useDispatcher('default', show, false, children);
        return [res, setShow] as const;
      });

      const [, setShow] = hook.result.current;

      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.idle,
      ]);

      act(() => setShow(false));
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.hide,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.hide,
          LIFE_CIRCLE.start,
        ),
      );
      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.hide,
          LIFE_CIRCLE.after,
        ),
      );
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.invisible,
      ]);
    });

    it('appear', () => {
      const children = <div key={1}>123123</div>;
      const hook = renderHook(() => {
        const [show, setShow] = useState(true);
        const res = useDispatcher('default', show, true, children);
        return [res, setShow] as const;
      });

      const [, setShow] = hook.result.current;

      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.show,
      ]);

      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.show,
          LIFE_CIRCLE.start,
        ),
      );
      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.show,
          LIFE_CIRCLE.after,
        ),
      );

      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.idle,
      ]);

      act(() => setShow(false));
      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.hide,
          LIFE_CIRCLE.start,
        ),
      );
      act(() =>
        hook.result.current[0][4]!(
          document.body,
          STATUS.hide,
          LIFE_CIRCLE.after,
        ),
      );
      expect(hook.result.current[0].slice(0, -1)).toEqual([
        undefined,
        children,
        STATUS.none,
        STATUS.invisible,
      ]);
    });
  });
});
