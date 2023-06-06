import React from 'react';
import { BaseLayoutsProps } from './layout.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootClass = getComponentClass('header');

export const Header: React.FC<BaseLayoutsProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <header
      {...rest}
      className={getClassNames(rootClass, {
        [className as string]: className,
      })}>
      {children}
    </header>
  );
};
