import React from 'react';

export type BaseLayoutsProps = React.HTMLAttributes<HTMLElement> & {
  tag?: keyof HTMLElementTagNameMap;
};
export type LayoutProps = BaseLayoutsProps & {
  vertical?: boolean;
};
