import React from 'react';
import { LIFE_CIRCLE, STATUS } from './transition.enums';

export type El = React.ReactElement | void | boolean;

export type Mode = 'out-in' | 'in-out' | 'default';

export type CB = (
  el: HTMLElement,
  status: STATUS,
  lifeCircle: LIFE_CIRCLE,
) => void;

export interface TransitionProps {
  // show?: boolean;
  name?: string;
  mode?: Mode;
  children?: React.ReactElement | boolean;
  appear?: boolean;
  on?: CB;
}
