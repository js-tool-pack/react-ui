import {
  isValidElement,
  cloneElement,
  useEffect,
  useState,
  Children,
} from 'react';
import {
  type TransitionProps,
  transitionCBAdapter,
  Transition,
} from '~/transition';
import type { RefAttributes, ReactElement, ReactNode, Key } from 'react';
import type { ChildMapValue, ChildMap } from '../transition-group.types';
import { useIsInitDep, forwardRefs } from '@pkg/shared';

export function useChildMap(children: ReactNode, name: string): ChildMap {
  const isInit = useIsInitDep(children);

  const [childMap, setChildMap] = useState((): ChildMap => {
    return createMap(children, (child) => {
      const onAfterLeave = () => onLeaved(child.key || '');
      return createMapValue(child, {
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
    setChildMap(mergeChildMap(childMap, children, name, onLeaved));
  }, [children]);

  return childMap;
}

function createMap(
  children: ReactNode,
  callback: (child: ReactElement) => ChildMapValue = (v) => ({
    reactEl: v,
    ref: null,
  }),
): ChildMap {
  const map: ChildMap = new Map();

  // 如果没有手动添加key, Children.map会自动添加key，就算手动添加也会被 map 处理一遍，跟原来的不一样
  Children.map(children, (c) => c)?.forEach((child) => {
    if (!isValidElement(child)) return;
    const key = child.key || '';
    if (!key) return;
    map.set(key, callback(child));
  });

  return map;
}

function mergeChildMap(
  prevMap: ChildMap,
  children: ReactNode,
  name: string,
  onLeaved: (key: Key) => void,
): ChildMap {
  const childMap: ChildMap = new Map();
  const map = new Map<Key, ReactElement>();
  Children.map(children, (c) => c)?.forEach(
    (c) => isValidElement(c) && c.key && map.set(c.key, c),
  );
  let insertKeys: Key[] = [];
  const insertKeysMap = new Map<Key, typeof insertKeys>();
  prevMap.forEach((_, key): void => {
    if (map.has(key)) {
      if (!insertKeys.length) return;
      insertKeysMap.set(key, insertKeys);
      insertKeys = [];
      return;
    }
    insertKeys.push(key);
  });
  map.forEach((_, key): void => {
    const keys = insertKeysMap.get(key);
    if (keys) keys.forEach(push);
    push(key);
  });
  insertKeys.forEach(push);

  return childMap;

  function push(k: Key): void {
    const value = mergeMapValue(prevMap.get(k), map.get(k), k, name, onLeaved);
    value && childMap.set(k, value);
  }
}

function mergeMapValue(
  prevValue: ChildMapValue | undefined,
  children: ReactElement | undefined,
  key: Key,
  name: string,
  onLeaved: (key: Key) => void,
): ChildMapValue | void {
  const inNext = children !== undefined;
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
    return updateTransition(prevValue, { appear: false, show: false });
  }

  const on = transitionCBAdapter({
    onAfterLeave: () => onLeaved(key || ''),
  });

  if (isAdd) {
    // 旧的不存在，所以 child 是新创建的，是未 clone 过的
    return createMapValue(children, {
      appear: true,
      name: name,
      show: true,
      on,
    });
  }

  if (inBoth) {
    // 两者皆有取最新，所以 child 是新创建的，是未 clone 过的
    return updateTransition(
      prevValue,
      {
        appear: false,
        show: true,
        name: name,
        on,
      },
      children,
    );
  }
}

function createMapValue(
  children: ReactElement,
  props: Partial<TransitionProps>,
): ChildMapValue {
  const result: ChildMapValue = { reactEl: children, ref: null };
  if (children.type === Transition) return updateTransition(result, props);
  result.reactEl = (
    <Transition {...props} key={children.key}>
      {cloneChildren(children, result)}
    </Transition>
  );
  return result;
}

function updateTransition(
  mapValue: ChildMapValue,
  props: Partial<TransitionProps>,
  children?: ReactElement,
): ChildMapValue {
  const _props = { ...props } as TransitionProps;
  const { reactEl } = mapValue;
  const nextOn = props.on;
  if (nextOn) {
    const prevOn = reactEl.props.on as TransitionProps['on'];
    _props.on = (el, status, lifeCircle) => {
      prevOn?.(el, status, lifeCircle);
      nextOn(el, status, lifeCircle);
    };
  }

  children = children
    ? children.type === Transition
      ? children.props.children
      : children
    : reactEl.props.children;
  mapValue.reactEl = cloneElement<TransitionProps>(
    reactEl,
    _props,
    cloneChildren(children, mapValue),
  );
  return mapValue;
}

function cloneChildren(
  children: ReactElement | undefined,
  childMapValue: ChildMapValue,
): ReactElement | undefined {
  return isValidElement(children)
    ? cloneElement(children as ReactElement, {
        ref: (el: HTMLElement) => {
          forwardRefs(el, (children as RefAttributes<any>).ref);
          el && (childMapValue.ref = el);
        },
      })
    : undefined;
}
