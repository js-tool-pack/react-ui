import { ConvertOptional } from '@tool-pack/types';
import React, { useEffect, useRef } from 'react';
import { getClasses } from '@pkg/shared';
import { SelectProps } from '~/select';

interface Props
  extends ConvertOptional<Pick<SelectProps, 'ignoreComposition'>> {
  onInputValueChange: (value: string) => void;
  onPatternChange: (value: string) => void;
  onDelete: () => void;
  inputValue: string;
  opened: boolean;
}

const cls = getClasses('select-filter', ['input', 'mirror'], []);

export const SelectionFilter: React.FC<Props> = (props) => {
  const {
    onInputValueChange,
    ignoreComposition,
    onPatternChange,
    inputValue,
    onDelete,
    opened,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const mirrorRef = useRef<HTMLElement>(null);
  const isCompositionRef = useRef(false);

  // 给 input 续 focus
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    if (opened) input.focus();
    else input.blur();
  }, [opened]);

  // 复制镜像宽度给 input
  useEffect(() => {
    const input = inputRef.current;
    const mirror = mirrorRef.current;
    if (!input || !mirror) return;
    input.style.width = mirror.offsetWidth + 'px';
  }, [inputValue]);

  return (
    <div className={cls.root}>
      <input
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        onKeyDown={onInputKeyDown}
        className={cls.__.input}
        onBlur={onInputBlur}
        onChange={onChange}
        value={inputValue}
        ref={inputRef}
        tabIndex={-1}
      />
      <span className={cls.__.mirror} ref={mirrorRef}>
        {inputValue}
      </span>
    </div>
  );

  function onCompositionStart() {
    isCompositionRef.current = true;
  }
  function onCompositionEnd(e: React.CompositionEvent<HTMLInputElement>) {
    isCompositionRef.current = false;
    onChange(e as unknown as React.ChangeEvent<HTMLInputElement>);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    onInputValueChange(value);
    if (isCompositionRef.current && ignoreComposition) return;
    onPatternChange(value);
  }
  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (isCompositionRef.current && e.code === 'Enter') {
      e.stopPropagation();
      return;
    }
    if (e.code === 'Backspace' && !inputValue) {
      onDelete();
    }
  }
  function onInputBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (!opened) return;
    // safari 需要异步设置，否则会丢失光标
    setTimeout(() => e.target.focus());
  }
};
