/**
 * title: 基础用法
 * description: Collapse 基础用法。
 */

import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '道可道，非常道；名可名，非常名。无名天地之始，有名万物之母。故常无欲，以观其妙；常有欲，以观其徼（jiào）。此两者同出而异名，同谓之玄，玄之又玄，众妙之门。',
    title: '第一章',
    key: '1',
  },
  {
    children:
      '天下皆知美之为美，斯恶（è）已；皆知善之为善，斯不善已。故有无相生，难易相成，长短相较，高下相倾，音声相和（hè），前后相随。是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。夫（fú）唯弗居，是以不去。',
    title: '第二章',
    key: '2',
  },
  {
    children:
      '不尚贤，使民不争；不贵难得之货，使民不为盗；不见（xiàn）可欲，使民心不乱。是以圣人之治，虚其心，实其腹；弱其志，强其骨。常使民无知无欲，使夫（fú）智者不敢为也。为无为，则无不治。',
    title: '第三章',
    key: '3',
  },
  {
    children:
      '道冲而用之或不盈，渊兮似万物之宗。挫其锐，解其纷，和其光，同其尘。湛兮似或存，吾不知谁之子，象帝之先。',
    title: '第四章',
    key: '4',
  },
  {
    children:
      '天地不仁，以万物为刍（chú）狗；圣人不仁，以百姓为刍狗。天地之间，其犹橐龠（tuó yuè）乎？虚而不屈，动而愈出。多言数（shuò）穷，不如守中。',
    title: '第五章',
    key: '5',
  },
];
const App: React.FC = () => {
  return <CollapseGroup collapseProps={{ expanded: true }} items={items} />;
};

export default App;
