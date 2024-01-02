import type {
  SelectOptionsItem,
  SelectStaticProps,
  SelectOption,
  SelectFC,
} from './select.types';
import React, {
  useImperativeHandle,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import {
  pickOptionsByValue,
  isValueChanged,
  filterOptions,
} from '~/select/utils';
import { useStateWithTrailClear, useForwardRef, getClasses } from '@pkg/shared';
import { Selection, Menu } from '~/select/components';
import type { RequiredPart } from '@tool-pack/types';
import { transitionCBAdapter } from '~/transition';
import { getClassNames } from '@tool-pack/basic';
import { InputPopover } from '@pkg/components';
import PropTypes from 'prop-types';

const cls = getClasses('select', [], ['selected', 'clearable']);
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
  HTMLLabelElement,
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
  } = props as RequiredPart<SelectStaticProps, keyof typeof defaultProps>;

  const rootRef = useForwardRef(ref);
  const tabTriggerRef = useRef<HTMLInputElement>(null);
  const [opened, setOpened] = useState(false);
  const [focused, setFocused] = useState<boolean>();
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

  // 过滤选项
  const filteredOptions = useMemo((): SelectOptionsItem[] => {
    // remote 由外部决定选项是什么，对应的回调是 onSearch，避免双重过滤
    if (remote) return options;
    if (!pattern && !filter) return options;
    return filterOptions(options, pattern, filter);
  }, [filter, options, pattern, remote]);

  const popoverOn = transitionCBAdapter({
    onAfterLeave() {
      // 关闭后清理过滤值
      if (!multiple) setPattern('');
    },
  });

  return (
    <InputPopover
      popoverProps={{
        content: (
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
        ),
        name: 'select__dropdown',
        showArrow: showArrow,
        attrs: popoverAttrs,
        disabled: disabled,
        on: popoverOn,
      }}
      attrs={{
        ...attrs,
        className: getClassNames(cls.root, attrs.className, {
          [cls['--'].selected]: selected.length,
          [cls['--'].clearable]: clearable,
        }),
        onClick: onRootClick,
      }}
      onVisibleChange={_onVisibleChange}
      tabTriggerRef={tabTriggerRef}
      active={opened || focused}
      disabled={disabled}
      onFocus={_onFocus}
      onBlur={_onBlur}
      status={status}
      visible={show}
      ref={rootRef}
      size={size}
    >
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
    </InputPopover>
  );

  function _onVisibleChange(v: boolean) {
    setOpened(v);
    onVisibleChange?.(v);
  }
  function _onFocus(): void {
    setFocused(true);
    onFocus?.();
  }
  function _onBlur(): void {
    // if (opened) return;
    setFocused(false);
    onBlur?.();
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
  function onPatternChange(value: string): void {
    setPattern(value);
    if (remote) onSearch?.(value);
  }
  function closeWithFocus(): void {
    setShow(false);
  }
  function onRootClick(e: React.MouseEvent<HTMLLabelElement>): void {
    attrs.onClick?.(e);
    if (disabled || !opened) return;
    if (filterable || remote) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
  }
});

_Select.propTypes = {
  options: PropTypes.array.isRequired,
};
_Select.defaultProps = defaultProps;
_Select.displayName = 'Select';

export const Select = _Select as SelectFC;
