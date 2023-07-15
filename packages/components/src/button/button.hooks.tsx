import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { CollapseTransition } from '../collapse-transition';
import { Icon } from '../icon';
import { Loading as LoadingIcon } from '@pkg/icons';
import type { ButtonProps } from './button.types';

export function useBtnWave(
  rootClass: string,
): readonly [boolean | React.ReactElement, () => void] {
  const [active, setActive] = useState(false);
  const waveRef = useRef<HTMLElement>(null);
  const activationTime = useRef(0);

  const activateWave = () => {
    if (active) {
      if (Date.now() - activationTime.current > 1500) setActive(false);
      return;
    }
    activationTime.current = Date.now();
    setActive(true);
  };

  useEffect(() => {
    const el = waveRef.current;
    if (!active || !el) return;
    const cancel = () => {
      el.removeEventListener('animationend', handler);
      el.removeEventListener('animationcancel', handler);
    };
    const handler = () => {
      setActive(false);
      cancel();
    };

    if (active && el) {
      el.addEventListener('animationend', handler);
      el.addEventListener('animationcancel', handler);
    }

    return handler;
  }, [active]);

  const wave = active && (
    <span
      ref={waveRef}
      className={getClassNames(`${rootClass}__wave`, {
        [`${rootClass}__wave--active`]: active,
      })}></span>
  );

  return [wave, activateWave];
}

export function useBtnIcon(
  rootClass: string,
  icon: ButtonProps['icon'],
  loading: ButtonProps['loading'],
): React.ReactElement {
  return useMemo(() => {
    const className = `${rootClass}__icon`;
    const Loading = (
      <Icon className={className} key="loading-icon">
        <LoadingIcon />
      </Icon>
    );

    if (icon)
      return loading ? Loading : <Icon className={className}>{icon}</Icon>;
    return <CollapseTransition width>{loading && Loading}</CollapseTransition>;
  }, [loading, icon]);
}
