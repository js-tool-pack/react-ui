import React, { useEffect, useState } from 'react';
import type { SwitchProps } from './switch.types';
import { getClasses, getSizeClassName } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { Loading as LoadingIcon } from '@pkg/icons';
import { Icon } from '~/icon';
import { Transition } from '~/transition';

const cls = getClasses(
  'switch',
  ['input', 'handle', 'checked', 'unchecked', 'slider', 'icon'],
  ['loading', 'checked', 'unchecked', 'disabled'],
);
const defaultProps = {
  size: 'medium',
  checked: false,
} satisfies Partial<SwitchProps>;

export const Switch: React.FC<SwitchProps> = React.forwardRef<
  HTMLButtonElement,
  SwitchProps
>((props, ref) => {
  const {
    attrs = {},
    checked,
    onChange,
    checkedChildren,
    uncheckedChildren,
    size,
    disabled,
    loading,
    checkedIcon,
    uncheckedIcon,
  } = props as RequiredPart<SwitchProps, keyof typeof defaultProps>;

  const [active, setActive] = useState(checked);

  useEffect(() => {
    setActive(checked);
  }, [checked]);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    attrs.onClick?.(e);
    if (disabled || loading) return;
    const value = !active;
    setActive(value);
    onChange?.(value);
  };

  const showCheckedIcon: boolean = active && Boolean(checkedIcon);
  const showUncheckedIcon: boolean = !active && Boolean(uncheckedIcon);
  const showIcon: boolean = loading || showCheckedIcon || showUncheckedIcon;

  return (
    <button
      {...attrs}
      ref={ref}
      role={attrs.role || 'switch'}
      disabled={disabled}
      aria-checked={active}
      aria-disabled={disabled}
      onClick={onClick}
      className={getClassNames(
        cls.root,
        getSizeClassName(size),
        attrs.className,
        { [cls['--'].checked]: active },
        { [cls['--'].unchecked]: !active },
        { [cls['--'].disabled]: disabled },
        { [cls['--'].loading]: loading },
      )}>
      <div className={cls.__.handle}>
        <Transition name={cls.root}>
          {showIcon && (
            <Icon key={cls.__.icon} className={cls.__.icon}>
              {loading ? (
                <LoadingIcon />
              ) : showCheckedIcon ? (
                checkedIcon
              ) : showUncheckedIcon ? (
                uncheckedIcon
              ) : null}
            </Icon>
          )}
        </Transition>
      </div>
      <div className={cls.__.slider}>
        <div className={cls.__.checked}>{checkedChildren}</div>
        <div className={cls.__.unchecked}>{uncheckedChildren}</div>
      </div>
    </button>
  );
});

Switch.defaultProps = defaultProps;
Switch.displayName = 'Switch';
