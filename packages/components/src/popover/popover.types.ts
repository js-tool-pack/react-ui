import type { WordBalloonProps, TransitionCB } from '@pkg/components';
import type { VisibleController, PropsBase } from '@pkg/shared';
import React from 'react';

export type PopoverTrigger = 'contextmenu' | 'click' | 'focus' | 'hover';

export interface PopoverProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'>,
    Pick<WordBalloonProps, 'placement' | 'showArrow'> {
  visibleControllerRef?: React.Ref<VisibleController>;
  appendTo?: (() => HTMLElement | null) | null;
  onVisibleChange?: (visible: boolean) => void;
  trigger?: PopoverTrigger[] | PopoverTrigger;
  children: React.ReactElement;
  viewport?: () => HTMLElement;
  content?: React.ReactNode;
  widthByTrigger?: boolean;
  destroyOnHide?: boolean;
  leaveDelay?: number;
  disabled?: boolean;
  visible?: boolean;
  on?: TransitionCB;
  offset?: number;
  delay?: number;
  name?: string;
}
