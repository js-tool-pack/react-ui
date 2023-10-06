import {
  useEventListenerOnMounted,
  useStateWithTrailClear,
  getSizeClassName,
  useForwardRef,
  getClasses,
} from '@pkg/shared';
import type {
  SelectOptionsItem,
  SelectStaticProps,
  SelectOption,
  SelectProps,
  SelectFC,
} from './select.types';
import {
  pickOptionsByValue,
  isValueChanged,
  filterOptions,
} from '~/select/utils';
import React, { useImperativeHandle, useEffect, useState, useRef } from 'react';
import { TabTrigger, Selection, Menu } from '~/select/components';
import type { RequiredPart } from '@tool-pack/types';
import { filter as rxFilter, fromEvent } from 'rxjs';
import { transitionCBAdapter } from '~/transition';
import { getClassNames } from '@tool-pack/basic';
import { useEsc } from '~/dialog/dialog.hooks';
import { Popover } from '~/popover';
import PropTypes from 'prop-types';

const cls = getClasses(
  'select',
  [],
  ['active', 'selected', 'disabled', 'clearable', 'focus'],
);
const defaultProps = {
  ignoreComposition: true,
  placeholder: 'select',
  widthByTrigger: true,
  placement: 'bottom',
  showArrow: false,
  trigger: 'click',
  multiple: false,
  size: 'medium',
  offset: 2,
} satisfies Partial<SelectStaticProps>;

const _Select: React.FC<SelectStaticProps> = React.forwardRef<
  HTMLDivElement,
  SelectStaticProps
>((props, ref) => {
  const {
    ignoreComposition,
    onVisibleChange,
    controllerRef,
    popoverAttrs,
    maxTagCount,
    placeholder,
    attrs = {},
    filterable,
    clearable,
    showArrow,
    disabled,
    multiple,
    onChange,
    onSearch,
    onSelect,
    loading,
    onClear,
    onFocus,
    options,
    visible,
    filter,
    footer,
    header,
    onBlur,
    remote,
    status,
    empty,
    value,
    icon,
    size,
    ...rest
  } = props as RequiredPart<SelectProps, keyof typeof defaultProps>;

  const rootRef = useForwardRef(ref);
  const isTrailFocusRef = useRef(false);
  const tabTriggerRef = useRef<HTMLInputElement>(null);
  const [opened, setOpened] = useState(false);
  const [focus, setFocus] = useState<boolean>();
  const [show, setShow] = useStateWithTrailClear(visible);
  const [selected, setSelected] = useState<SelectOption[]>([]);
  const [pattern, setPattern] = useState('');

  useImperativeHandle(controllerRef, () => {
    return {
      focus() {
        tabTriggerRef.current?.focus();
      },
      blur() {
        tabTriggerRef.current?.blur();
      },
    };
  });

  // 页面 blur
  useEventListenerOnMounted(
    window,
    'blur',
    close,
    undefined,
    // active,
    false,
  );

  // 单选关闭窗体
  useEffect(() => {
    if (!multiple && opened) closeWithFocus();
    // 多选时选过后清理过滤值
    if (multiple && (filterable || remote)) setPattern('');
  }, [selected]);

  // 回显
  useEffect(() => {
    if (isValueChanged(value, selected)) {
      setSelected(pickOptionsByValue(options, value));
    }
  }, [value]);

  useEffect(() => {
    if (!opened) return;

    // 监听 tab 键
    const sub$ = fromEvent<KeyboardEvent>(window, 'keydown')
      .pipe(rxFilter((e) => e.code === 'Tab'))
      .subscribe(close);

    return () => sub$.unsubscribe();
  }, [opened]);

  useEffect(() => {
    if (focus === undefined) return;
    if (focus) onFocus?.();
    else onBlur?.();
  }, [focus]);

  useEsc(opened, true, closeWithFocus);

  // 过滤选项
  const filteredOptions = getFilteredOptions();

  const popoverOn = transitionCBAdapter({
    onAfterLeave() {
      // 关闭后清理过滤值
      if (!multiple) setPattern('');
      if (isTrailFocusRef.current) {
        tabTriggerRef.current?.focus();
        isTrailFocusRef.current = false;
      } else {
        setFocus(false);
      }
    },
    onBeforeEnter: () => {
      setOpened(true);
      onVisibleChange?.(true);
      setFocus(true);
    },
    onBeforeLeave: () => {
      setOpened(false);
      onVisibleChange?.(false);
    },
  });

  return (
    <Popover
      {...rest}
      content={
        <Menu
          onSelectedChange={onSelectedChange}
          options={filteredOptions}
          multiple={multiple}
          onSelect={onSelect}
          selected={selected}
          active={opened}
          footer={footer}
          header={header}
          empty={empty}
        />
      }
      name="select__dropdown"
      showArrow={showArrow}
      attrs={popoverAttrs}
      disabled={disabled}
      on={popoverOn}
      visible={show}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        {...attrs}
        className={getClassNames(
          cls.root,
          attrs.className,
          getSizeClassName(size),
          {
            [cls['--'].selected]: selected.length,
            [`${cls.root}--${status}`]: status,
            [cls['--'].clearable]: clearable,
            [cls['--'].disabled]: disabled,
            [cls['--'].active]: opened,
            [cls['--'].focus]: focus,
          },
        )}
        onClick={onRootClick}
        ref={rootRef}
      >
        <TabTrigger
          disabled={disabled}
          ref={tabTriggerRef}
          onFocus={_onFocus}
          onBlur={_onBlur}
          opened={opened}
          onOpen={open}
        />
        <Selection
          ignoreComposition={ignoreComposition}
          onSelectedChange={onSelectedChange}
          onPatternChange={onPatternChange}
          maxTagCount={maxTagCount}
          placeholder={placeholder}
          filterable={filterable}
          clearable={clearable}
          disabled={disabled}
          multiple={multiple}
          selected={selected}
          loading={loading}
          onClear={onClear}
          options={options}
          pattern={pattern}
          opened={opened}
          remote={remote}
          icon={icon}
          size={size}
        />
      </div>
    </Popover>
  );

  function _onFocus(): void {
    setFocus(true);
  }
  function _onBlur(): void {
    if (opened || isTrailFocusRef.current) return;
    setFocus(false);
  }
  function onSelectedChange(selected: SelectOption[]): void {
    setSelected(selected);
    if (!onChange) return;
    const selectedValues = selected.map((s) => s.value);
    const value = (multiple ? selectedValues : selectedValues[0]) as Parameters<
      typeof onChange
    >[0];
    onChange(value, selected);
  }
  function getFilteredOptions(): SelectOptionsItem[] {
    // remote 由外部决定选项是什么，对应的回调是 onSearch，避免双重过滤
    if (remote) return options;
    if (!pattern && !filter) return options;
    return filterOptions(options, pattern, filter);
  }
  function onPatternChange(value: string): void {
    setPattern(value);
    if (remote) onSearch?.(value);
  }
  function closeWithFocus(): void {
    isTrailFocusRef.current = true;
    close();
  }
  function close(): void {
    setOpened(false);
    setShow(false);
  }
  function open(): void {
    setOpened(true);
    setShow(true);
  }
  function onRootClick(e: React.MouseEvent<HTMLDivElement>): void {
    attrs.onClick?.(e);
    if (disabled || !opened) return;
    if (filterable || remote) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    isTrailFocusRef.current = true;
  }
});

_Select.propTypes = {
  options: PropTypes.array.isRequired,
};
_Select.defaultProps = defaultProps;
_Select.displayName = 'Select';

export const Select = _Select as SelectFC;
