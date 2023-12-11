import { getClassNames, getSafeNum, strip } from '@tool-pack/basic';
import type { RequiredPart, Point } from '@tool-pack/types';
import React, { useEffect, useMemo, useRef } from 'react';
import { useForceUpdate, getClasses } from '@pkg/shared';
import type { SliderStaticProps } from './slider.types';
import { Handlers, Marks, Dots } from './components';
import { SliderFC } from './slider.types';

const cls = getClasses(
  'slider',
  ['rail', 'bar'],
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
  const valuesRef = useRef<number[]>([]);
  const sortedValuesRef = useRef<number[]>([]);
  const railRef = useRef<HTMLDivElement>(null);

  const total = max - min;

  // 同步外部 value
  useEffect(() => {
    if (!isValueChanged()) return;
    setValue(isRange ? outerValue : [outerValue], false);

    function isValueChanged(): boolean {
      const innerValue = valuesRef.current;
      if (outerValue === innerValue) return false;
      if (!isRange) return outerValue !== innerValue.at(-1);
      return outerValue.some((item, i) => item !== innerValue[i]);
    }
  }, [min, max, outerValue]);

  const [minOfValue, maxOfValue] = useMemo(() => {
    return getMinAndMaxFromValues();
  }, [sortedValuesRef.current]);

  const barStyle: React.CSSProperties = useMemo(() => {
    const styles: React.CSSProperties = {};
    const [minOfValue, maxOfValue] = getMinAndMaxFromValues();
    const barSize = ((maxOfValue - minOfValue) / total) * 100 + '%';
    const barPos = (minOfValue / total) * 100 + '%';

    if (vertical) {
      styles[reverse ? 'top' : 'bottom'] = barPos;
      styles.height = barSize;
    } else {
      styles[reverse ? 'right' : 'left'] = barPos;
      styles.width = barSize;
    }

    return styles;
  }, [valuesRef.current, total, vertical, reverse]);

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
          minOfValue={minOfValue}
          maxOfValue={maxOfValue}
          vertical={vertical}
          reverse={reverse}
          marks={marks}
          total={total}
        />
        <div className={cls.__.bar} style={barStyle}></div>
        <Dots
          minOfValue={minOfValue}
          maxOfValue={maxOfValue}
          vertical={vertical}
          reverse={reverse}
          marks={marks}
          total={total}
        />
        <Handlers
          getValueFromMousePos={getValueFromMousePos}
          tooltipProps={tooltipProps}
          valuesRef={valuesRef}
          formatter={formatter}
          setValues={setValue}
          disabled={disabled}
          vertical={vertical}
          reverse={reverse}
          tooltip={tooltip}
          total={total}
          step={step}
          min={min}
          max={max}
        />
      </div>
    </div>
  );

  function getMinAndMaxFromValues(): readonly [min: number, max: number] {
    const sortedValues = sortedValuesRef.current;
    if (!isRange) return [min, valuesRef.current.at(-1) ?? min];
    return [sortedValues[0] ?? min, sortedValues.at(-1) ?? min];
  }
  function setValue(values: number[], emit = true): void {
    valuesRef.current = values;
    sortedValuesRef.current = valuesRef.current.toSorted((a, b) => a - b);
    emit && onChange?.(isRange ? values : values[0]);
    forceUpdate();
  }
  function setValueByClick(value: number, compareValue = value): void {
    const innerValues = valuesRef.current;

    if (isRange) {
      // 需要先找到最接近的数字，然后改成目标数字
      const v = findClosestFromSortedArr(sortedValuesRef.current, compareValue);
      const index = innerValues.indexOf(v);
      setValue([
        ...innerValues.slice(0, index),
        value,
        ...innerValues.slice(index + 1),
      ]);
      return;
    }
    setValue([...innerValues.slice(0, -1), value]);
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
        return findClosestFromSortedArr(marksValues, value);
      }
    }
    function getScale() {
      if (!vertical) return (x - rect.x) / rect.width;
      return (y - rect.y) / rect.height;
    }
  }
  function findClosestFromSortedArr(arr: number[], value: number): number {
    const len = arr.length;
    if (!len) return value;

    const index = arr.findIndex((v) => v > value);
    if (index < 1) {
      const endIndex = len - 1;
      const end = arr[endIndex] as number;
      return value >= end ? end : (arr[0] as number);
    }

    const prevIndex = index - 1;
    const curr = arr[index] as number;
    const prev = arr[prevIndex] as number;
    return curr - value < value - prev ? curr : prev;
  }
  function getLimitValue(value: number): number {
    return getSafeNum(value, min, max);
  }
});

_Slider.defaultProps = defaultProps;
_Slider.displayName = 'Slider';

export const Slider: SliderFC = _Slider as SliderFC;
