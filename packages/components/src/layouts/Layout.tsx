import React from 'react';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { BaseLayoutsProps } from './layout.types';

const rootClass = getComponentClass('layout');
export const Layout: React.FC<
  BaseLayoutsProps & {
    vertical?: boolean;
  }
> = (props) => {
  const { vertical, className, children, ...rest } = props;
  return (
    <section
      {...rest}
      className={getClassNames(rootClass, {
        vertical,
        [className as string]: className,
      })}>
      {children}
    </section>
  );
};
