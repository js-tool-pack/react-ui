import {
  CircleSuccessFill,
  CircleWarningFill,
  CircleCloseFill,
  CircleInfoFill,
  Close,
} from '@pkg/icons';
import { getComponentClass, useForwardRef, useTimeDown } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import type { MessageProps } from './message.types';
import React, { useEffect, useRef } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { Button } from '~/button';
import { Icon } from '~/icon';

const rootClass = getComponentClass('message');

const icons: Record<MessageProps['type'], React.FC> = {
  success: CircleSuccessFill,
  warning: CircleWarningFill,
  error: CircleCloseFill,
  info: CircleInfoFill,
};

const defaultProps = {
  duration: 3000,
} satisfies Partial<MessageProps>;

export const Message: React.FC<MessageProps> = React.forwardRef<
  HTMLDivElement,
  MessageProps
>((props, ref) => {
  const {
    attrs = {},
    hoverKeep,
    showClose,
    children,
    duration,
    onLeave,
    type,
    icon,
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
      className={getClassNames(
        rootClass,
        attrs.className,
        `${rootClass}--${type}`,
      )}
      onMouseEnter={hoverKeep ? onMouseEnter : undefined}
      onMouseLeave={hoverKeep ? onMouseLeave : undefined}
      ref={rootRef}
    >
      <div className={rootClass + '__icon-wrapper'}>
        {
          // 有自定义icon显示自定义icon，未传则显示默认icon，为null则不显示icon
          icon !== null && <Icon>{icon || <DefaultIcon />}</Icon>
        }
      </div>
      {children}
      {showClose && (
        <Button onClick={onLeave} size="small" plain="text">
          <Icon size="0.8em">
            <Close />
          </Icon>
        </Button>
      )}
    </div>
  );
});

Message.defaultProps = defaultProps;
