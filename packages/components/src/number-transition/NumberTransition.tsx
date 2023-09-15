import type { NumberTransitionProps } from './number-transition.types';
import { createTimeCountDown, getClassNames } from '@tool-pack/basic';
import { getComponentClass, useForceUpdate } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import React, { useEffect, useRef } from 'react';
import { animateTo } from '@tool-pack/dom';

const rootName = getComponentClass('number-transition');
const defaultProps = {
  format: (value) => value,
  timingFunction: 'ease',
  duration: 3000,
  precision: 0,
  from: 0,
  to: 10,
} satisfies Partial<NumberTransitionProps>;

export const NumberTransition: React.FC<NumberTransitionProps> =
  React.forwardRef<HTMLDivElement, NumberTransitionProps>((props, ref) => {
    const {
      timingFunction,
      resetSignal,
      onFinished,
      precision,
      duration,
      active,
      format,
      attrs,
      from,
      to,
    } = props as RequiredPart<NumberTransitionProps, keyof typeof defaultProps>;

    const valueRef = useRef<number | string>(from);
    const cancelerRef = useRef<() => void>();
    const durationRef = useRef(duration);
    const signalRef = useRef(resetSignal);
    const forceUpdate = useForceUpdate();

    const reset = () => {
      cancelerRef.current?.();
      valueRef.current = from;
      durationRef.current = duration;
    };

    useEffect(() => {
      if (!resetSignal === signalRef.current) return;
      signalRef.current = resetSignal;
      reset();
      forceUpdate();
    }, [resetSignal]);

    useEffect(() => {
      if (!active || durationRef.current <= 0) return;
      cancelerRef.current?.();

      const initValue = Number(valueRef.current);
      const countDown = createTimeCountDown(durationRef.current);

      const getValue: (value: number) => number | string =
        precision === null
          ? (v) => v
          : precision === 0
          ? (v) => Math.floor(v)
          : (v) => v.toFixed(precision);

      const { stop } = animateTo({
        callback: (num) => {
          valueRef.current = getValue(num);
          forceUpdate();
        },
        timeout: durationRef.current,
        timingFn: timingFunction,
        after: onFinished,
        from: initValue,
        to,
      });
      return (cancelerRef.current = () => {
        durationRef.current = countDown();
        countDown.pause();
        stop();
        cancelerRef.current = undefined;
      });
    }, [active, from, duration, timingFunction, to, precision]);

    return (
      <div
        {...attrs}
        className={getClassNames(rootName, attrs?.className)}
        ref={ref}
      >
        {format(valueRef.current)}
      </div>
    );
  });

NumberTransition.defaultProps = defaultProps;
NumberTransition.displayName = 'NumberTransition';
