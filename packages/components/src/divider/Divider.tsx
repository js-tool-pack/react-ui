import React from 'react';
import type { DividerProps } from './divider.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';

const rootName = getComponentClass('divider');

export const Divider: React.FC<DividerProps> = React.forwardRef<
  HTMLDivElement,
  DividerProps
>((props, ref) => {
  const {
    className,
    children,
    vertical,
    placement,
    style,
    lineStyle,
    lineColor,
    lineWidth,
    ...rest
  } = props;

  const _style = {
    ...style,
    '--t-divider-border-color': lineColor,
    '--t-divider-border-style': lineStyle,
    '--t-divider-border-width': lineWidth,
  } as React.CSSProperties;

  const _className = getClassNames(
    rootName,
    className,
    `${rootName}--${placement}`,
    {
      [`${rootName}--vertical`]: vertical,
      [`${rootName}--horizontal`]: !vertical,
    },
  );

  return (
    <div {...rest} ref={ref} style={_style} className={_className}>
      {!vertical && children && (
        <div className={`${rootName}__content`}>{children}</div>
      )}
    </div>
  );
});

Divider.displayName = 'Divider';
Divider.defaultProps = {
  placement: 'center',
  lineStyle: 'solid',
  lineWidth: '1px',
};
