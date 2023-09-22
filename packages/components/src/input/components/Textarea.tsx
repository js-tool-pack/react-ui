import type { ConvertOptional } from '@tool-pack/types';
import React, { useEffect, useRef } from 'react';
import { isBoolean } from '@tool-pack/basic';
import { useForwardRef } from '@pkg/shared';
import { InputProps } from '../input.types';

interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    ConvertOptional<Pick<InputProps, 'autoSize'>> {
  onInputResize: (size: { height: number; max?: number; min: number }) => void;
  ref: React.Ref<HTMLTextAreaElement>;
}

export const Textarea: React.FC<Props> = React.forwardRef<
  HTMLTextAreaElement,
  Props
>(({ onInputResize, autoSize, value, rows, ...rest }, ref) => {
  const auto = {
    // maxRows: Number.MAX_SAFE_INTEGER,
    minRows: Math.max(1, rows || 0),
    ...(!autoSize || isBoolean(autoSize) ? {} : autoSize),
  };

  const inputRef = useForwardRef(ref);
  const isInitRef = useRef(true);

  useEffect(() => {
    if (!autoSize) return;
    if (isInitRef.current) {
      isInitRef.current = false;
      setTimeout(() => emitResize());
      return;
    }
    emitResize();
  }, [value, autoSize]);

  return (
    <textarea {...rest} ref={inputRef} value={value} rows={rows}></textarea>
  );

  function emitResize(): void {
    const el = inputRef.current;
    if (!el) return;

    memoHeightDecor(el, () => onInputResize(calcSize(el)));

    function calcSize(el: HTMLElement): Parameters<typeof onInputResize>[0] {
      const style = getComputedStyle(el);
      const lineHeight = parseInt(style.lineHeight);

      const max =
        auto.maxRows === undefined ? undefined : auto.maxRows * lineHeight;
      const min = auto.minRows * lineHeight;
      const scrollHeight = el.scrollHeight || min;
      const height =
        Math.min(Math.max(min, scrollHeight), max || Number.MAX_SAFE_INTEGER) +
        2;

      return { height, max, min };
    }
    function memoHeightDecor(el: HTMLElement, cb: () => void): void {
      const memoHeight = el.style.height;
      el.style.height = 'auto';
      void el.offsetHeight;

      cb();

      el.style.height = memoHeight;
      void el.offsetHeight;
    }
  }
});
