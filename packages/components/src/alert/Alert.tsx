import React, { useState } from 'react';
import type { AlertProps } from './alert.types';
import { getClasses } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { Icon } from '~/icon';
import {
  CircleInfoFill,
  CircleWarningFill,
  CircleCloseFill,
  CircleSuccessFill,
  CircleInfo,
  Close as CloseIcon,
} from '@pkg/icons';
import { Button } from '~/button';
import { CollapseTransition } from '~/collapse-transition';

const cls = getClasses(
  'alert',
  ['icon', 'content', 'title', 'desc', 'close-icon'],
  ['bordered', 'centered'],
);
const defaultProps = {
  type: 'default',
  bordered: false,
  closable: false,
} satisfies Partial<AlertProps>;

const Icons: Record<Required<AlertProps>['type'], React.FC> = {
  default: CircleInfo,
  info: CircleInfoFill,
  warning: CircleWarningFill,
  error: CircleCloseFill,
  success: CircleSuccessFill,
};

export const Alert: React.FC<AlertProps> = React.forwardRef<
  HTMLDivElement,
  AlertProps
>((props, ref) => {
  const { attrs, icon, type, title, bordered, closable, onClose, children } =
    props as RequiredPart<AlertProps, keyof typeof defaultProps>;

  const [visible, setVisible] = useState(true);

  const DefaultIcon = Icons[type];

  const close = () => {
    if (!closable) return;
    setVisible(false);
    onClose?.();
  };

  const Body = (
    <div
      {...attrs}
      ref={ref}
      className={getClassNames(cls.root, attrs?.className, {
        [cls['--'].bordered]: bordered,
        [cls['--'].centered]: title && !children,
        [`${cls.root}--${type}`]: type !== 'default',
      })}>
      {icon !== null && (
        <Icon className={cls.__.icon}>{icon || <DefaultIcon />}</Icon>
      )}
      <div className={cls.__.content}>
        {title && <div className={cls.__.title}>{title}</div>}
        {children && <div className={cls.__.desc}>{children}</div>}
      </div>
      {closable && (
        <Button size="small" plain="text" onClick={close}>
          <Icon className={cls.__['close-icon']}>
            <CloseIcon />
          </Icon>
        </Button>
      )}
    </div>
  );

  if (!closable) return Body;
  return <CollapseTransition>{visible && Body}</CollapseTransition>;
});

Alert.defaultProps = defaultProps;
Alert.displayName = 'Alert';
