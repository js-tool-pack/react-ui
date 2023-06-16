import type React from 'react';
import type { CB, TransitionProps } from '../transition/transition.types';
import type { ChildStatus } from './transition-group.enums';

export type CompKey = string | number;
export interface Child {
  component: React.ReactElement;
  on: CB;
  status: ChildStatus;
}

export type TransitionGroupProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> &
  Pick<TransitionProps, 'name' | 'appear' | 'mode'> & {
    children?: React.ReactElement[];
    tag?: keyof HTMLElementTagNameMap;
  };
