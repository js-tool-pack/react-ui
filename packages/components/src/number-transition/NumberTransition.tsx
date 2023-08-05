import React, { useEffect, useRef } from 'react';
import type { NumberTransitionProps } from './number-transition.types';
import { getComponentClass, useForceUpdate } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { createTimeCountDown, getClassNames } from '@tool-pack/basic';
import { animateTo } from '@tool-pack/dom';

const rootName = getComponentClass('number-transition');
const defaultProps = {
  duration: 3000,
  from: 0,
  to: 10,
  precision: 0,
  timingFunction: 'ease',
  format: (value) => value,
} satisfies Partial<NumberTransitionProps>;

export const NumberTransition: React.FC<NumberTransitionProps> =
  React.forwardRef<HTMLDivElement, NumberTransitionProps>((props, ref) => {
    const {
      duration,
      active,
      precision,
      from,
      to,
      resetSignal,
      timingFunction,
      format,
      onFinished,
      attrs,
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
        timeout: durationRef.current,
        from: initValue,
        to,
        timingFn: timingFunction,
        callback: (num) => {
          valueRef.current = getValue(num);
          forceUpdate();
        },
        after: onFinished,
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
        ref={ref}
        className={getClassNames(rootName, attrs?.className)}>
        {format(valueRef.current)}
      </div>
    );
  });

NumberTransition.defaultProps = defaultProps;
NumberTransition.displayName = 'NumberTransition';
