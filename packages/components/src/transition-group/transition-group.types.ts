import type React from 'react';
import type { CB } from '../transition/transition.types';
import type { ChildStatus } from './transition-group.enums';

export type CompKey = string | number;
export interface Child {
  component: React.ReactElement;
  on: CB;
  status: ChildStatus;
}
