import type { TimelineItemProps, TimelineProps } from './timeline.types';
import { mergeReactDefaultProps, getClasses } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { TimelineItem } from '@pkg/components';
import React, { useMemo } from 'react';

const cls = getClasses('timeline', [], []);
const defaultProps = { placement: 'left' } satisfies Partial<TimelineProps>;

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (props, ref) => {
    const {
      attrs = {},
      items = [],
      placement,
      children,
      reverse,
    } = mergeReactDefaultProps(props, defaultProps);
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
  },
);

Timeline.displayName = 'Timeline';
