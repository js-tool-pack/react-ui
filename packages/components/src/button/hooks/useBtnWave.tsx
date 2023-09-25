import React, { useEffect, useState, useRef } from 'react';
import { getClassNames } from '@tool-pack/basic';

export function useBtnWave(
  rootClass: string,
): readonly [React.ReactElement | boolean, () => void] {
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
      className={getClassNames(`${rootClass}__wave`, {
        [`${rootClass}__wave--active`]: active,
      })}
      ref={waveRef}
    ></span>
  );

  return [wave, activateWave];
}
