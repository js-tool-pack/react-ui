import {
  getClassNames,
  forEachRight,
  getSafeNum,
  forEach,
  strip,
} from '@tool-pack/basic';
import {
  mergeReactDefaultProps,
  useForceUpdate,
  getClasses,
} from '@pkg/shared';
import { HandlersControlRef, Handlers, Marks, Dots } from './components';
import React, { useEffect, useMemo, useRef } from 'react';
import type { SliderStaticProps } from './slider.types';
import type { Point } from '@tool-pack/types';
import { SliderFC } from './slider.types';

const cls = getClasses(
  'slider',
  ['rail', 'bar'],
  ['disabled', 'vertical', 'reverse', 'range', 'with-marks'],
);
const defaultProps = {
  keyboard: true,
  reverse: false,
  tooltip: true,
  max: 100,
  value: 0,
  step: 1,
  min: 0,
} satisfies Partial<SliderStaticProps>;

const _Slider = React.forwardRef<HTMLDivElement, SliderStaticProps>(
  (props, ref) => {
    const {
      formatter = (v: any) => v,
      value: outerValue,
      tooltipProps = {},
      keepRangeSorted,
      attrs = {},
      disabled,
      keyboard,
      vertical,
      onChange,
      reverse,
      tooltip,
      marks,
      step,
      max,
      min,
    } = mergeReactDefaultProps(props, defaultProps);
    const forceUpdate = useForceUpdate();
    const valuesRef = useRef<number[]>([]);
    const sortedValuesRef = useRef<number[]>([]);
    const railRef = useRef<HTMLDivElement>(null);
    const handlersControlRef = useRef<HandlersControlRef>(null);

    const isRange = Array.isArray(outerValue);
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
        <div
          onMouseDown={handleRailClick}
          className={cls.__.rail}
          ref={railRef}
        >
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
            onHandlerKeyDown={onHandlerKeyDown}
            setValueOfIndex={setValueOfIndex}
            keepRangeSorted={keepRangeSorted}
            controlRef={handlersControlRef}
            tooltipProps={tooltipProps}
            valuesRef={valuesRef}
            formatter={formatter}
            disabled={disabled}
            vertical={vertical}
            keyboard={keyboard}
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

    function onHandlerKeyDown(stepScale: -1 | 1, index: number): void {
      if (!keyboard) return;
      const values = valuesRef.current;
      const curr = values[index] as number;
      setValueOfIndex(getLimitValue(getStepValue()), index);

      function getStepValue(): number {
        if (step !== 'mark') return stepScale * step + curr;
        return getByMark();

        function getByMark(): number {
          const [markValue, markValues] = findClosestFromObjectNumberKeys(
            marks,
            curr,
          );

          const index = markValues.indexOf(markValue);
          if (index === -1) return curr;

          const next = getSafeNum(index + stepScale, 0, markValues.length - 1);
          return markValues[next] as number;
        }
      }
    }
    function getMinAndMaxFromValues(): readonly [min: number, max: number] {
      const sortedValues = sortedValuesRef.current;
      if (!isRange) return [min, valuesRef.current.at(-1) ?? min];
      return [sortedValues[0] ?? min, sortedValues.at(-1) ?? min];
    }
    function setValueOfIndex(value: number, index: number): void {
      const values = valuesRef.current;

      const prevChunk = values.slice(0, index);
      const nextChunk = values.slice(index + 1);

      if (keepRangeSorted && values.length > 1) {
        if (prevChunk.length > 0) keepPrevChunkSorted();
        if (nextChunk.length > 0) keepNextChunkSorted();
      }

      setValue([...prevChunk, strip(value), ...nextChunk]);
      setTimeout(() => handlersControlRef.current?.focus(index));

      function keepPrevChunkSorted() {
        forEachRight(prevChunk, (v, i): false | void => {
          if (v > value) {
            prevChunk[i] = value;
          } else return false;
        });
      }
      function keepNextChunkSorted() {
        forEach(nextChunk, (v, i): false | void => {
          if (v < value) {
            nextChunk[i] = value;
          } else return false;
        });
      }
    }
    function setValue(values: number[], emit = true): void {
      valuesRef.current = values;
      sortedValuesRef.current = valuesRef.current.slice().sort((a, b) => a - b);
      emit && onChange?.(isRange ? values : values[0]);
      forceUpdate();
    }
    function setValueByClick(value: number, compareValue = value): void {
      const innerValues = valuesRef.current;

      if (isRange) {
        // 需要先找到最接近的数字，然后改成目标数字
        const v = findClosestFromSortedArr(
          sortedValuesRef.current,
          compareValue,
        );
        const index = innerValues.indexOf(v);
        setValueOfIndex(value, index);
        return;
      }
      setValueOfIndex(value, 0);
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
          return findClosestFromObjectNumberKeys(marks, value)[0];
        }
      }
      function getScale() {
        if (!vertical) return (x - rect.x) / rect.width;
        return (y - rect.y) / rect.height;
      }
    }
    function findClosestFromObjectNumberKeys(
      obj: Record<number, unknown> | undefined,
      defaults: number,
    ): [closest: number, sortedKeys: number[]] {
      if (!obj) return [defaults, []];

      const keys = Object.keys(obj);
      const len = keys.length;
      if (!len) return [defaults, []];

      const sortedKeys = keys.map(Number).sort((a, b) => a - b);
      const closest = findClosestFromSortedArr(sortedKeys, defaults);
      return [closest, sortedKeys];
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
  },
);

_Slider.displayName = 'Slider';

export const Slider: SliderFC = _Slider as SliderFC;
