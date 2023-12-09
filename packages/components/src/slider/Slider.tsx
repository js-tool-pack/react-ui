import { getClassNames, getSafeNum, strip } from '@tool-pack/basic';
import type { SliderStaticProps, Values } from './slider.types';
import type { RequiredPart, Point } from '@tool-pack/types';
import React, { useEffect, useMemo, useRef } from 'react';
import { useForceUpdate, getClasses } from '@pkg/shared';
import { onDragEvent } from '@tool-pack/dom';
import { Marks, Dots } from './components';
import { SliderFC } from './slider.types';
import { Tooltip } from '~/tooltip';

const cls = getClasses(
  'slider',
  [
    'rail',
    'bar',
    'handler',
    'end-handler',
    'start-handler',
    'marks',
    'mark',
    'mark-dot',
    'mark-reverse',
  ],
  ['disabled', 'vertical', 'reverse', 'range', 'with-marks'],
);
const defaultProps = {
  reverse: false,
  tooltip: true,
  max: 100,
  value: 0,
  step: 1,
  min: 0,
} satisfies Partial<SliderStaticProps>;

const _Slider: React.FC<SliderStaticProps> = React.forwardRef<
  HTMLDivElement,
  SliderStaticProps
>((props, ref) => {
  const {
    formatter = (v) => v,
    value: outerValue,
    tooltipProps = {},
    attrs = {},
    disabled,
    vertical,
    onChange,
    reverse,
    tooltip,
    marks,
    step,
    max,
    min,
  } = props as RequiredPart<SliderStaticProps, keyof typeof defaultProps>;

  const forceUpdate = useForceUpdate();

  const isRange = Array.isArray(outerValue);
  const valueRef = useRef<Values>([0, 0]);
  const railRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const handlerStartRef = useRef<HTMLDivElement>(null);
  const handlerEndRef = useRef<HTMLDivElement>(null);

  const [start, end] = valueRef.current;
  const tooltipVisible = tooltip === 'always' ? true : undefined;
  const tooltipDisabled = tooltip === 'always' ? false : !tooltip;
  const total = max - min;

  // 同步外部 value
  useEffect(() => {
    const [start, end] = valueRef.current;
    if (
      (isRange &&
        (outerValue === valueRef.current ||
          (outerValue[0] === start && outerValue[1] === end))) ||
      (!isRange && outerValue === end)
    ) {
      return;
    }
    setValue(
      isRange
        ? [
            getLimitValue(Math.min(...outerValue)),
            getLimitValue(Math.max(...outerValue)),
          ]
        : [min, getLimitValue(outerValue)],
    );
  }, [min, isRange, outerValue]);

  type Styles = Record<'start' | 'bar' | 'end', React.CSSProperties>;
  const styles: Styles = useMemo(() => {
    const styles: Styles = { start: {}, bar: {}, end: {} };
    const barSize = ((end - start) / total) * 100 + '%';

    const barPos = (start / total) * 100 + '%';
    const endPos = (end / total) * 100 + '%';
    if (vertical) {
      const direct = reverse ? 'top' : 'bottom';
      styles.bar[direct] = barPos;
      styles.bar.height = barSize;

      styles.start[direct] = barPos;
      styles.end[direct] = endPos;
    } else {
      const direct = reverse ? 'right' : 'left';
      styles.bar[direct] = barPos;
      styles.bar.width = barSize;

      styles.start[direct] = barPos;
      styles.end[direct] = endPos;
    }
    return styles;
  }, [start, end, total, vertical, reverse]);

  // start
  useEffect(() => {
    const handlerEl = handlerStartRef.current;
    if (!handlerEl || disabled) return;
    return onDragEvent(
      ({ onMove }) => {
        onMove((_e, currentXY) => {
          setValue([
            getValueFromMousePos([currentXY.x, currentXY.y]),
            valueRef.current[1],
          ]);
        });
      },
      { el: handlerEl },
    );
  }, [max, min, disabled, step, vertical]);
  // end
  useEffect(() => {
    const handlerEl = handlerEndRef.current;
    if (!handlerEl || disabled) return;
    return onDragEvent(
      ({ onMove }) => {
        onMove((_e, currentXY) => {
          setValue([
            valueRef.current[0],
            getValueFromMousePos([currentXY.x, currentXY.y]),
          ]);
        });
      },
      { el: handlerEl },
    );
  }, [max, min, disabled, step, vertical]);

  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className, {
        [cls['--']['with-marks']]: marks,
        [cls['--'].disabled]: disabled,
        [cls['--'].vertical]: vertical,
        [cls['--'].reverse]: reverse,
        [cls['--'].range]: isRange,
      })}
      ref={ref}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onMouseDown={handleRailClick} className={cls.__.rail} ref={railRef}>
        <Marks
          setValue={handleMarkClick}
          values={valueRef.current}
          vertical={vertical}
          reverse={reverse}
          marks={marks}
          total={total}
        />
        <div className={cls.__.bar} style={styles.bar} ref={barRef}></div>
        <Dots
          values={valueRef.current}
          vertical={vertical}
          reverse={reverse}
          marks={marks}
          total={total}
        />
        {isRange && (
          <Tooltip
            {...tooltipProps}
            placement={
              vertical && !tooltipProps.placement
                ? 'right'
                : tooltipProps.placement
            }
            title={formatter(valueRef.current[0])}
            disabled={tooltipDisabled}
            visible={tooltipVisible}
          >
            <div
              className={getClassNames(cls.__.handler, cls.__['start-handler'])}
              ref={handlerStartRef}
              style={styles.start}
            ></div>
          </Tooltip>
        )}
        <Tooltip
          {...tooltipProps}
          placement={
            vertical && !tooltipProps.placement
              ? 'right'
              : tooltipProps.placement
          }
          title={formatter(valueRef.current[1])}
          disabled={tooltipDisabled}
          visible={tooltipVisible}
        >
          <div
            className={getClassNames(cls.__.handler, cls.__['end-handler'])}
            ref={handlerEndRef}
            style={styles.end}
          ></div>
        </Tooltip>
      </div>
    </div>
  );

  function setValue(values: Values): void {
    valueRef.current = values;
    onChange?.(isRange ? values : values[1]);
    forceUpdate();
  }
  function setValueByClick(value: number, compareValue = value): void {
    const [start, end] = valueRef.current;

    if (isRange) {
      // 判断离开始近还是离结束近
      const isCloseEnd = end - compareValue < compareValue - start;
      setValue(isCloseEnd ? [start, value] : [value, end]);
      return;
    }
    setValue([start, value]);
  }
  function handleRailClick(e: React.MouseEvent<HTMLDivElement>): void {
    if (disabled) return;
    const [value, pureValue] = getValueFromMousePos(
      [e.clientX, e.clientY],
      true,
    );
    setValueByClick(value, pureValue);
  }
  function handleMarkClick(value: number): void {
    if (disabled) return;
    setValueByClick(value);
  }
  function getValueFromMousePos(
    pos: Point,
    withPure: true,
  ): [result: number, pure: number];
  function getValueFromMousePos(pos: Point): number;
  function getValueFromMousePos(
    pos: Point,
    withPure?: boolean,
  ): [result: number, pure: number] | number {
    const [x, y] = pos;
    const el = railRef.current;
    if (!el) return [0, 0];
    const rect = el.getBoundingClientRect();
    const value = total * getScale();
    const result = strip(getLimitValue(getValue(getStepValue(value))));
    if (!withPure) return result;
    return [result, getLimitValue(getValue(value))];

    function getValue(value: number): number {
      if (vertical) return reverse ? value : total - value;
      return reverse ? total - value : value;
    }
    function getStepValue(value: number): number {
      if (step !== 'mark') {
        const round = reverse ? 0.5 : 0.5;
        return ~~(value / step + round) * step;
      }
      return getByMark();

      function getByMark(): number {
        if (!marks) return value;

        const keys = Object.keys(marks);
        const len = keys.length;
        if (!len) return value;

        const marksValues = keys.map(Number).sort((a, b) => a - b);

        const index = marksValues.findIndex((v) => v > value);
        if (index < 1) {
          const end = marksValues[len - 1] as number;
          return value >= end ? end : (marksValues[0] as number);
        }
        const next = marksValues[index] as number;
        const prev = marksValues[index - 1] as number;
        return next - value < value - prev ? next : prev;
      }
    }
    function getScale() {
      if (!vertical) return (x - rect.x) / rect.width;
      return (y - rect.y) / rect.height;
    }
  }
  function getLimitValue(value: number): number {
    return getSafeNum(value, min, max);
  }
});

_Slider.defaultProps = defaultProps;
_Slider.displayName = 'Slider';

export const Slider: SliderFC = _Slider as SliderFC;
