import React, { useRef } from 'react';
import { RequiredPart } from '@tool-pack/types';
import type { ChildMap, TransitionGroupProps } from './transition-group.types';

export function useWrapper(childMap: ChildMap, props: TransitionGroupProps) {
  const { tag, className, ...rest } = props as RequiredPart<
    TransitionGroupProps,
    'tag'
  >;
  const wrapperRef = useRef<HTMLElement>();
  const children = getMapValues(childMap);

  const WrapChildNode = React.createElement(
    tag,
    {
      ...rest,
      className,
      ref: wrapperRef,
    },
    children,
  );

  return [<>{WrapChildNode}</>, wrapperRef] as const;
}

function getMapValues<T extends Map<unknown, unknown>>(
  map: T,
): T extends Map<unknown, infer V> ? V[] : unknown[] {
  const result: unknown[] = [];
  map.forEach((v) => result.push(v));
  return result as any;
}
