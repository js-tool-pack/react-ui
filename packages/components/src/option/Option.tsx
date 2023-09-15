import { getComponentClass, getSizeClassName } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import type { OptionProps } from './option.types';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '~/icon';
import React from 'react';

const defaultProps = {
  attrs: { role: 'option' },
  size: 'medium',
  tag: 'div',
} satisfies Partial<OptionProps>;

const rootName = getComponentClass('option');

export const Option: React.FC<OptionProps> = React.forwardRef<
  HTMLElement,
  OptionProps
>((props, ref) => {
  const { children, readonly, disabled, extra, icon, size, tag } =
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
      className: getClassNames(
        rootName,
        attrs?.className,
        getSizeClassName(size),
        {
          [`${rootName}--readonly`]: readonly,
        },
      ),
      disabled,
      ref,
    },
    Child,
  );
});

Option.defaultProps = defaultProps;
Option.displayName = 'Option';
