import type { RequiredPart } from '@tool-pack/types';
import type { PickerProps } from './picker.types';
import { PickerPanel } from '~/picker/components';
import { getClassNames } from '@tool-pack/basic';
import { InputPopover } from '~/input-popover';
import { getClasses } from '@pkg/shared';
import React from 'react';

const cls = getClasses('picker', ['label'], []);
const defaultProps = {
  format: (v) => v.join(','),
} satisfies Partial<PickerProps>;

export const Picker: React.FC<PickerProps> = React.forwardRef<
  HTMLDivElement,
  PickerProps
>((props, ref) => {
  const {
    inputPopoverProps = {},
    options = [],
    panelAttrs,
    attrs = {},
    onChange,
    format,
    value,
  } = props as RequiredPart<PickerProps, keyof typeof defaultProps>;

  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      <InputPopover
        {...inputPopoverProps}
        popoverProps={{
          ...inputPopoverProps.popoverProps,
          content: (
            <PickerPanel
              onChange={onChange}
              attrs={panelAttrs}
              options={options}
              value={value}
            />
          ),
        }}
      >
        <span className={cls.__.label}>{format(value || [])}</span>
      </InputPopover>
    </div>
  );
});

Picker.defaultProps = defaultProps;
Picker.displayName = 'Picker';
