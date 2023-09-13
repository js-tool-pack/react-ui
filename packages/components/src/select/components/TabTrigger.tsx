import React from 'react';
import { getComponentClass } from '@pkg/shared';

interface Props {
  ref?: React.Ref<HTMLInputElement>;
  onFocus: () => void;
  disabled?: boolean;
  onBlur: () => void;
  onOpen: () => void;
  opened: boolean;
}

const cls = getComponentClass('select-tab-trigger');

export const TabTrigger: React.FC<Props> = React.forwardRef<
  HTMLInputElement,
  Props
>((props, ref) => {
  const { disabled, opened, onOpen, onFocus, onBlur } = props;

  return (
    <input
      className={cls}
      tabIndex={opened || disabled ? -1 : 0}
      onKeyDown={_onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
    />
  );

  function _onKeyDown(e: React.KeyboardEvent) {
    if (opened || e.code !== 'Enter') return;
    onOpen();
    e.stopPropagation();
  }
});
