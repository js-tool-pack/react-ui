import React from 'react';
import { PLACEMENTS, PLACEMENTS_12, WordBalloonProps } from '@pkg/components';

export type PopoverTrigger = 'click' | 'focus' | 'hover';

export type PopoverProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'title' | 'children' | 'content'
> &
  Pick<WordBalloonProps, 'placement' | 'showArrow'> & {
    content?: React.ReactNode;
    children: React.ReactElement;
    appendTo?: () => HTMLElement;
    trigger?: PopoverTrigger[] | PopoverTrigger;
    visible?: boolean;
    disabled?: boolean;
    offset?: number;
    destroyOnHide?: boolean;
    name?: string;
  };

export type Placement = (typeof PLACEMENTS)[number];
export type Placement_12 = (typeof PLACEMENTS_12)[number];
