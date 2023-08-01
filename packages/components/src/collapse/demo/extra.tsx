/**
 * title: 额外信息
 * description: 在右边放一些信息。
 */

import React from 'react';
import {
  CollapseGroup,
  type CollapseGroupItem,
  Tooltip,
} from '@tool-pack/react-ui';

const items: CollapseGroupItem[] = [
  {
    key: '1',
    title: '第十二章',
    children:
      '五色令人目盲，五音令人耳聋，五味令人口爽，驰骋畋（tián）猎令人心发狂，难得之货令人行妨。是以圣人为腹不为目，故去彼取此。',
  },
  {
    key: '2',
    title: '第十三章',
    children:
      '宠辱若惊，贵大患若身。何谓宠辱若惊？宠为下，得之若惊，失之若惊，是谓宠辱若惊。何谓贵大患若身？吾所以有大患者，为吾有身，及吾无身，吾有何患！故贵以身为天下，若可寄天下；爱以身为天下，若可托天下。',
  },

  {
    key: '3',
    title: '第十四章',
    extra: (
      <Tooltip title="第十四章">
        <span>【道德经】</span>
      </Tooltip>
    ),
    children:
      '视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。此三者不可致诘（jié），故混（hùn）而为一。其上不皦（jiǎo皎），其下不昧。绳绳(mǐn mǐn )不可名，复归于无物，是谓无状之状，无物之象。是谓惚恍。迎之不见其首，随之不见其后。执古之道，以御今之有，能知古始，是谓道纪。',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup
        collapseProps={{
          extra: '《道德经》',
        }}
        items={items}
      />
    </div>
  );
};

export default App;
