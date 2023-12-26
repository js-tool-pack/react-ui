import type { InputSkinProps } from '~/input/components';
import type { PopoverProps } from '~/popover';
import React from 'react';

export interface InputPopoverProps
  extends InputSkinProps,
    Pick<PopoverProps, 'onVisibleChange' | 'visible'> {
  tabTriggerRef?: React.Ref<HTMLInputElement>;
  popoverProps?: Partial<PopoverProps>;
  onFocus?: () => void;
  onBlur?: () => void;
}
