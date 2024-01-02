import {
  CircleCloseFill as CircleCloseFillIcon,
  Loading as LoadingIcon,
  Down as DownIcon,
} from '@pkg/icons';
import type { ConvertOptional, RequiredPart } from '@tool-pack/types';
import { SelectionFilter, SelectionTags } from '~/select/components';
import type { SelectStaticProps, SelectOption } from '~/select';
import { getClassNames, isFunction } from '@tool-pack/basic';
import { getSizeClassName, getClasses } from '@pkg/shared';
import React, { useEffect, useState } from 'react';
import { Icon } from '~/icon';

interface Props
  extends ConvertOptional<
    RequiredPart<
      Pick<
        SelectStaticProps,
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
  onSelectedChange: (selected: SelectOption[]) => void;
  onPatternChange: (value: string) => void;
  selected: SelectOption[];
  opened: boolean;
  pattern: string;
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
    clearable,
    disabled,
    multiple,
    selected,
    pattern,
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
            onPatternChange={onPatternChange}
            onDelete={handleInputDelete}
            inputValue={inputValue}
            opened={opened}
          />
        )}
      </div>
      <div className={cls.__.suffix}>
        <Icon className={cls.__.icon}>
          {icon || (loading ? <LoadingIcon /> : <DownIcon />)}
        </Icon>
        {clearable && selected.length > 0 && (
          <Icon attrs={{ onClickCapture: _onClear }} className={cls.__.clear}>
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
