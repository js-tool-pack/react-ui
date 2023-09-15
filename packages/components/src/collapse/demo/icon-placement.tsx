/**
 * title: icon位置
 * description: 指定 icon 所在位置，可设置为 'start' 或 'end'。
 */

import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';
const items: CollapseGroupItem[] = [
  {
    children:
      '大道废，有仁义；慧智出，有大伪；六亲不和，有孝慈；国家昏乱，有忠臣。',
    title: '第十八章',
    key: '1',
  },
  {
    children:
      '绝圣弃智，民利百倍；绝仁弃义，民复孝慈；绝巧弃利，盗贼无有。此三者，以为文不足，故令有所属，见（xiàn）素抱朴，少私寡欲。',
    iconPlacement: 'start',
    title: '第十九章',
    key: '2',
  },

  {
    children:
      '绝学无忧。唯之与阿（ē），相去几何？善之与恶，相去若何？人之所畏，不可不畏。荒兮其未央哉！众人熙熙，如享太牢，如春登台。我独泊兮其未兆，如婴儿之未孩。傫傫（lěi）兮若无所归。众人皆有余，而我独若遗。我愚人之心也哉！沌沌兮！俗人昭昭，我独昏昏；俗人察察，我独闷闷。澹（dàn）兮其若海，飂（liù）兮若无止。众人皆有以，而我独顽似鄙。我独异于人，而贵食(sì)母。',
    title: '第二十章',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup
        collapseProps={{
          iconPlacement: 'end',
          extra: '《道德经》',
        }}
        items={items}
      />
    </div>
  );
};

export default App;
