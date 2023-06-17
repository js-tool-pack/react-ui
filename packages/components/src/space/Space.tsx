import React from 'react';
import { SpaceProps } from './space.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootClass = getComponentClass('space');

export const Space: React.FC<SpaceProps> = React.forwardRef<
  HTMLDivElement,
  SpaceProps
>((props, ref) => {
  const { className, style, gap, children, vertical, ...rest } = props;

  const g =
    gap === undefined ? style?.gap : typeof gap === 'number' ? gap + 'px' : gap;

  return (
    <div
      {...rest}
      ref={ref}
      className={getClassNames(rootClass, className, {
        [`${rootClass}__vertical`]: vertical,
      })}
      style={{ ...style, gap: g }}>
      {children}
    </div>
  );
});
