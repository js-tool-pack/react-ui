import React from 'react';
import { TooltipProps } from '../tooltip';

export type PopConfirmProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> &
  Pick<TooltipProps, 'placement' | 'trigger'> & {
    header?: React.ReactNode;
    content?: React.ReactNode;
    children: React.ReactElement;
    onConfirm?: () => void;
    onCancel?: () => void;
  };
