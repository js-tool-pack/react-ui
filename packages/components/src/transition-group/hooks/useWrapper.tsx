import type { TransitionGroupProps, ChildMap } from '../transition-group.types';
import type { ReactElement, ForwardedRef, ReactNode } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';
import { getComponentClass } from '@pkg/shared';
import { createElement } from 'react';

const rootClass = getComponentClass('transition-group');
export function useWrapper(
  childMap: ChildMap,
  props: TransitionGroupProps,
  ref: ForwardedRef<HTMLDivElement>,
): ReactNode {
  const {
    attrs = {},
    className,
    tag,
  } = props as RequiredPart<TransitionGroupProps, 'tag'>;
  const children = getMapValues(childMap);

  if (tag === null) return children;
  return createElement(
    tag,
    {
      ...attrs,
      className: getClassNames(rootClass, className, attrs.className),
      ref: ref,
    },
    children,
  );
}

function getMapValues(map: ChildMap): ReactElement[] {
  const result: ReactElement[] = [];
  map.forEach((v) => result.push(v.reactEl));
  return result;
}
