import { getClassNames } from '@tool-pack/basic';
import { getComponentClass } from '@pkg/shared';
import { IconProps } from './icon.types';
import React from 'react';

const rootClass = getComponentClass('icon');
export const Icon: React.FC<IconProps> = React.forwardRef<
  HTMLElement,
  IconProps
>((props, ref) => {
  const { attrs = {}, className, children, color, size } = props;
  const { role = 'img', style = {} } = attrs;

  const fontSize =
    size === undefined
      ? style.fontSize
      : typeof size === 'number'
      ? size + 'px'
      : size;

  return (
    <i
      {...attrs}
      className={getClassNames(rootClass, attrs.className, className)}
      style={{ ...style, color: color || style.color, fontSize }}
      role={role}
      ref={ref}
    >
      {children ?? attrs.children}
    </i>
  );
});
