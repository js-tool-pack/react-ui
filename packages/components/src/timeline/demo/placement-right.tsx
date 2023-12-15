/**
 * title: 居于右侧
 */

import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '治人事天莫若啬（sè）。夫唯啬，是谓早服。早服谓之重(chóng)积德，重(chóng)积德则无不克，无不克则莫知其极，莫知其极，可以有国。有国之母，可以长久。是谓深根固柢（dǐ），长生久视之道。',
    time: '2023-01-01',
    title: '第五十九章',
  },
  {
    content:
      '治大国若烹小鲜。以道莅（lì）天下，其鬼不神。非其鬼不神，其神不伤人；非其神不伤人，圣人亦不伤人。夫两不相伤，故德交归焉。',
    time: '2023-01-02',
    title: '第六十章',
  },
];
const App: React.FC = () => {
  return <Timeline placement="right" items={items} />;
};

export default App;
