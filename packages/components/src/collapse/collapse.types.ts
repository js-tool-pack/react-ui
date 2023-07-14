import React from 'react';
import type { Size } from '@pkg/shared';

export type CollapseProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'title' | 'onChange'
> & {
  disabled?: boolean;
  expanded?: boolean;
  header?: (active: boolean) => React.ReactNode;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  icon?: null | ((active: boolean) => React.ReactNode);
  iconPlacement?: 'start' | 'end';
  destroyOnHide?: boolean | 'mixed';
  size?: Size;
  onChange?: (active: boolean) => void;
};

export type CollapseGroupItem = CollapseProps & {
  children: React.ReactNode;
  key: string | number;
};

export type CollapseGroupProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'title' | 'children' | 'onChange'
> & {
  options?: Partial<CollapseProps>;
  accordion?: boolean;
  items: CollapseGroupItem[];
  onChange?: (item: CollapseGroupItem, index: number, active: boolean) => void;
};
