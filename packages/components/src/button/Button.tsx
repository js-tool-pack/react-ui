import React from 'react';
import { ButtonProps } from './button.types';
import {
  CLASS_SIZE_LG,
  CLASS_SIZE_M,
  CLASS_SIZE_SM,
  getComponentClass,
} from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';
import { useBtnIcon, useBtnWave } from './button.hooks';

const rootClass = getComponentClass('button');

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      htmlType,
      onClick,
      plain,
      size,
      type,
      children,
      disabled,
      shape,
      loading,
      icon,
      rightIcon,
      ...rest
    } = props as RequiredPart<ButtonProps, 'size' | 'type' | 'shape'>;

    const [btnWave, activateWave] = useBtnWave(rootClass);
    const btnIcon = useBtnIcon(rootClass, icon, loading);

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (
      e,
    ): void => {
      if (disabled || loading) return;
      if (plain !== 'text') activateWave();
      onClick?.(e);
    };

    const iconOnly = !children && icon;

    return (
      <button
        {...rest}
        disabled={disabled}
        ref={ref}
        type={htmlType}
        onClick={clickHandler}
        className={getClassNames(
          rootClass,
          className,
          `${rootClass}--type-${type}`,
          {
            [CLASS_SIZE_SM]: size === 'small',
            [CLASS_SIZE_M]: size === 'medium',
            [CLASS_SIZE_LG]: size === 'large',
            [`${rootClass}--shape-${shape}`]: shape !== 'default',
            [`${rootClass}--plain`]: plain === true,
            [`${rootClass}--plain-text`]: plain === 'text',
            [`${rootClass}--plain-dashed`]: plain === 'dashed',
            [`${rootClass}--loading`]: loading,
            [`${rootClass}--icon-only`]: iconOnly,
            [`${rootClass}--icon-l`]: !iconOnly && !rightIcon,
            [`${rootClass}--icon-r`]: !iconOnly && rightIcon,
          },
        )}>
        {!rightIcon && btnIcon}
        {children && <span>{children}</span>}
        {rightIcon && btnIcon}
        {btnWave}
      </button>
    );
  },
);

Button.displayName = 'Button';
Button.defaultProps = {
  size: 'medium',
  type: 'default',
  shape: 'default',
};
