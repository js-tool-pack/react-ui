import { mergeReactDefaultProps, getClasses } from '@pkg/shared';
import { useLocale } from '~/config-provider/useLocale';
import { getClassNames } from '@tool-pack/basic';
import type { EmptyProps } from './empty.types';
import { Empty as EmptyIcon } from '@pkg/icons';
import EnUS from './locale/en-US';
import { Icon } from '~/icon';
import React from 'react';

const cls = getClasses('empty', ['icon', 'desc'], []);
const defaultProps = {
  icon: (
    <Icon size={30}>
      <EmptyIcon />
    </Icon>
  ),
} satisfies Partial<EmptyProps>;

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  (props, ref) => {
    const {
      description,
      attrs = {},
      children,
      icon,
    } = mergeReactDefaultProps(props, defaultProps);
    const locale = useLocale('empty', EnUS);
    return (
      <div
        {...attrs}
        className={getClassNames(cls.root, attrs.className)}
        ref={ref}
      >
        <div className={cls.__.icon}>{icon}</div>
        <div className={cls.__.desc}>{description || locale.description}</div>
        {children}
      </div>
    );
  },
);

Empty.displayName = 'Empty';
