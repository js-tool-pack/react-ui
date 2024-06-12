import { mergeReactDefaultProps } from '@pkg/shared';
import type { TooltipProps } from './tooltip.types';
import { Popover } from '../popover';
import React from 'react';

const defaultProps = {
  appendTo: () => document.body,
  placement: 'top',
  trigger: 'hover',
  name: 'tooltip',
  offset: 10,
} satisfies Partial<TooltipProps>;

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, title, ...rest } = mergeReactDefaultProps(
    props,
    defaultProps,
  );
  return (
    <Popover {...rest} content={title}>
      {children}
    </Popover>
  );
};

Tooltip.displayName = 'Tooltip';
