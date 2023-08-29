import React from 'react';
import { DropdownOptionProps } from '~/dropdown/dropdown.types';
import { Option } from '~/option';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '~/icon';
import { Right as RightIcon } from '@pkg/icons';

const rootClass = getComponentClass('dropdown-option');
const defaultProps = {
  tag: 'li',
} satisfies Partial<DropdownOptionProps>;

export const DropdownInnerOption: React.FC<DropdownOptionProps> =
  React.forwardRef<HTMLElement, DropdownOptionProps>((props, ref) => {
    const { expandable, children, extra, attrs = {}, ...rest } = props;
    return (
      <Option
        {...rest}
        ref={ref}
        attrs={{
          ...attrs,
          className: getClassNames(rootClass, attrs.className),
        }}
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
        }>
        {children}
      </Option>
    );
  });

DropdownInnerOption.defaultProps = defaultProps;
