/**
 * title: 交替排列
 */

import { TimelineItemProps, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '大国者下流。天下之交，天下之牝。牝常以静胜牡，以静为下。故大国以下小国，则取小' +
      '国；小国以下大国，则取大国。故或下以取，或下而取。大国不过欲兼畜（xù）人，小国不过欲入事人，' +
      '夫两者各得其所欲，大者宜为下。',
    time: '2023-01-01',
    title: '第六十一章',
  },
  {
    content:
      '道者万物之奥，善人之宝，不善人之所保。美言可以市，尊行可以加人。人之不善，何弃' +
      '之有！故立天子，置三公，虽有拱璧以先驷马，不如坐进此道。古之所以贵此道者何？不曰以求得，有罪' +
      '以免邪（yé）？故为天下贵。',
    time: '2023-01-02',
    title: '第六十二章',
  },
  {
    content:
      '为无为，事无事，味无味。大小多少，报怨以德。图难于其易，为大于其细。天下难事必' +
      '作于易，天下大事必作于细，是以圣人终不为大，故能成其大。夫轻诺必寡信，多易必多难，是以圣人犹' +
      '难之。故终无难矣。',
    time: '2023-01-03',
    title: '第六十三章',
  },
];
const App: React.FC = () => {
  return <Timeline placement="alternate" items={items} />;
};

export default App;
