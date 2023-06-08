import React, { useEffect, useRef, useState } from 'react';
import { ButtonProps } from './button.types';
import {
  CLASS_SIZE_LG,
  CLASS_SIZE_M,
  CLASS_SIZE_SM,
  getComponentClass,
} from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import './Button.module.scss';

const cClass = getComponentClass('button');

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
      shape,
      ...rest
    } = props;

    const [active, setActive] = useState(false);
    const waveRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const el = waveRef.current;
      if (!active || !el) return;
      const cancel = () => el.removeEventListener('animationend', handler);
      const handler = () => {
        setActive(false);
        cancel();
      };
      el.addEventListener('animationend', handler);

      return cancel;
    }, [active]);

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (props.disabled) return;
      if (plain !== 'text') setActive(true);
      return onClick?.(e);
    };

    return (
      <button
        {...rest}
        ref={ref}
        type={htmlType}
        onClick={clickHandler}
        className={getClassNames(cClass, `type-${type}`, {
          [CLASS_SIZE_SM]: size === 'small',
          [CLASS_SIZE_M]: size === 'medium',
          [CLASS_SIZE_LG]: size === 'large',
          [`shape-round`]: shape === 'round',
          [`shape-circle`]: shape === 'circle',
          [`plain`]: plain === true,
          [`plain-text`]: plain === 'text',
          [`plain-dashed`]: plain === 'dashed',
          [className as string]: className,
        })}>
        {children}
        <span
          ref={waveRef}
          className={getClassNames('btn-wave', {
            'btn-wave-active': active,
          })}></span>
      </button>
    );
  },
);

Button.displayName = 'Button';
Button.defaultProps = {
  size: 'medium',
  type: 'default',
};
