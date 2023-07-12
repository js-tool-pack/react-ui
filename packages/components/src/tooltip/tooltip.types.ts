import type { PopoverProps } from '../popover';

export type TooltipProps = Omit<PopoverProps, 'content'> & {
  title?: Required<PopoverProps>['content'];
};
