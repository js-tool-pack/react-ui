import React, { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import type { ConvertOptional, Point } from '@tool-pack/types';
import type { SliderStaticProps } from '../slider.types';
import { forEachRight, forEach } from '@tool-pack/basic';
import { getClasses, Placement } from '@pkg/shared';
import { onDragEvent } from '@tool-pack/dom';
import { Tooltip } from '~/tooltip';

interface Props
  extends ConvertOptional<
    Pick<
      SliderStaticProps,
      | 'keepRangeSorted'
      | 'tooltipProps'
      | 'formatter'
      | 'disabled'
      | 'vertical'
      | 'tooltip'
      | 'reverse'
      | 'step'
      | 'max'
      | 'min'
    >
  > {
  getValueFromMousePos: (pos: Point) => number;
  setValues: (values: number[]) => void;
  valuesRef: MutableRefObject<number[]>;
  total: number;
}

const cls = getClasses('slider-handlers', ['handler'], []);

export const Handlers: React.FC<Props> = (props) => {
  const {
    getValueFromMousePos,
    formatter = (v) => v,
    tooltipProps = {},
    keepRangeSorted,
    setValues,
    valuesRef,
    vertical,
    disabled,
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
              const values = valuesRef.current;
              const prev = values.slice(0, index);
              const next = values.slice(index + 1);
              const curr = getValueFromMousePos([currentXY.x, currentXY.y]);

              if (keepRangeSorted && values.length > 1) {
                if (prev.length > 0) keepPrevSorted();
                if (next.length > 0) keepNextSorted();
              }
              setValues([...prev, curr, ...next]);

              function keepPrevSorted() {
                forEachRight(prev, (v, i): false | void => {
                  if (v > curr) {
                    prev[i] = curr;
                  } else return false;
                });
              }
              function keepNextSorted() {
                forEach(next, (v, i): false | void => {
                  if (v < curr) {
                    next[i] = curr;
                  } else return false;
                });
              }
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
          <div
            className={cls.__.handler}
            style={styles[index]}
            draggable={false}
          ></div>
        </Tooltip>
      ))}
    </div>
  );
};
