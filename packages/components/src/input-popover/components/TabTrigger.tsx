import { getComponentClass } from '@pkg/shared';
import React from 'react';

interface Props {
  ref?: React.Ref<HTMLInputElement>;
  onFocus: () => void;
  disabled?: boolean;
  onBlur: () => void;
  onOpen: () => void;
  opened: boolean;
}

const cls = getComponentClass('input-popover-tab-trigger');

export const TabTrigger = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { disabled, onFocus, opened, onOpen, onBlur } = props;

    return (
      <input
        tabIndex={opened || disabled ? -1 : 0}
        onKeyDown={_onKeyDown}
        onFocus={onFocus}
        className={cls}
        onBlur={onBlur}
        ref={ref}
      />
    );

    function _onKeyDown(e: React.KeyboardEvent) {
      if (opened || e.code !== 'Enter') return;
      onOpen();
      e.stopPropagation();
    }
  },
);
