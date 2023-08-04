import React from 'react';
import type {
  PLACEMENTS,
  PLACEMENTS_12,
  TransitionCB,
  WordBalloonProps,
} from '@pkg/components';

export type PopoverTrigger = 'click' | 'focus' | 'hover' | 'contextmenu';

export type PopoverProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'title' | 'children' | 'content'
> &
  Pick<WordBalloonProps, 'placement' | 'showArrow'> & {
    content?: React.ReactNode;
    children: React.ReactElement;
    appendTo?: null | (() => HTMLElement);
    trigger?: PopoverTrigger[] | PopoverTrigger;
    visible?: boolean;
    disabled?: boolean;
    offset?: number;
    destroyOnHide?: boolean;
    name?: string;
    on?: TransitionCB;
    viewport?: () => HTMLElement;
    childrenRef?: React.ForwardedRef<HTMLElement>;
  };

export type Placement = (typeof PLACEMENTS)[number];
export type Placement_12 = (typeof PLACEMENTS_12)[number];
