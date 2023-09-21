import type { ConvertOptional } from '@tool-pack/types';
import type { InputProps } from '../input.types';
import { Textarea } from './Textarea';
import React from 'react';

interface Props
  extends ConvertOptional<
    Pick<
      Omit<InputProps, 'ref'>,
      | 'placeholder'
      | 'onChange'
      | 'autoSize'
      | 'disabled'
      | 'attrs'
      | 'value'
      | 'type'
      | 'rows'
    >
  > {
  onResize: (size: { height: number; max?: number; min: number }) => void;
  ref: React.Ref<HTMLElement>;
  onFocus: () => void;
  onBlur: () => void;
}

export const InnerInput: React.FC<Props> = React.forwardRef<HTMLElement, Props>(
  (
    {
      placeholder,
      attrs = {},
      autoSize,
      disabled,
      onChange,
      onResize,
      onFocus,
      onBlur,
      value,
      type,
      rows,
    },
    ref,
  ) => {
    if (type === 'textarea')
      return (
        <Textarea
          {...(attrs as any)}
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          placeholder={placeholder}
          onInputResize={onResize}
          onChange={_onChange}
          disabled={disabled}
          autoSize={autoSize}
          onFocus={_onFocus}
          onBlur={_onBlur}
          value={value}
          rows={rows}
        />
      );
    return (
      <input
        {...attrs}
        placeholder={placeholder || attrs.placeholder}
        ref={ref as React.RefObject<HTMLInputElement>}
        type={type || attrs.type || 'text'}
        onChange={_onChange}
        disabled={disabled}
        onFocus={_onFocus}
        onBlur={_onBlur}
        value={value}
      />
    );

    function _onChange(
      e:
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLInputElement>,
    ): void {
      const value = e.target.value;
      onChange!(value);
    }
    function _onFocus(
      e:
        | React.FocusEvent<HTMLTextAreaElement>
        | React.FocusEvent<HTMLInputElement>,
    ): void {
      attrs.onFocus?.(e as any);
      onFocus();
    }
    function _onBlur(
      e:
        | React.FocusEvent<HTMLTextAreaElement>
        | React.FocusEvent<HTMLInputElement>,
    ): void {
      attrs.onBlur?.(e as any);
      onBlur();
    }
  },
);