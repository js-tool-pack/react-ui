import {
  mergeReactDefaultProps,
  getSizeClassName,
  getClasses,
} from '@pkg/shared';
import { Loading as LoadingIcon } from '@pkg/icons';
import React, { useEffect, useState } from 'react';
import type { SwitchProps } from './switch.types';
import { getClassNames } from '@tool-pack/basic';
import { Transition } from '~/transition';
import { Icon } from '~/icon';

const cls = getClasses(
  'switch',
  ['input', 'handle', 'checked', 'unchecked', 'slider', 'icon'],
  ['loading', 'checked', 'unchecked', 'disabled'],
);
const defaultProps = {
  size: 'medium',
  checked: false,
} satisfies Partial<SwitchProps>;

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    const {
      uncheckedChildren,
      checkedChildren,
      uncheckedIcon,
      checkedIcon,
      attrs = {},
      onChange,
      disabled,
      checked,
      loading,
      size,
    } = mergeReactDefaultProps(props, defaultProps);
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
        className={getClassNames(
          cls.root,
          getSizeClassName(size),
          attrs.className,
          { [cls['--'].checked]: active },
          { [cls['--'].unchecked]: !active },
          { [cls['--'].disabled]: disabled },
          { [cls['--'].loading]: loading },
        )}
        role={attrs.role || 'switch'}
        aria-disabled={disabled}
        aria-checked={active}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
      >
        <div className={cls.__.handle}>
          <Transition name={cls.root}>
            {showIcon && (
              <Icon className={cls.__.icon} key={cls.__.icon}>
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
  },
);

Switch.displayName = 'Switch';
