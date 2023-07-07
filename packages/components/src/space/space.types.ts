import React from 'react';

export type SpaceProps = React.HTMLAttributes<HTMLElement> & {
  gap?: number | string;
  vertical?: boolean;
  tag?: keyof HTMLElementTagNameMap;
  separator?: React.ReactNode;
  inline?: boolean;
  fill?: boolean;
  fillRatio?: number;
  ref?: React.Ref<HTMLElement>;
};
