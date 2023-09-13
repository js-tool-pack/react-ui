import React, { useEffect, useState } from 'react';
import { getClasses, getSizeClassName } from '@pkg/shared';
import type { SelectOption, SelectProps } from '~/select';
import { getClassNames, isFunction } from '@tool-pack/basic';
import {
  Down as DownIcon,
  CircleCloseFill as CircleCloseFillIcon,
  Loading as LoadingIcon,
} from '@pkg/icons';
import { Icon } from '~/icon';
import { SelectionTags, SelectionFilter } from '~/select/components';
import type { ConvertOptional, RequiredPart } from '@tool-pack/types';

interface Props
  extends ConvertOptional<
    RequiredPart<
      Pick<
        SelectProps,
        | 'ignoreComposition'
        | 'maxTagCount'
        | 'placeholder'
        | 'filterable'
        | 'clearable'
        | 'disabled'
        | 'multiple'
        | 'onClear'
        | 'loading'
        | 'options'
        | 'remote'
        | 'icon'
        | 'size'
      >,
      'size'
    >
  > {
  selected: SelectOption[];
  onSelectedChange: (selected: SelectOption[]) => void;
  opened: boolean;
  pattern: string;
  onPatternChange: (value: string) => void;
}

const cls = getClasses(
  'select-selection',
  ['placeholder', 'selected', 'suffix', 'icon', 'clear', 'label'],
  [],
);
export const Selection: React.FC<Props> = React.forwardRef<
  HTMLDivElement,
  Props
>((props, ref) => {
  const {
    ignoreComposition,
    onSelectedChange,
    onPatternChange,
    maxTagCount,
    placeholder,
    filterable,
    pattern,
    clearable,
    disabled,
    multiple,
    selected,
    loading,
    onClear,
    opened,
    remote,
    icon,
    size,
  } = props;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(pattern);
  }, [pattern]);

  const showFilter = (filterable || remote) && opened;

  return (
    <div className={getClassNames(cls.root, getSizeClassName(size))} ref={ref}>
      <div className={cls.__.selected}>
        {getSelectedView()}
        {showFilter && (
          <SelectionFilter
            ignoreComposition={ignoreComposition}
            onInputValueChange={setInputValue}
            inputValue={inputValue}
            onDelete={handleInputDelete}
            onPatternChange={onPatternChange}
            opened={opened}
          />
        )}
      </div>
      <div className={cls.__.suffix}>
        <Icon className={cls.__.icon}>
          {icon || (loading ? <LoadingIcon /> : <DownIcon />)}
        </Icon>
        {clearable && selected.length > 0 && (
          <Icon className={cls.__.clear} attrs={{ onClickCapture: _onClear }}>
            <CircleCloseFillIcon />
          </Icon>
        )}
      </div>
    </div>
  );

  function handleInputDelete(): void {
    if (!selected.length || !multiple) return;
    selected.length--;
    onSelectedChange(selected.slice());
  }

  function _onClear(e: React.MouseEvent<HTMLElement>): void {
    onClear?.();
    e.stopPropagation();
    onSelectedChange([]);
  }

  function getSelectedView(): React.ReactNode {
    if (!selected.length) {
      if (inputValue) return null;
      return <div className={cls.__.placeholder}>{placeholder}</div>;
    }

    if (multiple) {
      return (
        <SelectionTags
          onSelectedChange={onSelectedChange}
          maxTagCount={maxTagCount}
          disabled={disabled}
          selected={selected}
          active={opened}
          size={size}
        />
      );
    }

    if (showFilter && inputValue) return null;

    const selectedOption = selected[0]!;
    const { label } = selectedOption;
    const className = showFilter ? cls.__.placeholder : cls.__.label;
    return (
      <div className={className}>
        {isFunction(label) ? label(true, selectedOption) : label}
      </div>
    );
  }
});
