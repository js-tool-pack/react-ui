import { LIFE_CIRCLE, STATUS } from './transition.enums';
import React from 'react';

export type El = React.ReactElement | boolean | void;

export type Mode = 'default' | 'out-in' | 'in-out';

export type CB = (
  el: HTMLElement,
  status: STATUS,
  lifeCircle: LIFE_CIRCLE,
) => void;

export interface TransitionProps {
  attrs?: Partial<Omit<React.HTMLAttributes<HTMLElement>, 'children'>>;
  children?: React.ReactElement | boolean;
  appear?: boolean | null;
  show?: boolean;
  name?: string;
  mode?: Mode;
  on?: CB;
}
