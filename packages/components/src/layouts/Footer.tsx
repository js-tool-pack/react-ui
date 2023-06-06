import React from 'react';
import { BaseLayoutsProps } from './layout.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootClass = getComponentClass('footer');

export const Footer: React.FC<BaseLayoutsProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <footer
      {...rest}
      className={getClassNames(rootClass, {
        [className as string]: className,
      })}>
      {children}
    </footer>
  );
};
