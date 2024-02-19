import type { InnerCommonProps, DatePickerProps } from '../date-picker.types';
import React, { RefObject, useEffect, useState, Ref } from 'react';
import { parseFormattedDate, formatDate } from '@tool-pack/basic';
import { getClasses } from '@pkg/shared';

interface Props
  extends Required<Pick<DatePickerProps, 'disabled' | 'format'>>,
    InnerCommonProps {
  inputRef: Ref<HTMLInputElement>;
  isOpenedRef: RefObject<boolean>;
  children?: React.ReactNode;
  placeholder: string;
}

const cls = getClasses('date-picker-input-box', [], []);

export const DatePickerInputBox: React.FC<Props> = (props) => {
  const {
    value: date,
    isOpenedRef,
    placeholder,
    onChange,
    children,
    disabled,
    inputRef,
    format,
  } = props;

  const [value, setValue] = useState<string>(() => stringifyDate());

  useEffect(() => {
    setValue(stringifyDate());
  }, [date, format]);

  return (
    <div className={cls.root}>
      <input
        onClickCapture={handleInputClick}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        ref={inputRef}
        value={value}
        tabIndex={-1}
      />
      {children}
    </div>
  );

  function stringifyDate(): string {
    return date ? formatDate(date, format) : '';
  }

  function handleInputClick(e: React.MouseEvent<HTMLInputElement>): void {
    if (isOpenedRef.current) e.stopPropagation();
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setValue(value);
    if (value.length !== format.length) return;
    const date = parseFormattedDate(value, format);
    onChange(date);
  }
};
