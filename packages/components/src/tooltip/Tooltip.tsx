import type { TooltipProps } from './tooltip.types';
import { RequiredPart } from '@tool-pack/types';
import { Popover } from '../popover';
import React from 'react';

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, title, ...rest } = props as RequiredPart<
    TooltipProps,
    keyof typeof defaultProps
  >;
  return (
    <Popover {...rest} content={title}>
      {children}
    </Popover>
  );
};

const defaultProps = {
  appendTo: () => document.body,
  placement: 'top',
  trigger: 'hover',
  name: 'tooltip',
  offset: 10,
} satisfies Partial<TooltipProps>;
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
