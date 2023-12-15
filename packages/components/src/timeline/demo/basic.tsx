/**
 * title: 基础用法
 * description: Timeline 基础用法。
 */

import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '出生入死。生之徒十有三，死之徒十有三。人之生动之死地，亦十有三。夫何故？以其生生之厚。盖闻善摄生者，陆行不遇兕（sì）虎，入军不被（pī）甲兵，兕无所投其角，虎无所措其爪（zhǎo），兵无所容其刃。夫何故？以其无死地。',
    time: '2023-01-01',
    title: '第五十章',
  },
  {
    content:
      '道生之，德畜（xù）之，物形之，势成之。是以万物莫不尊道而贵德。道之尊，德之贵，夫莫之命而常自然。故道生之，德畜之。长之、育之、亭之、毒之、养之、覆之。生而不有，为而不恃，长（zhǎng）而不宰，是谓玄德。',
    time: '2023-01-02',
    title: '第五十一章',
  },
];
const App: React.FC = () => {
  return <Timeline items={items} />;
};

export default App;
