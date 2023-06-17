import React from 'react';
import { IconProps } from './icon.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootClass = getComponentClass('icon');
export const Icon: React.FC<IconProps> = React.forwardRef<
  HTMLElement,
  IconProps
>((props, ref) => {
  const { size, role, color, className, style = {}, ...rest } = props;

  const fontSize =
    size === undefined
      ? style.fontSize
      : typeof size === 'number'
      ? size + 'px'
      : size;

  return (
    <i
      {...rest}
      ref={ref}
      role={role || 'img'}
      className={getClassNames(rootClass, className)}
      style={{ ...style, fontSize, color: color || style.color }}></i>
  );
});
