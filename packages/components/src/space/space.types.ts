import React from 'react';

export type SpaceProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: number | string;
  vertical?: boolean;
};
