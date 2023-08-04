import React from 'react';
import type { OptionProps } from './option.types';
import { getComponentClass, getSizeClassName } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '~/icon';
import { Right as RightIcon } from '@pkg/icons';

const defaultProps = {
  tag: 'div',
  size: 'medium',
  role: 'option',
} satisfies Partial<OptionProps>;

const rootName = getComponentClass('option');

export const Option: React.FC<OptionProps> = React.forwardRef<
  HTMLElement,
  OptionProps
>((props, ref) => {
  const {
    children,
    icon,
    readonly,
    expandable,
    size,
    tag,
    className,
    ...rest
  } = props as RequiredPart<OptionProps, keyof typeof defaultProps>;

  const Child = (
    <>
      {icon && <Icon className={`${rootName}__icon`}>{icon}</Icon>}
      {!icon && !expandable ? (
        children
      ) : (
        <span className={`${rootName}__label`}>{children}</span>
      )}
      {expandable && (
        <Icon className={`${rootName}__expand`}>
          <RightIcon />
        </Icon>
      )}
    </>
  );

  return React.createElement(
    tag,
    {
      ...rest,
      ref,
      className: getClassNames(rootName, className, getSizeClassName(size), {
        [`${rootName}--readonly`]: readonly,
      }),
    },
    Child,
  );
});

Option.defaultProps = defaultProps;
Option.displayName = 'Option';
