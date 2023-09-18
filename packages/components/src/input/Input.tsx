import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { InputProps } from './input.types';
import { getClasses } from '@pkg/shared';
import React from 'react';

const cls = getClasses('input', [], []);
const defaultProps = {} satisfies Partial<InputProps>;

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    rootAttrs = {},
    attrs = {},
    onChange,
    rootRef,
    value,
    type,
  } = props as RequiredPart<InputProps, keyof typeof defaultProps>;

  return (
    <label
      {...rootAttrs}
      className={getClassNames(cls.root, rootAttrs.className)}
      ref={rootRef}
    >
      <input
        {...attrs}
        type={type || attrs.type || 'text'}
        onChange={_onChange}
        value={value}
        ref={ref}
      />
    </label>
  );

  function _onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    onChange?.(value);
  }
});

Input.defaultProps = defaultProps;
Input.displayName = 'Input';
