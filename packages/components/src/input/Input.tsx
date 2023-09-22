import {
  getSizeClassName,
  useForceUpdate,
  useForwardRef,
  getClasses,
  useWatch,
} from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { InnerInput, Suffix } from './components';
import { getClassNames } from '@tool-pack/basic';
import type { InputProps } from './input.types';
import React, { useState, useRef } from 'react';

const cls = getClasses(
  'input',
  ['clear', 'prefix', 'suffix', 'loading', 'icon', 'count', 'switch'],
  ['focus', 'clearable', 'disabled', 'loading', 'textarea', 'autosize'],
);
const defaultProps = {
  showPasswordOn: 'click',
  size: 'medium',
  type: 'text',
  rows: 3,
} satisfies Partial<InputProps>;

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    showPasswordOn,
    rootAttrs = {},
    placeholder,
    attrs = {},
    clearable,
    showCount,
    maxLength,
    countView,
    disabled,
    autoSize,
    onChange,
    loading,
    rootRef,
    prefix,
    suffix,
    status,
    value,
    count,
    type,
    size,
    rows,
  } = props as RequiredPart<InputProps, keyof typeof defaultProps>;

  const forceUpdate = useForceUpdate();
  const valueRef = useRef(value || '');
  const containerRef = useForwardRef(rootRef);
  const [innerType, setInnerType] = useState(type);

  useWatch(value, (v) => {
    valueRef.current = v || '';
  });
  useWatch(type, (v) => {
    setInnerType(v);
  });

  const [focus, setFocus] = useState(false);

  const Count = showCount && (
    <div className={cls.__.count}>{getCountView()}</div>
  );

  return (
    <label
      {...rootAttrs}
      className={getClassNames(
        cls.root,
        rootAttrs.className,
        getSizeClassName(size),
        {
          [cls['--'].textarea]: type === 'textarea',
          [cls['--'].textarea]: type === 'textarea',
          [`${cls.root}--${status}`]: status,
          [cls['--'].clearable]: clearable,
          [cls['--'].disabled]: disabled,
          [cls['--'].autosize]: autoSize,
          [cls['--'].loading]: loading,
          [cls['--'].focus]: focus,
        },
      )}
      ref={containerRef}
    >
      {prefix && <div className={cls.__.prefix}>{prefix}</div>}
      <InnerInput
        placeholder={placeholder || attrs.placeholder}
        onResize={onInputResize}
        value={valueRef.current}
        onChange={_onChange}
        disabled={disabled}
        autoSize={autoSize}
        onFocus={_onFocus}
        type={innerType}
        onBlur={_onBlur}
        attrs={attrs}
        rows={rows}
        ref={ref}
      />
      <Suffix
        showPasswordOn={showPasswordOn}
        setInnerType={setInnerType}
        value={valueRef.current}
        clearable={clearable}
        showCount={showCount}
        innerType={innerType}
        onClear={_onClear}
        loading={loading}
        suffix={suffix}
        countEl={Count}
        type={type}
      />
    </label>
  );

  function getCountView() {
    const wordCount = getWordCount(valueRef.current);
    if (countView) return countView(valueRef.current, wordCount);
    if (!maxLength) return <span>{wordCount}</span>;
    return (
      <span>
        {wordCount} / {maxLength}
      </span>
    );
  }
  function getWordCount(value: string) {
    if (count) return count(value);
    return value.length;
  }
  function onInputResize(size: {
    height: number;
    max?: number;
    min: number;
  }): void {
    const el = containerRef.current;
    if (!el) return;

    const style = getComputedStyle(el);
    const padding = parseInt(style.paddingTop) + parseInt(style.paddingBottom);

    el.style.height = padding + size.height + 'px';
    el.style.minHeight = padding + size.min + 'px';
    if (!size.max) return;
    el.style.maxHeight = padding + size.max + 'px';
  }
  function _onClear(): void {
    const value = '';
    valueRef.current = value;
    onChange?.(value);
    forceUpdate();
  }
  function _onChange(value: string): void {
    if (maxLength && getWordCount(value) > maxLength) return;
    valueRef.current = value;
    onChange?.(value);
    forceUpdate();
  }
  function _onFocus(): void {
    setFocus(true);
  }
  function _onBlur(): void {
    setFocus(false);
  }
});

Input.defaultProps = defaultProps;
Input.displayName = 'Input';
