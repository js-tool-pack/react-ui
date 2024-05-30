import {
  JSXElementConstructor,
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
  cloneEl?: (
    element: ReactElement<any, JSXElementConstructor<any> | string>,
    props: { ref: (el: HTMLElement) => void },
    index: number,
  ) => ReactElement,
): [children: ReactNode, refs: (HTMLElement | undefined)[]] {
  return useMemo(() => {
    const refs: (HTMLElement | undefined)[] = [];
    const clone = cloneEl || ((element, props) => cloneElement(element, props));
    const newChildren = Children.map(children, (child, index) => {
      if (!isValidElement(child)) return child;
      return clone(
        child,
        {
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
        },
        index,
      );
    });
    return [newChildren, refs];
  }, [children]);
}
