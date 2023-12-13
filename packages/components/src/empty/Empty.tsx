import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { EmptyProps } from './empty.types';
import { Empty as EmptyIcon } from '@pkg/icons';
import { getClasses } from '@pkg/shared';
import { Icon } from '~/icon';
import React from 'react';

const cls = getClasses('empty', ['icon', 'desc'], []);
const defaultProps = {
  icon: (
    <Icon size={30}>
      <EmptyIcon />
    </Icon>
  ),
  description: 'No Data',
} satisfies Partial<EmptyProps>;

export const Empty: React.FC<EmptyProps> = React.forwardRef<
  HTMLDivElement,
  EmptyProps
>((props, ref) => {
  const {
    description,
    attrs = {},
    children,
    icon,
  } = props as RequiredPart<EmptyProps, keyof typeof defaultProps>;
  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      <div className={cls.__.icon}>{icon}</div>
      <div className={cls.__.desc}>{description}</div>
      {children}
    </div>
  );
});

Empty.defaultProps = defaultProps;
Empty.displayName = 'Empty';
