import {
  AsyncSubject,
  fromEvent,
  switchMap,
  takeUntil,
  takeWhile,
  filter,
  delay,
  merge,
  take,
  tap,
} from 'rxjs';
import { fromOuterEvent } from '@pkg/shared';
import { MutableRefObject } from 'react';

export function handleClick(
  triggerEl: HTMLElement,
  close: () => void,
  show: boolean,
  balloonElRef: MutableRefObject<HTMLElement | undefined>,
  toggle: () => AsyncSubject<boolean>,
): () => void {
  // 点击触发元素
  const triggerClick$ = fromEvent(triggerEl, 'click').pipe(
    // 因为 react 的合成事件是使用的事件委托机制，比直接监听 dom 的事件回调执行的要慢一步，所以加上延迟
    delay(0),
    // 排除被拦截的事件
    filter((e) => !e.defaultPrevented),
  );
  // 按下 Esc 键
  const keydownEscape$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
    filter((e) => e.code === 'Escape'),
  );
  // 点击除触发器与窗体之外的dom
  const outerClick$ = fromOuterEvent(
    () => [triggerEl, balloonElRef.current],
    'click',
  );
  // 关闭序列
  const closeWaiter$ = merge(outerClick$, keydownEscape$).pipe(
    tap(close),
    takeUntil(triggerClick$),
    take(1),
  );
  // 开启序列
  const openWaiter$ = triggerClick$.pipe(
    switchMap(() =>
      // 监听 show 的变化，当 show 为 true 时结束监听并把控制权交给下一位
      toggle().pipe(takeWhile((v) => v)),
    ),
    switchMap(() => closeWaiter$),
  );
  // 当弹窗已经打开时(例如Button loading时会刷新该effect)，添加点击和外部点击订阅
  // 不然只有点击触发器才能外部点击订阅，否则如果很多popover的话会有一堆外部点击订阅
  const clickSub = (
    show ? merge(closeWaiter$, openWaiter$) : openWaiter$
  ).subscribe();

  return () => clickSub.unsubscribe();
}
