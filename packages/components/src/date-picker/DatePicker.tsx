import {
  useFollowingState,
  VisibleController,
  getClasses,
  useWatch,
} from '@pkg/shared';
import type {
  DatePickerProps,
  RangeValueType,
  DatePickerFC,
} from './date-picker.types';
import { DatePickerInputBox, DatePickerPanel } from './components';
import { getClassNames, castArray } from '@tool-pack/basic';
import { useLocale } from '~/config-provider/useLocale';
import { Calendar as CalendarIcon } from '@pkg/icons';
import type { RequiredPart } from '@tool-pack/types';
import { transitionCBAdapter } from '~/transition';
import { InputPopover } from '~/input-popover';
import EnUS from '~/date-picker/locale/en-US';
import React, { useRef } from 'react';
import { Divider } from '~/divider';
import { Icon } from '~/icon';

const cls = getClasses('date-picker', ['pop', 'input-box', 'extra'], ['range']);
const defaultProps = {
  disabled: false,
  range: false,
  type: 'date',
} satisfies Partial<DatePickerProps>;

const _DatePicker: React.FC<DatePickerProps> = React.forwardRef<
  HTMLLabelElement,
  DatePickerProps
>((props, ref) => {
  const locale = useLocale('datePicker', EnUS);
  const {
    value: outerValue,
    dateDisabled,
    attrs = {},
    shortcuts,
    dateCell,
    onChange,
    disabled,
    visible,
    format,
    range,
    type,
    icon,
  } = props as RequiredPart<DatePickerProps, keyof typeof defaultProps>;

  const [value, setValue] = useFollowingState(outerValue, valueHandler);
  // 弹窗状态
  const isOpenedRef = useRef(false);
  const visibleControllerRef = useRef<VisibleController>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isConfirmedRef = useRef(false);

  useWatch(visible, (v) => (isOpenedRef.current = v || false), {
    immediate: true,
  });

  const inputBoxFormular = getInputBoxFormular();
  const cl = { [cls['--'].range]: range };

  return (
    <InputPopover
      popoverProps={{
        content: (
          <DatePickerPanel
            confirmText={locale.confirmText}
            dateDisabled={dateDisabled}
            onConfirm={onConfirm}
            shortcuts={shortcuts}
            onChange={_onChange}
            dateCell={dateCell}
            format={format}
            values={value}
            range={range}
            type={type}
          />
        ),
        on: transitionCBAdapter({
          onAfterLeave() {
            if (isConfirmedRef.current) {
              isConfirmedRef.current = false;
              return;
            }
            setValue(valueHandler(outerValue));
          },
        }),
        attrs: { className: getClassNames(cls.__.pop, cl) },
        placement: 'bottom-start',
        widthByTrigger: false,
        visibleControllerRef,
        showArrow: false,
        offset: 2,
      }}
      attrs={{
        ...attrs,
        className: getClassNames(cls.root, attrs.className, cl),
      }}
      onVisibleChange={_onVisibleChange}
      disabled={disabled}
      visible={visible}
      ref={ref}
    >
      {getInputs()}
    </InputPopover>
  );

  function valueHandler(v: typeof outerValue) {
    return castArray(v) as [start?: Date, end?: Date];
  }

  function getInputs(): React.ReactElement {
    function onChange(index: 0 | 1) {
      return (v: Date) => {
        _onChange(index === 0 ? [v, value[1] as Date] : [value[0] as Date, v]);
      };
    }
    const inputIcon = <Icon>{icon || <CalendarIcon />}</Icon>;
    const FC = (index: 0 | 1, placeholder: string) => (
      <DatePickerInputBox
        onChange={onChange(index)}
        placeholder={placeholder}
        format={inputBoxFormular}
        isOpenedRef={isOpenedRef}
        value={value[index]}
        disabled={disabled}
        inputRef={inputRef}
      >
        {!range && inputIcon}
      </DatePickerInputBox>
    );

    if (!range) return FC(0, locale.placeholder);
    return (
      <>
        {FC(0, locale.rangePlaceholder[0])}
        <Divider vertical />
        {FC(1, locale.rangePlaceholder[1])}
        {inputIcon}
      </>
    );
  }
  function getInputBoxFormular(): string {
    if (format) return format;
    const map: Record<typeof type, string> = {
      datetime: 'yyyy-MM-dd hh:mm:ss',
      date: 'yyyy-MM-dd',
      time: 'hh:mm:ss',
      month: 'yyyy-MM',
      year: 'yyyy',
    };
    return map[type];
  }
  function _onVisibleChange(v: boolean): void {
    isOpenedRef.current = v;
    // if (v) inputRef.current?.focus();
  }
  function _onChange(value: [start?: Date, end?: Date]): void {
    setValue(value);
  }
  function onConfirm(): void {
    isConfirmedRef.current = true;
    onChange?.(range ? (value as RangeValueType) : (value[0] as Date));
    visibleControllerRef.current?.hide();
  }
});

_DatePicker.defaultProps = defaultProps;
_DatePicker.displayName = 'DatePicker';

export const DatePicker = _DatePicker as DatePickerFC;
