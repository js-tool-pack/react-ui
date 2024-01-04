import React, {
  useImperativeHandle,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  Ref,
} from 'react';
import type { ConvertOptional, Point } from '@tool-pack/types';
import type { SliderStaticProps } from '../slider.types';
import { getClasses, Placement } from '@pkg/shared';
import { onDragEvent } from '@tool-pack/dom';
import { Tooltip } from '~/tooltip';

export interface HandlersControlRef {
  focus(index: number): void;
}

interface Props
  extends ConvertOptional<
    Pick<
      SliderStaticProps,
      | 'keepRangeSorted'
      | 'tooltipProps'
      | 'formatter'
      | 'disabled'
      | 'keyboard'
      | 'vertical'
      | 'tooltip'
      | 'reverse'
      | 'step'
      | 'max'
      | 'min'
    >
  > {
  onHandlerKeyDown: (stepScale: -1 | 1, index: number) => void;
  setValueOfIndex: (value: number, index: number) => void;
  getValueFromMousePos: (pos: Point) => number;
  valuesRef: MutableRefObject<number[]>;
  controlRef: Ref<HandlersControlRef>;
  total: number;
}

const cls = getClasses('slider-handlers', ['handler'], []);

export const Handlers: React.FC<Props> = (props) => {
  const {
    getValueFromMousePos,
    formatter = (v) => v,
    tooltipProps = {},
    onHandlerKeyDown,
    keepRangeSorted,
    setValueOfIndex,
    controlRef,
    valuesRef,
    vertical,
    disabled,
    keyboard,
    reverse,
    tooltip,
    total,
    step,
    max,
    min,
  } = props;

  const handlersRef = useRef<HTMLDivElement>(null);

  const tooltipVisible = tooltip === 'always' ? true : undefined;
  const tooltipDisabled = tooltip === 'always' ? false : !tooltip;

  useImperativeHandle(
    controlRef,
    () => {
      return {
        focus(index: number) {
          (
            handlersRef.current?.children[index] as HTMLDivElement | undefined
          )?.focus();
        },
      };
    },
    [],
  );
  // 拖动事件
  useEffect(() => {
    const handlersEl = handlersRef.current;
    if (!handlersEl || disabled) return;

    const cancels = Array.prototype.map.call(
      handlersEl.children,
      (child: HTMLElement, index: number) => {
        return onDragEvent(
          ({ onMove }) => {
            onMove((_e, currentXY) => {
              const curr = getValueFromMousePos([currentXY.x, currentXY.y]);
              setValueOfIndex(curr, index);
            });
          },
          { el: child },
        );
      },
    ) as Array<() => void>;

    return () => cancels.forEach((cancel) => cancel());
  }, [
    valuesRef.current.length,
    keepRangeSorted,
    vertical,
    disabled,
    step,
    max,
    min,
  ]);

  type Styles = React.CSSProperties[];
  const styles: Styles = useMemo(() => {
    const styles: Styles = [];

    const cssPropKeys: { size: 'height' | 'width'; placement: Placement } = {
      placement: 'top',
      size: 'width',
    };
    if (vertical) {
      cssPropKeys.placement = reverse ? 'top' : 'bottom';
      cssPropKeys.size = 'height';
    } else {
      cssPropKeys.placement = reverse ? 'right' : 'left';
      cssPropKeys.size = 'width';
    }

    valuesRef.current.forEach((value) => {
      styles.push({
        [cssPropKeys.placement]: (value / total) * 100 + '%',
      });
    });

    return styles;
  }, [valuesRef.current, total, vertical, reverse]);

  const _placement =
    vertical && !tooltipProps.placement ? 'right' : tooltipProps.placement;

  return (
    <div className={cls.root} ref={handlersRef}>
      {valuesRef.current.map((item, index) => (
        <Tooltip
          {...tooltipProps}
          disabled={tooltipDisabled}
          visible={tooltipVisible}
          title={formatter(item)}
          placement={_placement}
          key={index}
        >
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            onKeyDown={keyboard ? (e) => handleKeyDown(e, index) : undefined}
            tabIndex={disabled ? undefined : 1}
            className={cls.__.handler}
            style={styles[index]}
            draggable={false}
          ></div>
        </Tooltip>
      ))}
    </div>
  );

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) {
    const key = e.key as (typeof ArrowKeys)[number];
    if (!ArrowKeys.includes(key)) return;
    e.preventDefault();

    let direct = 1;
    if (vertical) {
      if (reverse && ['ArrowDown', 'ArrowUp'].includes(key)) direct = -1;
    } else {
      if (reverse && ['ArrowRight', 'ArrowLeft'].includes(key)) direct = -1;
    }

    onHandlerKeyDown((ArrowMap[key] * direct) as -1 | 1, index);
  }
};

const ArrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] as const;
const ArrowMap: Record<(typeof ArrowKeys)[number], -1 | 1> = {
  ArrowDown: -1,
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: 1,
};
