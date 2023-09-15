import {
  Close as CloseIcon,
  CircleWarningFill,
  CircleSuccessFill,
  CircleCloseFill,
  CircleInfoFill,
  CircleInfo,
} from '@pkg/icons';
import { CollapseTransition } from '~/collapse-transition';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { AlertProps } from './alert.types';
import { getClasses } from '@pkg/shared';
import React, { useState } from 'react';
import { Button } from '~/button';
import { Icon } from '~/icon';

const cls = getClasses(
  'alert',
  ['icon', 'content', 'title', 'desc', 'close-btn', 'close-icon'],
  ['bordered', 'centered'],
);
const defaultProps = {
  type: 'primary',
  closable: false,
  bordered: true,
} satisfies Partial<AlertProps>;

const Icons: Record<Required<AlertProps>['type'], React.FC> = {
  warning: CircleWarningFill,
  success: CircleSuccessFill,
  error: CircleCloseFill,
  info: CircleInfoFill,
  primary: CircleInfo,
};

export const Alert: React.FC<AlertProps> = React.forwardRef<
  HTMLDivElement,
  AlertProps
>((props, ref) => {
  const { bordered, closable, children, onClose, attrs, title, icon, type } =
    props as RequiredPart<AlertProps, keyof typeof defaultProps>;

  const [visible, setVisible] = useState(true);
  const DefaultIcon = Icons[type];

  const Body = (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs?.className, {
        [`${cls.root}--${type}`]: type !== 'primary',
        [cls['--'].centered]: title && !children,
        [cls['--'].bordered]: bordered,
      })}
      ref={ref}
    >
      {icon !== null && (
        <Icon className={cls.__.icon}>{icon || <DefaultIcon />}</Icon>
      )}
      <div className={cls.__.content}>
        {title && <div className={cls.__.title}>{title}</div>}
        {children && <div className={cls.__.desc}>{children}</div>}
      </div>
      {closable && (
        <Button
          className={cls.__['close-btn']}
          onClick={close}
          size="small"
          plain="text"
        >
          <Icon className={cls.__['close-icon']}>
            <CloseIcon />
          </Icon>
        </Button>
      )}
    </div>
  );

  if (!closable) return Body;
  return <CollapseTransition>{visible && Body}</CollapseTransition>;

  function close(e: React.MouseEvent<HTMLButtonElement>) {
    if (!closable) return;
    onClose?.(e);
    if (e.isDefaultPrevented()) return;
    setVisible(false);
  }
});

Alert.defaultProps = defaultProps;
Alert.displayName = 'Alert';
