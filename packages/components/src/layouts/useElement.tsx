import { BaseLayoutsProps } from './layout.types';
import { RequiredPart } from '@tool-pack/types';
import React from 'react';
import { getClassNames } from '@tool-pack/basic';

export function useElement(props: BaseLayoutsProps, rootClass: string) {
  const { children, className, tag, ...rest } = props as RequiredPart<
    BaseLayoutsProps,
    'tag'
  >;
  return React.createElement(
    tag,
    {
      ...rest,
      className: getClassNames(rootClass, {
        [className as string]: className,
      }),
    },
    children,
  );
}
