import type React from 'react';
import type { CB, TransitionProps } from '../transition/transition.types';
import type { ChildStatus } from './transition-group.enums';
import { LIFE_CIRCLE, STATUS } from '../transition/transition.enums';

export type CompKey = string | number;
export interface Child {
  component: React.ReactElement;
  on: CB;
  status: ChildStatus;
}

export type TransitionGroupCB = (
  key: number | string,
  status: STATUS,
  lifeCircle: LIFE_CIRCLE,
) => void;

export type TransitionGroupProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> &
  Pick<TransitionProps, 'name' | 'mode'> & {
    children?: React.ReactElement[];
    tag?: keyof HTMLElementTagNameMap;
    on?: TransitionGroupCB;
    appear?: boolean;
  };
