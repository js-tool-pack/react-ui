import React from 'react';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { BaseLayoutsProps } from './layout.types';

const rootClass = getComponentClass('layout');
export const Layout = React.forwardRef<
  HTMLElement,
  BaseLayoutsProps & {
    vertical?: boolean;
  }
>((props, ref) => {
  const { vertical, className, children, ...rest } = props;
  return (
    <section
      {...rest}
      ref={ref}
      className={getClassNames(rootClass, {
        vertical,
        [className as string]: className,
      })}>
      {children}
    </section>
  );
});
