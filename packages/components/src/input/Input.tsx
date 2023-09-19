import {
  getSizeClassName,
  useForceUpdate,
  useForwardRef,
  getClasses,
  useWatch,
} from '@pkg/shared';
import { CircleCloseFill, Loading } from '@pkg/icons';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { InputProps } from './input.types';
import React, { useState, useRef } from 'react';
import { InnerInput } from './components';
import { Icon } from '~/icon';

const cls = getClasses(
  'input',
  ['clear', 'prefix', 'suffix', 'loading', 'icon'],
  ['focus', 'clearable', 'disabled', 'loading', 'textarea'],
);
const defaultProps = {
  size: 'medium',
  rows: 3,
} satisfies Partial<InputProps>;

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    rootAttrs = {},
    placeholder,
    attrs = {},
    clearable,
    disabled,
    autoSize,
    onChange,
    loading,
    rootRef,
    prefix,
    suffix,
    value,
    type,
    size,
    rows,
  } = props as RequiredPart<InputProps, keyof typeof defaultProps>;

  const forceUpdate = useForceUpdate();
  const valueRef = useRef(value);
  const containerRef = useForwardRef(rootRef);

  useWatch(value, (v) => {
    valueRef.current = v;
  });

  const [focus, setFocus] = useState(false);
  const showClear = valueRef.current && clearable;
  const showSuffix = Boolean(showClear || suffix || loading);

  return (
    <label
      {...rootAttrs}
      className={getClassNames(
        cls.root,
        rootAttrs.className,
        getSizeClassName(size),
        {
          [cls['--'].textarea]: type === 'textarea',
          [cls['--'].clearable]: clearable,
          [cls['--'].disabled]: disabled,
          [cls['--'].loading]: loading,
          [cls['--'].focus]: focus,
        },
      )}
      ref={containerRef}
    >
      {prefix && <div className={cls.__.prefix}>{prefix}</div>}
      <InnerInput
        placeholder={placeholder || attrs.placeholder}
        type={type || attrs.type || 'text'}
        onResize={onInputResize}
        value={valueRef.current}
        onChange={_onChange}
        disabled={disabled}
        autoSize={autoSize}
        onFocus={_onFocus}
        onBlur={_onBlur}
        attrs={attrs}
        rows={rows}
        ref={ref}
      />
      {showSuffix && (
        <div className={cls.__.suffix}>
          {showClear && (
            <Icon
              className={getClassNames(cls.__.icon, cls.__.clear)}
              attrs={{ onClick: _onClear }}
            >
              <CircleCloseFill />
            </Icon>
          )}
          {loading && (
            <Icon
              className={getClassNames(cls.__.icon, cls.__.loading)}
              attrs={{ onClick: _onClear }}
            >
              <Loading />
            </Icon>
          )}
          {suffix}
        </div>
      )}
    </label>
  );

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
