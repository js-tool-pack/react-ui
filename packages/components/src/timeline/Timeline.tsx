import type { TimelineItemProps, TimelineProps } from './timeline.types';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { TimelineItem } from '@pkg/components';
import { getClasses } from '@pkg/shared';
import React, { useMemo } from 'react';

const cls = getClasses('timeline', [], []);
const defaultProps = { placement: 'left' } satisfies Partial<TimelineProps>;

export const Timeline: React.FC<TimelineProps> = React.forwardRef<
  HTMLDivElement,
  TimelineProps
>((props, ref) => {
  const {
    attrs = {},
    items = [],
    placement,
    children,
    reverse,
  } = props as RequiredPart<TimelineProps, keyof typeof defaultProps>;

  const list: TimelineItemProps[] = useMemo(
    () => (reverse ? items.slice().reverse() : items),
    [items, reverse],
  );

  return (
    <div
      {...attrs}
      className={getClassNames(
        cls.root,
        attrs.className,
        `${cls.root}--${placement}`,
        {},
      )}
      ref={ref}
    >
      {list.map((item, index) => (
        <TimelineItem key={item.time || 'timeline-' + index} {...item} />
      ))}
      {children}
    </div>
  );
});

Timeline.defaultProps = defaultProps;
Timeline.displayName = 'Timeline';
