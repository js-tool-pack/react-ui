import { getClassNames, inRange } from '@tool-pack/basic';
import type { SliderStaticProps } from '../slider.types';
import type { ConvertOptional } from '@tool-pack/types';
import { getClasses } from '@pkg/shared';
import React from 'react';

interface Props
  extends ConvertOptional<
    Pick<SliderStaticProps, 'vertical' | 'reverse' | 'marks'>
  > {
  minOfValue: number;
  maxOfValue: number;
  total: number;
}

const cls = getClasses('slider-dots', ['dot'], ['active']);

export const Dots: React.FC<Props> = (props) => {
  const {
    minOfValue: min,
    maxOfValue: max,
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

          const style: React.CSSProperties = {};
          const pos = scale + '%';

          if (vertical) {
            style[reverse ? 'top' : 'bottom'] = pos;
            style.transform = `translateY(${reverse ? '-50%' : '50%'})`;
          } else {
            style[reverse ? 'right' : 'left'] = pos;
            style.transform = `translateX(${reverse ? '50%' : '-50%'})`;
          }

          return (
            <li
              className={getClassNames(cls.__.dot, {
                [cls['--'].active]: inRange(val, [min, max]),
              })}
              style={style}
              key={k}
            ></li>
          );
        })}
      </ul>
    )
  );
};
