import type { TimelineItemProps } from '../timeline.types';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { getClasses } from '@pkg/shared';
import React from 'react';

const cls = getClasses(
  'timeline-item',
  [
    'content-block',
    'line-block',
    'content',
    'circle',
    'title',
    'icon',
    'time',
    'line',
  ],
  [],
);
const defaultProps = {
  lineType: 'solid',
  type: 'default',
} satisfies Partial<TimelineItemProps>;

export const TimelineItem: React.FC<TimelineItemProps> = React.forwardRef<
  HTMLDivElement,
  TimelineItemProps
>((props, ref) => {
  const { lineType, content, title, type, time, icon } = props as RequiredPart<
    TimelineItemProps,
    keyof typeof defaultProps
  >;
  const style = { '--t-timeline-line-style': lineType } as React.CSSProperties;

  return (
    <div
      className={getClassNames(cls.root, `${cls.root}--${type}`)}
      style={style}
      ref={ref}
    >
      <div className={cls.__['content-block']}>
        {title && <div className={cls.__.title}>{title}</div>}
        {content && <div className={cls.__.content}>{content}</div>}
        {time && <div className={cls.__.time}>{time}</div>}
      </div>
      <div className={cls.__['line-block']}>
        {icon ? (
          <div className={cls.__.icon}>{icon}</div>
        ) : (
          <div className={cls.__.circle}></div>
        )}
        <div className={cls.__.line}></div>
      </div>
    </div>
  );
});

TimelineItem.defaultProps = defaultProps;
