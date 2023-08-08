import React from 'react';
import { IconProps } from './icon.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootClass = getComponentClass('icon');
export const Icon: React.FC<IconProps> = React.forwardRef<
  HTMLElement,
  IconProps
>((props, ref) => {
  const { size, color, children, className, attrs = {} } = props;
  const { style = {}, role = 'img' } = attrs;

  const fontSize =
    size === undefined
      ? style.fontSize
      : typeof size === 'number'
      ? size + 'px'
      : size;

  return (
    <i
      {...attrs}
      ref={ref}
      role={role}
      className={getClassNames(rootClass, attrs.className, className)}
      style={{ ...style, fontSize, color: color || style.color }}>
      {children ?? attrs.children}
    </i>
  );
});
