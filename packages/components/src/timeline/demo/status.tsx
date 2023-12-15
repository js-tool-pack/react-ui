/**
 * title: 状态
 * description: 支持 'default' | 'info' | 'success' | 'warning' | 'error' 五种状态
 */

import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '天下有始，以为天下母。既得其母，以知其子；既知其子，复守其母，没（mò）身不殆。塞（sè）其兑，闭其门，终身不勤。开其兑，济其事，终身不救。见（jiàn）小曰明，守柔曰强。用其光，复归其明，无遗身殃，是为习常。',
    time: '2023-01-01',
    type: 'default',
    title: '第五十二章',
  },
  {
    content:
      '使我介然有知，行于大道，唯施（迤yí）是畏。大道甚夷，而民好径。朝（cháo）甚除，田甚芜，仓甚虚。服文彩，带利剑，厌饮食，财货有余，是为盗夸。非道也哉！',
    time: '2023-01-02',
    title: '第五十三章',
    type: 'info',
  },
  {
    content:
      '善建者不拔，善抱者不脱，子孙以祭祀不辍。修之于身，其德乃真；修之于家，其德乃余；修之于乡，其德乃长（zhǎng）；修之于国，其德乃丰；修之于天下，其德乃普。故以身观身，以家观家，以乡观乡，以国观国，以天下观天下。吾何以知天下然哉？以此。',
    time: '2023-01-03',
    type: 'success',
    title: '第五十四章',
  },
  {
    content:
      '含德之厚，比于赤子。蜂虿（chài）虺（huǐ）蛇不螫(shì)，猛兽不据，攫(jué)鸟不搏。骨弱筋柔而握固。未知牝牡之合而全作，精之至也。终日号而不嗄（shà），和之至也。知和曰常，知常曰明，益生曰祥，心使气曰强。物壮则老，谓之不道，不道早已。',
    time: '2023-01-04',
    type: 'warning',
    title: '第五十五章',
  },
  {
    content:
      '知（zhì）者不言，言者不知（zhì）。塞（sè）其兑，闭其门，挫其锐；解其纷，和其光，同其尘，是谓玄同。故不可得而亲，不可得而疏；不可得而利，不可得而害；不可得而贵，不可得而贱，故为天下贵。',
    time: '2023-01-05',
    title: '第五十六章',
    type: 'error',
  },
];
const App: React.FC = () => {
  return <Timeline items={items}></Timeline>;
};

export default App;
