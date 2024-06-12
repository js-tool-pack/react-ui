import { mergeReactDefaultProps, getComponentClass } from '@pkg/shared';
import type { DividerProps } from './divider.types';
import { getClassNames } from '@tool-pack/basic';
import React from 'react';

const rootName = getComponentClass('divider');

const defaultProps = {
  placement: 'center',
  lineStyle: 'solid',
  lineWidth: '1px',
  tag: 'div',
} satisfies DividerProps;

export const Divider = React.forwardRef<HTMLElement, DividerProps>(
  (props, ref) => {
    const {
      attrs = {},
      placement,
      lineStyle,
      lineColor,
      lineWidth,
      children,
      vertical,
      tag,
    } = mergeReactDefaultProps(props, defaultProps);
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
        [`${rootName}--horizontal`]: !vertical,
        [`${rootName}--vertical`]: vertical,
      },
    );

    return React.createElement(
      tag,
      {
        ...attrs,
        className: _className,
        style: _style,
        ref,
      },
      <>
        {!vertical && children && (
          <div className={`${rootName}__content`}>{children}</div>
        )}
      </>,
    );
  },
);

Divider.displayName = 'Divider';
