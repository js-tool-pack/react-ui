import { BaseLayoutsProps } from './layout.types';
import { RequiredPart } from '@tool-pack/types';
import React from 'react';
import { getClassNames } from '@tool-pack/basic';

export function useElement(
  props: BaseLayoutsProps,
  ref: React.ForwardedRef<HTMLElement>,
  rootClass: string,
): React.ReactElement {
  const {
    children,
    className,
    tag,
    style,
    attrs = {},
  } = props as RequiredPart<BaseLayoutsProps, 'tag'>;
  return React.createElement(
    tag,
    {
      ...attrs,
      ref,
      style: { ...attrs.style, ...style },
      className: getClassNames(rootClass, attrs.className, {
        [className as string]: className,
      }),
    },
    children,
  );
}
