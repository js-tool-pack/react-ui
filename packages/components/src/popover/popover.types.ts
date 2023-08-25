import React from 'react';
import type { TransitionCB, WordBalloonProps } from '@pkg/components';
import { PropsBase } from '@pkg/shared';

export type PopoverTrigger = 'click' | 'focus' | 'hover' | 'contextmenu';

export interface PopoverProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'>,
    Pick<WordBalloonProps, 'placement' | 'showArrow'> {
  content?: React.ReactNode;
  children: React.ReactElement;
  appendTo?: null | (() => HTMLElement | null);
  trigger?: PopoverTrigger[] | PopoverTrigger;
  visible?: boolean;
  disabled?: boolean;
  offset?: number;
  destroyOnHide?: boolean;
  name?: string;
  on?: TransitionCB;
  viewport?: () => HTMLElement;
  childrenRef?: React.ForwardedRef<HTMLElement>;
  delay?: number;
  leaveDelay?: number;
  onVisibleChange?: (visible: boolean) => void;
}
