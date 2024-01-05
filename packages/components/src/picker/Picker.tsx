import type { PickerProps, PickerFC } from './picker.types';
import type { RequiredPart } from '@tool-pack/types';
import { PickerPanel } from '~/picker/components';
import { getClassNames } from '@tool-pack/basic';
import { InputPopover } from '~/input-popover';
import { getClasses } from '@pkg/shared';
import React from 'react';

const cls = getClasses('picker', ['label', 'pop'], []);
const defaultProps = {
  format: (v) => v.join(','),
} satisfies Partial<PickerProps>;

export const _Picker: React.FC<PickerProps> = React.forwardRef<
  HTMLDivElement,
  PickerProps
>((props, ref) => {
  const {
    inputPopoverProps = {},
    evenlyDivided,
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
              evenlyDivided={evenlyDivided}
              onChange={onChange}
              attrs={panelAttrs}
              options={options}
              value={value}
            />
          ),
          attrs: {
            ...inputPopoverProps.popoverProps?.attrs,
            className: getClassNames(
              cls.__.pop,
              inputPopoverProps.popoverProps?.attrs?.className,
            ),
          },
        }}
      >
        <span className={cls.__.label}>{format(value || [])}</span>
      </InputPopover>
    </div>
  );
});

_Picker.defaultProps = defaultProps;
_Picker.displayName = 'Picker';

export const Picker = _Picker as PickerFC;
