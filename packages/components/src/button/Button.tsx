import { getSizeClassName, getClasses } from '@pkg/shared';
import { ButtonContext } from '~/button/button.context';
import type { RequiredPart } from '@tool-pack/types';
import type { ButtonProps } from './button.types';
import { getClassNames } from '@tool-pack/basic';
import { useBtnWave, useBtnIcon } from './hooks';
import React, { useContext } from 'react';

const cls = getClasses(
  'button',
  ['icon'],
  [
    'plain-dashed',
    'plain-text',
    'plain',
    'icon-l',
    'icon-r',
    'icon-only',
    'loading',
  ],
);
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

    const [btnWave, activateWave] = useBtnWave(cls.root);
    const btnIcon = useBtnIcon(cls.root, icon, loading);

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
          cls.root,
          className,
          attrs.className,
          `${cls.root}--type-${type}`,
          {
            [`${cls.root}--shape-${shape}`]: shape !== 'default',
            [cls['--']['plain-dashed']]: plain === 'dashed',
            // 默认也要显示，否则 loading 出入场动画会不流畅
            [cls['--']['icon-l']]: !iconOnly && !rightIcon,
            [cls['--']['icon-r']]: !iconOnly && rightIcon,
            [cls['--']['plain-text']]: plain === 'text',
            [cls['--']['plain']]: plain === true,
            [cls['--']['icon-only']]: iconOnly,
            [cls['--']['loading']]: loading,
          },
          getSizeClassName(size),
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
