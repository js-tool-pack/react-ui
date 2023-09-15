import { Popover as OriginPopover } from './Popover';
import type { PopoverProps } from './popover.types';
import { Contextmenu } from './Contextmenu';
import React from 'react';

export type { PopoverProps } from './popover.types';

export const Popover: React.FC<PopoverProps> = (props) => {
  const { trigger, ...rest } = props;
  if (trigger === 'contextmenu') return <Contextmenu {...rest} />;
  return <OriginPopover {...rest} trigger={trigger} />;
};

Popover.displayName = 'PopoverDeflector';
