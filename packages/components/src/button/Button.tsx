import {
  getComponentClass,
  CLASS_SIZE_LG,
  CLASS_SIZE_SM,
  CLASS_SIZE_M,
} from '@pkg/shared';
import { ButtonContext } from '~/button/button.context';
import { useBtnIcon, useBtnWave } from './button.hooks';
import type { RequiredPart } from '@tool-pack/types';
import type { ButtonProps } from './button.types';
import { getClassNames } from '@tool-pack/basic';
import React, { useContext } from 'react';

const rootClass = getComponentClass('button');
const defaultProps = {
  shape: 'default',
  type: 'default',
  size: 'medium',
} satisfies Partial<ButtonProps>;
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const context = useContext(ButtonContext);
    const attrs = {
      ...context.attrs,
      ...props.attrs,
      style: { ...context.style, ...props.attrs?.style, ...props.style },
    } as Exclude<ButtonProps['attrs'], undefined>;
    const {
      children = attrs.children,
      disabled = attrs.disabled,
      htmlType = attrs.type,
      className,
      rightIcon,
      onClick,
      loading,
      plain,
      shape,
      size,
      type,
      icon,
    } = { ...defaultProps, ...context, ...props } as RequiredPart<
      ButtonProps,
      keyof typeof defaultProps
    >;

    const [btnWave, activateWave] = useBtnWave(rootClass);
    const btnIcon = useBtnIcon(rootClass, icon, loading);

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (
      e,
    ): void => {
      if (disabled || loading) return;
      if (plain !== 'text') activateWave();
      onClick?.(e);
      attrs.onClick?.(e);
    };

    const iconOnly = !children && icon;

    return (
      <button
        {...attrs}
        className={getClassNames(
          rootClass,
          className,
          attrs.className,
          `${rootClass}--type-${type}`,
          {
            [`${rootClass}--shape-${shape}`]: shape !== 'default',
            [`${rootClass}--plain-dashed`]: plain === 'dashed',
            // 默认也要显示，否则 loading 出入场动画会不流畅
            [`${rootClass}--icon-l`]: !iconOnly && !rightIcon,
            [`${rootClass}--icon-r`]: !iconOnly && rightIcon,
            [`${rootClass}--plain-text`]: plain === 'text',
            [`${rootClass}--plain`]: plain === true,
            [`${rootClass}--icon-only`]: iconOnly,
            [`${rootClass}--loading`]: loading,
            [CLASS_SIZE_SM]: size === 'small',
            [CLASS_SIZE_M]: size === 'medium',
            [CLASS_SIZE_LG]: size === 'large',
          },
        )}
        onClick={clickHandler}
        disabled={disabled}
        type={htmlType}
        ref={ref}
      >
        {!rightIcon && btnIcon}
        {children && <span>{children}</span>}
        {rightIcon && btnIcon}
        {btnWave}
      </button>
    );
  },
);

Button.displayName = 'Button';
// 按钮组会获取到该默认值，所以移动到组件内部的解构默认值
// Button.defaultProps = defaultProps;
