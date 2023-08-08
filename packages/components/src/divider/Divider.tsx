import React from 'react';
import type { DividerProps } from './divider.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';

const rootName = getComponentClass('divider');

const defaultProps = {
  placement: 'center',
  lineStyle: 'solid',
  lineWidth: '1px',
  tag: 'div',
} satisfies DividerProps;

export const Divider: React.FC<DividerProps> = React.forwardRef<
  HTMLElement,
  DividerProps
>((props, ref) => {
  const {
    tag,
    children,
    vertical,
    placement,
    lineStyle,
    lineColor,
    lineWidth,
    attrs = {},
  } = props as RequiredPart<DividerProps, keyof typeof defaultProps>;

  const _style = {
    ...attrs.style,
    '--t-divider-border-color': lineColor,
    '--t-divider-border-style': lineStyle,
    '--t-divider-border-width': lineWidth,
  } as React.CSSProperties;

  const _className = getClassNames(
    rootName,
    attrs.className,
    `${rootName}--${placement}`,
    {
      [`${rootName}--vertical`]: vertical,
      [`${rootName}--horizontal`]: !vertical,
    },
  );

  return React.createElement(
    tag,
    {
      ...attrs,
      ref,
      style: _style,
      className: _className,
    },
    <>
      {!vertical && children && (
        <div className={`${rootName}__content`}>{children}</div>
      )}
    </>,
  );
});

Divider.displayName = 'Divider';
Divider.defaultProps = defaultProps;
