import React, { useEffect, useRef, useState } from 'react';
import { ButtonProps } from './button.types';
import {
  CLASS_SIZE_LG,
  CLASS_SIZE_M,
  CLASS_SIZE_SM,
  getComponentClass,
} from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';

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
      ...rest
    } = props as RequiredPart<ButtonProps, 'size' | 'type' | 'shape'>;

    const [wave, setWaveActive] = useWave();

    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (disabled) return;
      if (plain !== 'text') setWaveActive(true);
      return onClick?.(e);
    };

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
          },
        )}>
        {children}
        {wave}
      </button>
    );
  },
);

function useWave() {
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

    return handler;
  }, [active]);

  const wave = active && (
    <span
      ref={waveRef}
      className={getClassNames(`${rootClass}__wave`, {
        [`${rootClass}__wave--active`]: active,
      })}></span>
  );

  return [wave, setActive] as const;
}

Button.displayName = 'Button';
Button.defaultProps = {
  size: 'medium',
  type: 'default',
  shape: 'default',
};
