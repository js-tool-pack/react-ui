import {
  isValidElement,
  cloneElement,
  ReactElement,
  ReactNode,
  Children,
  useMemo,
} from 'react';

/**
 * 对 children 所有有效元素添加 ref，并且连通原来的 ref，返回 children 与 refs
 */
export function useChildrenWithRefs(
  children?: ReactNode,
): [children: ReactNode, refs: HTMLElement[]] {
  return useMemo(() => {
    const refs: HTMLElement[] = [];
    const newChildren = Children.map(children, (child, index) => {
      if (!isValidElement(child)) return child;
      return cloneElement(child as ReactElement, {
        ref: (el: HTMLElement) => {
          refs[index] = el;
          // ref 现在是直接放在 ReactElement 上的，props 虽然也有，但取的是 undefined
          const originRef = (child as any).ref;
          // const originRef = child.props.ref;
          if (!originRef) return;
          // 连通原来的 ref
          if (typeof originRef === 'function') originRef(el);
          else originRef.current = el;
        },
      });
    });
    return [newChildren, refs];
  }, [children]);
}
