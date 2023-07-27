import React, { useEffect, useState } from 'react';
import { transitionCBAdapter, type TransitionProps } from '@pkg/components';
import { useIsInitDep } from '@pkg/shared';
import type { ChildMap } from './transition-group.types';
export function useChildMap(children: React.ReactNode, name: string) {
  const isInit = useIsInitDep(children);

  const [childMap, setChildMap] = useState((): ChildMap => {
    return createMap(children, (child) => {
      const onAfterLeave = () => onLeaved(child.key || '');
      return cloneTransition(child, {
        name: name,
        show: true,
        on: transitionCBAdapter({ onAfterLeave }),
      });
    });
  });

  const onLeaved = (key: React.Key) => {
    // leave 可能会丢失
    setChildMap((prevChildren) => {
      prevChildren.delete(key);
      return new Map(prevChildren.entries());
    });
  };

  useEffect(() => {
    if (isInit) return;
    setChildMap(nextChildMap(children, childMap, name, onLeaved));
  }, [children]);

  return childMap;
}

const nextChildMap = (
  children: React.ReactNode,
  prevChildMap: ChildMap,
  name: string,
  onLeaved: (key: React.Key) => void,
): ChildMap => {
  const childMap = createMap(children);
  return mergeMaps(prevChildMap, childMap, (child, key): React.ReactNode => {
    if (!React.isValidElement(child)) return child;

    const inNext = childMap.get(key) !== undefined;
    const inPrev = prevChildMap.get(key) !== undefined;
    const inBoth = inNext && inPrev;

    const isAdd = inNext && !inPrev;
    const isRemove = !inNext && inPrev;

    if (isRemove) {
      if (child.props.show === false) return child;
      // 因为 remove 了的 child 是不存在于 next 的，所以这个 child 是旧的，是 clone 过的
      // tips: 加了 on 就不会等待多个 remove 完才 move，而是 remove 一个 move 一个
      return cloneTransition(child, { show: false, appear: false });
    }

    const on = transitionCBAdapter({
      onAfterLeave: () => onLeaved(child.key || ''),
    });

    if (isAdd) {
      // 旧的不存在，所以 child 是新创建的，是未 clone 过的
      return cloneTransition(child, {
        name: name,
        show: true,
        appear: true,
        on,
      });
    }

    if (inBoth) {
      // 两者皆有取最新，所以 child 是新创建的，是未 clone 过的
      return cloneTransition(child, {
        show: true,
        name: name,
        appear: false,
        on,
      });
    }
    return child;
  });
};

function createMap(
  children: React.ReactNode,
  callback: (child: React.ReactElement) => React.ReactNode = (v) => v,
): ChildMap {
  const map: ChildMap = new Map();
  if (!children) return map;

  // 如果没有手动添加key, React.Children.map会自动添加key
  React.Children.map(children, (c) => c)?.forEach((child) => {
    if (!React.isValidElement(child)) return;
    const key = child.key || '';
    if (!key) return;
    map.set(key, callback(child));
  });

  return map;
}

function mergeMaps(
  prevMap: ChildMap,
  nextMap: ChildMap,
  callback: (child: React.ReactNode, key: React.Key) => React.ReactNode,
): ChildMap {
  const getValue = (key: React.Key) => nextMap.get(key) ?? prevMap.get(key);

  let insertKeys: React.Key[] = [];
  const insertKeysMap: Record<React.Key, typeof insertKeys> =
    Object.create(null);

  prevMap.forEach((_, key) => {
    if (nextMap.has(key)) {
      if (!insertKeys.length) return;
      insertKeysMap[key] = insertKeys;
      insertKeys = [];
      return;
    }
    insertKeys.push(key);
  });

  const result: ChildMap = new Map();
  const push = (k: React.Key) => result.set(k, callback(getValue(k), k));
  nextMap.forEach((_, key) => {
    const keys = insertKeysMap[key];
    if (keys) keys.forEach(push);
    push(key);
  });
  insertKeys.forEach(push);

  return result;
}

function cloneTransition(
  transition: React.ReactElement,
  props: Partial<TransitionProps>,
) {
  const _props = { ...props, 'data-key': transition.key } as TransitionProps;
  const nextOn = props.on;
  if (nextOn) {
    const prevOn = transition.props.on as TransitionProps['on'];
    _props.on = (el, status, lifeCircle) => {
      prevOn?.(el, status, lifeCircle);
      nextOn(el, status, lifeCircle);
    };
  }
  return React.cloneElement<TransitionProps>(transition, _props);
}
