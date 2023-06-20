import React, { useEffect } from 'react';
import type { MessageProps } from './message.types';
import type { RequiredPart } from '@tool-pack/types';
import { getComponentClass, useForwardRef, useTimeDown } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '../icon';
import {
  CircleCloseFill,
  CircleInfoFill,
  CircleSuccessFill,
  CircleWarningFill,
  Close,
} from '@pkg/icons';
import { Button } from '../button';

const rootClass = getComponentClass('message');

const icons: Record<MessageProps['type'], React.ReactElement> = {
  success: <CircleSuccessFill />,
  info: <CircleInfoFill />,
  warning: <CircleWarningFill />,
  error: <CircleCloseFill />,
};

export const Message: React.FC<MessageProps> = React.forwardRef<
  HTMLDivElement,
  MessageProps
>((props, ref) => {
  const {
    className,
    children,
    type,
    icon,
    duration,
    hoverKeep,
    onLeave,
    showClose,
    ...rest
  } = props as RequiredPart<MessageProps, 'duration'>;
  const [time, stop] = useTimeDown(duration);
  const rootRef = useForwardRef(ref);

  useEffect(() => {
    if (duration > 0 && time <= 0) {
      onLeave?.();
    }
  }, [time, onLeave]);

  const onMouseEnter = () => {
    stop(true);
  };
  const onMouseLeave = () => {
    stop(false);
  };

  return (
    <div
      {...rest}
      ref={rootRef}
      onMouseEnter={hoverKeep ? onMouseEnter : undefined}
      onMouseLeave={hoverKeep ? onMouseLeave : undefined}
      className={getClassNames(rootClass, className, `${rootClass}--${type}`)}>
      <div className={rootClass + '__icon-wrapper'}>
        {
          // 有自定义icon显示自定义icon，未传则显示默认icon，为null则不显示icon
          icon !== null && (icon || <Icon>{icons[type]}</Icon>)
        }
      </div>
      {children}
      {showClose && (
        <Button size="small" plain="text" onClick={onLeave}>
          <Icon>
            <Close />
          </Icon>
        </Button>
      )}
    </div>
  );
});

Message.defaultProps = {
  duration: 3000,
};
