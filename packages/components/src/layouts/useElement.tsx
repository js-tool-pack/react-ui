import { BaseLayoutsProps } from './layout.types';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';
import React from 'react';

export function useElement(
  props: BaseLayoutsProps,
  ref: React.ForwardedRef<HTMLElement>,
  rootClass: string,
): React.ReactElement {
  const {
    attrs = {},
    className,
    children,
    style,
    tag,
  } = props as RequiredPart<BaseLayoutsProps, 'tag'>;
  return React.createElement(
    tag,
    {
      ...attrs,
      className: getClassNames(rootClass, attrs.className, {
        [className as string]: className,
      }),
      style: { ...attrs.style, ...style },
      ref,
    },
    children,
  );
}
