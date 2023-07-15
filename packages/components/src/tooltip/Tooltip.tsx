import React from 'react';
import type { TooltipProps } from './tooltip.types';
import { Popover } from '../popover';
import { RequiredPart } from '@tool-pack/types';

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
  placement: 'top',
  trigger: 'hover',
  offset: 10,
  name: 'tooltip',
  appendTo: () => document.body,
} satisfies Partial<TooltipProps>;
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
