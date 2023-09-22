import { useForceUpdate, useForwardRef, useNextEffect } from '@pkg/shared';
import React, { useEffect } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: React.Ref<HTMLInputElement>;
}

export const Input: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  ({ onFocus, onBlur, value, type, ...rest }, ref) => {
    const inputRef = useForwardRef(ref);
    const forceUpdate = useForceUpdate();
    const nextEffect = useNextEffect();

    useEffect(() => {
      removeValueAttr();
    }, [value, type]);

    return (
      <input
        {...rest}
        onFocus={_onFocus}
        onBlur={_onBlur}
        ref={inputRef}
        value={value}
        type={type}
      />
    );

    function _onFocus(e: React.FocusEvent<HTMLInputElement>): void {
      onFocus?.(e);
      removeValueAttr();
    }
    function _onBlur(e: React.FocusEvent<HTMLInputElement>): void {
      onBlur?.(e);
      removeValueAttr();
    }
    function removeValueAttr(): void {
      if (type !== 'password') return;
      const input = inputRef.current;
      if (!input) return;
      nextEffect(() => input.removeAttribute('value'));
      forceUpdate();
    }
  },
);
