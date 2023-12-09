import type { SliderStaticProps, Values } from '../slider.types';
import { getClassNames, inRange } from '@tool-pack/basic';
import type { ConvertOptional } from '@tool-pack/types';
import { getClasses } from '@pkg/shared';
import React from 'react';

interface Props
  extends ConvertOptional<
    Pick<SliderStaticProps, 'vertical' | 'reverse' | 'marks'>
  > {
  values: Values;
  total: number;
}

const cls = getClasses('slider-dots', ['dot'], ['active']);

export const Dots: React.FC<Props> = (props) => {
  const { vertical, reverse, values, marks, total } = props;

  const [start, end] = values;
  const min = Math.min(start, end);
  const max = Math.max(start, end);

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
