import type { PopoverProps } from '../popover';

export type TooltipProps = {
  title?: Required<PopoverProps>['content'];
} & Omit<PopoverProps, 'content'>;
