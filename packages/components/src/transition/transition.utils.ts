import { LIFE_CIRCLE } from './transition.enums';
import React from 'react';
export function getClasses(name: string, show: boolean) {
  const el = show ? 'enter' : 'leave';
  const nameEl = `${name}-${el}`;

  return {
    activeClassName: `${nameEl}-active`,
    fromClassName: `${nameEl}-from`,
    toClassName: `${nameEl}-to`,
  };
}
export function addTransition({
  el,
  on,
  classes,
}: {
  el: HTMLElement;
  on: (lifeCircle: LIFE_CIRCLE) => void;
  classes: ReturnType<typeof getClasses>;
}) {
  const _classes = { ...classes };

  const addClass = () => {
    el.classList.add(_classes.activeClassName, _classes.toClassName);
  };
  const removeClass = () => {
    const { fromClassName, toClassName, activeClassName } = _classes;
    el.classList.remove(fromClassName, toClassName);
    requestAnimationFrame(() => {
      el && el.classList.remove(activeClassName);
    });
  };

  const handlers = {
    start: (e: TransitionEvent) => {
      if (e.target !== e.currentTarget) return;
      el.removeEventListener('transitionstart', handlers.start);
      on(LIFE_CIRCLE.start);
    },
    cancel(e: TransitionEvent) {
      if (e.target !== e.currentTarget) return;
      el.removeEventListener('transitioncancel', handlers.cancel);
      on(LIFE_CIRCLE.cancel);
    },
    end(e: TransitionEvent) {
      if (e.target !== e.currentTarget) return;
      clearListener();
      on(LIFE_CIRCLE.after);
      removeClass();
    },
  };
  const addListener = () => {
    // console.log('addListener');
    el.addEventListener('transitionstart', handlers.start);
    el.addEventListener('transitionend', handlers.end);
    el.addEventListener('transitioncancel', handlers.cancel);
  };
  const clearListener = () => {
    // console.log('clearListener');
    el.removeEventListener('transitionstart', handlers.start);
    el.removeEventListener('transitionend', handlers.end);
    el.removeEventListener('transitioncancel', handlers.cancel);
  };
  const start = () => {
    if (!el) return;
    addListener();
    el.classList.add(_classes.fromClassName);
    // 使用offsetHeight强制刷新ui
    reflow(el);
    on(LIFE_CIRCLE.before);
    run();
  };
  const run = () => {
    on(LIFE_CIRCLE.run);
    el.classList.remove(_classes.fromClassName);
    addClass();
    on(LIFE_CIRCLE.running);
  };

  return { start, clearListener, removeClass };
}

export function isSameEl(prev: unknown, next: unknown): boolean {
  return (
    React.isValidElement(prev) &&
    React.isValidElement(next) &&
    prev.type === next.type &&
    prev.key !== null &&
    prev.key === next.key
  );
}

export function reflow(el?: HTMLElement) {
  // 使用offsetHeight强制刷新ui
  void el?.offsetHeight;
}
