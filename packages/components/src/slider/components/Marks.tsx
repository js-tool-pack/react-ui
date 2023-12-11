import { getClassNames, inRange } from '@tool-pack/basic';
import type { SliderStaticProps } from '../slider.types';
import type { ConvertOptional } from '@tool-pack/types';
import { getClasses } from '@pkg/shared';
import React from 'react';

interface Props
  extends ConvertOptional<
    Pick<SliderStaticProps, 'vertical' | 'reverse' | 'marks'>
  > {
  setValue: (value: number) => void;
  minOfValue: number;
  maxOfValue: number;
  total: number;
}

const cls = getClasses(
  'slider-marks',
  ['dot', 'mark', 'label'],
  ['reverse', 'active'],
);

export const Marks: React.FC<Props> = (props) => {
  const {
    minOfValue: min,
    maxOfValue: max,
    setValue,
    vertical,
    reverse,
    marks,
    total,
  } = props;

  return (
    marks && (
      <ul className={cls.root}>
        {Object.keys(marks).map((k) => {
          const val = Number(k);

          const scale = (val / total) * 100;
          if (!inRange(scale, [0, 100])) return null;

          const mark = marks[val]!;

          const style: React.CSSProperties = {};
          const labelStyle: React.CSSProperties = {};
          const pos = scale + '%';
          const margin = 'var(--t-slider-mark-margin)';

          if (vertical) {
            style[reverse ? 'top' : 'bottom'] = pos;
            // style.transform = `translateY(${reverse ? '-50%' : '50%'})`;
            style[mark.reverse ? 'left' : 'right'] = '0';

            labelStyle[mark.reverse ? 'marginRight' : 'marginLeft'] = margin;
            labelStyle[!mark.reverse ? 'left' : 'right'] =
              labelStyle.top =
              labelStyle.bottom =
                '0';
          } else {
            style[reverse ? 'right' : 'left'] = pos;
            // style.transform = `translateX(${reverse ? '50%' : '-50%'})`;
            style[mark.reverse ? 'bottom' : 'top'] = '0';

            labelStyle[!mark.reverse ? 'marginTop' : 'marginBottom'] = margin;
            labelStyle[!mark.reverse ? 'top' : 'bottom'] =
              labelStyle.left =
              labelStyle.right =
                '0';
          }

          return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className={getClassNames(cls.__.mark, {
                [cls['--'].active]: inRange(val, [min, max]),
                [cls['--'].reverse]: mark.reverse,
              })}
              onMouseDown={(e) => handleClick(e, val)}
              style={style}
              key={k}
            >
              <div className={cls.__.label} style={labelStyle}>
                {mark.label}
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
  function handleClick(e: React.MouseEvent<HTMLElement>, value: number) {
    e.stopPropagation();
    setValue(value);
  }
};
