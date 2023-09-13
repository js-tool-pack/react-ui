import React from 'react';
import { Option } from '~/option';
import { getClasses } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { SelectOptionProps } from '~/select/select.types';
import { Icon } from '~/icon';
import { Selected } from '@pkg/icons';

export const optionCls = getClasses(
  'select-option',
  ['selected-icon'],
  ['selected', 'picked'],
);
export const MenuOption: React.FC<SelectOptionProps> = React.forwardRef<
  HTMLElement,
  SelectOptionProps
>((props, ref) => {
  const { children, selected, picked, extra, attrs = {}, ...rest } = props;
  return (
    <Option
      {...rest}
      ref={ref}
      attrs={{
        ...attrs,
        className: getClassNames(optionCls.root, attrs.className, {
          [optionCls['--'].selected]: selected,
          [optionCls['--'].picked]: picked,
        }),
      }}
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
      }>
      {children}
    </Option>
  );
});
