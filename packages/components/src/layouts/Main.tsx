import React from 'react';
import { BaseLayoutsProps } from './layout.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootClass = getComponentClass('main');

export const Main: React.FC<BaseLayoutsProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <main
      {...rest}
      className={getClassNames(rootClass, {
        [className as string]: className,
      })}>
      {children}
    </main>
  );
};
