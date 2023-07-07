import React from 'react';
import { WordBalloonProps } from '../word-balloon';
import type { PLACEMENTS, PLACEMENTS_12 } from '@pkg/shared';

type TooltipTrigger = 'click' | 'focus' | 'hover';

export type TooltipProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'title' | 'children'
> &
  Pick<WordBalloonProps, 'placement' | 'showArrow'> & {
    title?: React.ReactNode;
    children: React.ReactElement;
    appendTo?: () => HTMLElement;
    trigger?: TooltipTrigger[] | TooltipTrigger;
    visible?: boolean;
    disabled?: boolean;
    offset?: number;
  };

export type Placement = (typeof PLACEMENTS)[number];
export type Placement_12 = (typeof PLACEMENTS_12)[number];
