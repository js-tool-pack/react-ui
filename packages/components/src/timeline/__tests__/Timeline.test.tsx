import { TimelineItemProps, Timeline } from '..';
import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';

describe('Timeline', () => {
  testAttrs(Timeline);

  it('basic', () => {
    const items: TimelineItemProps[] = [
      {
        content: 'content 1',
        time: '2023-01-01',
        title: 'title 1',
      },
      {
        content: 'content 2',
        time: '2023-01-02',
        lineType: 'dotted',
        title: 'title 2',
        type: 'error',
      },
    ];
    expect(
      render(<Timeline items={items} />).container.firstChild,
    ).toMatchSnapshot();
  });
});
