/**
 * title: 手风琴效果
 * description: 每次只能展开一个面板。
 */

import React from 'react';
import { CollapseGroup, type CollapseGroupItem } from '@tool-pack/react-ui';

const items: CollapseGroupItem[] = [
  {
    key: '1',
    title: '第二十六章',
    children:
      '重为轻根，静为躁君。是以圣人终日行不离辎（zī）重。虽有荣观（guàn），燕处超然，奈何万乘（shèng）之主，而以身轻天下？轻则失本，躁则失君。',
  },
  {
    key: '2',
    title: '第二十七章',
    children:
      '善行无辙迹，善言无瑕谪(xiá zhé)，善数（shǔ）不用筹策，善闭无关楗（jiàn）而不可开，善结无绳约而不可解。是以圣人常善救人，故无弃人；常善救物，故无弃物，是谓袭明。故善人者，不善人之师；不善人者，善人之资。不贵其师，不爱其资，虽智大迷，是谓要妙',
  },

  {
    key: '3',
    title: '第二十八章',
    children:
      '知其雄，守其雌，为天下溪。为天下溪，常德不离，复归于婴儿。知其白，守其黑，为天下式。为天下式，常德不忒（tè），复归于无极。知其荣，守其辱，为天下谷。为天下谷，常德乃足，复归于朴。朴散则为器，圣人用之则为官长（zhǎng）。故大制不割。',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup accordion items={items} />
    </div>
  );
};

export default App;
