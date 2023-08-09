import React from 'react';
import { RequiredPart } from '@tool-pack/types';
import type { ChildMap, TransitionGroupProps } from './transition-group.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootClass = getComponentClass('transition-group');
export function useWrapper(
  childMap: ChildMap,
  props: TransitionGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    tag,
    className,
    attrs = {},
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
