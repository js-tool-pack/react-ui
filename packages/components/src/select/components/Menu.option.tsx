import { SelectOptionProps } from '~/select/select.types';
import { getClassNames } from '@tool-pack/basic';
import { getClasses } from '@pkg/shared';
import { Selected } from '@pkg/icons';
import { Option } from '~/option';
import { Icon } from '~/icon';
import React from 'react';

export const optionCls = getClasses(
  'select-option',
  ['selected-icon'],
  ['selected', 'picked'],
);
export const MenuOption = React.forwardRef<HTMLElement, SelectOptionProps>(
  (props, ref) => {
    const { attrs = {}, children, selected, picked, extra, ...rest } = props;
    return (
      <Option
        {...rest}
        extra={
          (extra || selected) && (
            <>
              {extra}
              {selected && (
                <Icon className={optionCls.__['selected-icon']}>
                  <Selected />
                </Icon>
              )}
            </>
          )
        }
        attrs={{
          ...attrs,
          className: getClassNames(optionCls.root, attrs.className, {
            [optionCls['--'].selected]: selected,
            [optionCls['--'].picked]: picked,
          }),
        }}
        ref={ref}
      >
        {children}
      </Option>
    );
  },
);
