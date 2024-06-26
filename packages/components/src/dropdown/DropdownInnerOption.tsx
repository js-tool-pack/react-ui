import { mergeReactDefaultProps, getComponentClass } from '@pkg/shared';
import { DropdownOptionProps } from '~/dropdown/dropdown.types';
import { getClassNames } from '@tool-pack/basic';
import { Right as RightIcon } from '@pkg/icons';
import { Option } from '~/option';
import { Icon } from '~/icon';
import React from 'react';

const rootClass = getComponentClass('dropdown-option');
const defaultProps = {
  tag: 'li',
} satisfies Partial<DropdownOptionProps>;

export const DropdownInnerOption = React.forwardRef<
  HTMLElement,
  DropdownOptionProps
>((props, ref) => {
  const {
    expandable,
    attrs = {},
    children,
    extra,
    ...rest
  } = mergeReactDefaultProps(props, defaultProps);
  return (
    <Option
      {...rest}
      extra={
        (extra || expandable) && (
          <>
            {extra}
            {expandable && (
              <Icon className={`${rootClass}__expand`}>
                <RightIcon />
              </Icon>
            )}
          </>
        )
      }
      attrs={{
        ...attrs,
        className: getClassNames(rootClass, attrs.className),
      }}
      ref={ref}
    >
      {children}
    </Option>
  );
});
