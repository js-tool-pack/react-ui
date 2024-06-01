import {
  isValidElement,
  cloneElement,
  useEffect,
  useState,
  Children,
} from 'react';
import { type TransitionProps, transitionCBAdapter } from '@pkg/components';
import type { RefAttributes, ReactElement, ReactNode, Key } from 'react';
import type { ChildMapValue, ChildMap } from '../transition-group.types';
import { useIsInitDep, forwardRefs } from '@pkg/shared';

export function useChildMap(children: ReactNode, name: string): ChildMap {
  const isInit = useIsInitDep(children);

  const [childMap, setChildMap] = useState((): ChildMap => {
    return createMap(children, (child) => {
      const onAfterLeave = () => onLeaved(child.key || '');
      return cloneTransition(child, {
        on: transitionCBAdapter({ onAfterLeave }),
        name: name,
        show: true,
      });
    });
  });

  const onLeaved = (key: Key) => {
    // leave 可能会丢失
    setChildMap((prevChildren) => {
      const map = new Map(prevChildren);
      map.delete(key);
      return map;
    });
  };

  useEffect(() => {
    if (isInit) return;
    setChildMap(nextChildMap(children, childMap, name, onLeaved));
  }, [children]);

  return childMap;
}

const nextChildMap = (
  children: ReactNode,
  prevChildMap: ChildMap,
  name: string,
  onLeaved: (key: Key) => void,
): ChildMap => {
  const childMap = createMap(children);
  return mergeMaps(prevChildMap, childMap, name, onLeaved);
};

function createMap(
  children: ReactNode,
  callback: (child: ReactElement) => ChildMapValue = (v) => ({
    reactEl: v,
    ref: null,
  }),
): ChildMap {
  const map: ChildMap = new Map();
  if (!children) return map;

  // 如果没有手动添加key, Children.map会自动添加key
  Children.map(children, (c) => c)?.forEach((child) => {
    if (!isValidElement(child)) return;
    const key = child.key || '';
    if (!key) return;
    map.set(key, callback(child));
  });

  return map;
}

function mergeMaps(
  prevMap: ChildMap,
  nextMap: ChildMap,
  name: string,
  onLeaved: (key: Key) => void,
): ChildMap {
  let insertKeys: Key[] = [];
  const insertKeysMap = new Map<Key, typeof insertKeys>();
  const result: ChildMap = new Map();

  prevMap.forEach((_, key): void => {
    if (nextMap.has(key)) {
      if (!insertKeys.length) return;
      insertKeysMap.set(key, insertKeys);
      insertKeys = [];
      return;
    }
    insertKeys.push(key);
  });
  nextMap.forEach((_, key): void => {
    const keys = insertKeysMap.get(key);
    if (keys) keys.forEach(push);
    push(key);
  });
  insertKeys.forEach(push);

  return result;

  function push(k: Key): void {
    const value = mergeMapValue(
      prevMap.get(k),
      nextMap.get(k),
      k,
      name,
      onLeaved,
    );
    value && result.set(k, value);
  }
}

function mergeMapValue(
  prevValue: ChildMapValue | undefined,
  nextValue: ChildMapValue | undefined,
  key: Key,
  name: string,
  onLeaved: (key: Key) => void,
): ChildMapValue | void {
  const inNext = nextValue?.reactEl !== undefined;
  const inPrev = prevValue?.reactEl !== undefined;
  const inBoth = inNext && inPrev;

  const isAdd = inNext && !inPrev;
  const isRemove = !inNext && inPrev;

  if (isRemove) {
    // noinspection PointlessBooleanExpressionJS
    if (
      (prevValue.reactEl as ReactElement<TransitionProps>).props.show === false
    )
      return prevValue;
    // 因为 remove 了的 child 是不存在于 next 的，所以这个 child 是旧的，是 clone 过的
    // tips: 加了 on 就不会等待多个 remove 完才 move，而是 remove 一个 move 一个
    return cloneTransition(
      prevValue.reactEl,
      { appear: false, show: false },
      prevValue.ref,
    );
  }

  const on = transitionCBAdapter({
    onAfterLeave: () => onLeaved(key || ''),
  });

  if (isAdd) {
    // 旧的不存在，所以 child 是新创建的，是未 clone 过的
    return cloneTransition(
      nextValue.reactEl,
      {
        appear: true,
        name: name,
        show: true,
        on,
      },
      prevValue?.ref,
    );
  }

  if (inBoth) {
    // 两者皆有取最新，所以 child 是新创建的，是未 clone 过的
    return cloneTransition(
      nextValue.reactEl,
      {
        appear: false,
        show: true,
        name: name,
        on,
      },
      prevValue.ref,
    );
  }
}

function cloneTransition(
  transition: ReactElement,
  props: Partial<TransitionProps>,
  ref: HTMLElement | null = null,
): ChildMapValue {
  const result: ChildMapValue = { reactEl: transition, ref };
  const _props = { ...props } as TransitionProps;
  const nextOn = props.on;
  if (nextOn) {
    const prevOn = transition.props.on as TransitionProps['on'];
    _props.on = (el, status, lifeCircle) => {
      prevOn?.(el, status, lifeCircle);
      nextOn(el, status, lifeCircle);
    };
  }

  result.reactEl = cloneElement<TransitionProps>(
    transition,
    _props,
    cloneChildren(),
  );
  return result;

  function cloneChildren() {
    const children = transition.props.children;
    return isValidElement(children)
      ? cloneElement(children as ReactElement, {
          ref: (el: HTMLElement) => {
            forwardRefs(el, (children as RefAttributes<any>).ref);
            el && (result.ref = el);
          },
        })
      : undefined;
  }
}
