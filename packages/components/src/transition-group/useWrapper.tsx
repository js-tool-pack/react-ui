import type { TransitionGroupProps, ChildMap } from './transition-group.types';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';
import { getComponentClass } from '@pkg/shared';
import React from 'react';

const rootClass = getComponentClass('transition-group');
export function useWrapper(
  childMap: ChildMap,
  props: TransitionGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    attrs = {},
    className,
    tag,
  } = props as RequiredPart<TransitionGroupProps, 'tag'>;
  const children = getMapValues(childMap);

  const WrapChildNode = React.createElement(
    tag,
    {
      ...attrs,
      className: getClassNames(rootClass, className, attrs.className),
      ref: ref,
    },
    children,
  );

  return <>{WrapChildNode}</>;
}

function getMapValues<T extends Map<unknown, unknown>>(
  map: T,
): T extends Map<unknown, infer V> ? V[] : unknown[] {
  const result: unknown[] = [];
  map.forEach((v) => result.push(v));
  return result as any;
}
