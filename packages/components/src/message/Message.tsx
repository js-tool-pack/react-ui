import React, { useEffect } from 'react';
import { MessageProps } from './message.types';
import { getComponentClass, useForwardRef, useTimeDown } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '../icon';
import {
  CircleCloseFill,
  CircleInfoFill,
  CircleSuccessFill,
  CircleWarningFill,
} from '@pkg/icons';

const rootClass = getComponentClass('message');

const icons: Record<MessageProps['type'], React.ReactElement> = {
  success: <CircleSuccessFill />,
  info: <CircleInfoFill />,
  warning: <CircleWarningFill />,
  danger: <CircleCloseFill />,
};

export const Message: React.FC<MessageProps> = React.forwardRef<
  HTMLDivElement,
  MessageProps
>((props, ref) => {
  const { className, children, type, duration, onLeave, ...rest } = props;
  const [time, stop] = useTimeDown(duration as number);
  const rootRef = useForwardRef(ref);

  useEffect(() => {
    if (time <= 0) {
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={getClassNames(rootClass, className)}>
      <Icon size="1.2em" color={`var(--t-color-${type})`}>
        {icons[type]}
      </Icon>
      {children} --- {time}
    </div>
  );
});

Message.defaultProps = {
  duration: 3000,
};
