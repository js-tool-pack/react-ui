import React from 'react';
import type { OptionProps } from './option.types';
import { getComponentClass, getSizeClassName } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '~/icon';

const defaultProps = {
  tag: 'div',
  size: 'medium',
  attrs: { role: 'option' },
} satisfies Partial<OptionProps>;

const rootName = getComponentClass('option');

export const Option: React.FC<OptionProps> = React.forwardRef<
  HTMLElement,
  OptionProps
>((props, ref) => {
  const { children, icon, readonly, extra, size, tag, disabled } =
    props as RequiredPart<OptionProps, keyof typeof defaultProps>;

  const attrs = {
    ...defaultProps.attrs,
    ...props.attrs,
  } as OptionProps['attrs'];

  const Child = (
    <>
      {icon && <Icon className={`${rootName}__icon`}>{icon}</Icon>}
      <div className={`${rootName}__label`}>{children}</div>
      {extra && <div className={`${rootName}__extra`}>{extra}</div>}
    </>
  );

  return React.createElement(
    tag,
    {
      ...attrs,
      ref,
      disabled,
      className: getClassNames(
        rootName,
        attrs?.className,
        getSizeClassName(size),
        {
          [`${rootName}--readonly`]: readonly,
        },
      ),
    },
    Child,
  );
});

Option.defaultProps = defaultProps;
Option.displayName = 'Option';
