import React, { useEffect, useRef } from 'react';
import type { MessageProps } from './message.types';
import type { RequiredPart } from '@tool-pack/types';
import { getComponentClass, useForwardRef, useTimeDown } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '~/icon';
import {
  CircleCloseFill,
  CircleInfoFill,
  CircleSuccessFill,
  CircleWarningFill,
  Close,
} from '@pkg/icons';
import { Button } from '~/button';

const rootClass = getComponentClass('message');

const icons: Record<MessageProps['type'], React.FC> = {
  success: CircleSuccessFill,
  info: CircleInfoFill,
  warning: CircleWarningFill,
  error: CircleCloseFill,
};

const defaultProps = {
  duration: 3000,
} satisfies Partial<MessageProps>;

export const Message: React.FC<MessageProps> = React.forwardRef<
  HTMLDivElement,
  MessageProps
>((props, ref) => {
  const {
    children,
    type,
    icon,
    duration,
    hoverKeep,
    onLeave,
    showClose,
    attrs = {},
  } = props as RequiredPart<MessageProps, keyof typeof defaultProps>;

  const [time, stop] = useTimeDown(duration);
  const rootRef = useForwardRef(ref);

  const isTimeoutRef = useRef(false);

  useEffect(() => {
    if (isTimeoutRef.current) return;
    if (duration > 0 && time <= 0) {
      onLeave?.();
      isTimeoutRef.current = true;
    }
  }, [time, onLeave]);

  const onMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    attrs.onMouseEnter?.(e);
    stop(true);
  };
  const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    attrs.onMouseLeave?.(e);
    stop(false);
  };

  const DefaultIcon = icons[type];
  return (
    <div
      {...attrs}
      ref={rootRef}
      onMouseEnter={hoverKeep ? onMouseEnter : undefined}
      onMouseLeave={hoverKeep ? onMouseLeave : undefined}
      className={getClassNames(
        rootClass,
        attrs.className,
        `${rootClass}--${type}`,
      )}>
      <div className={rootClass + '__icon-wrapper'}>
        {
          // 有自定义icon显示自定义icon，未传则显示默认icon，为null则不显示icon
          icon !== null && <Icon>{icon || <DefaultIcon />}</Icon>
        }
      </div>
      {children}
      {showClose && (
        <Button size="small" plain="text" onClick={onLeave}>
          <Icon size="0.8em">
            <Close />
          </Icon>
        </Button>
      )}
    </div>
  );
});

Message.defaultProps = defaultProps;
