/**
 * title: 禁用
 * description: 禁止手动点击展开收起。
 */

import React from 'react';
import { CollapseGroup, type CollapseGroupItem } from '@tool-pack/react-ui';

const items: CollapseGroupItem[] = [
  {
    key: '1',
    title: '第九章',
    children:
      '持而盈之，不如其已。揣(chuǎi)而锐之，不可长保。金玉满堂，莫之能守。富贵而骄，自遗（yí）其咎。功成身退，天之道。',
  },
  {
    key: '2',
    disabled: true,
    expanded: true,
    title: '第十章',
    children:
      '载（zài）营魄抱一，能无离乎？专气致柔，能婴儿乎？涤除玄览，能无疵乎？爱民治国，能无知（zhì）乎？天门开阖（hé），能无雌乎？明白四达，能无为乎？生之、畜（xù）之，生而不有，为而不恃，长（zhǎng）而不宰，是谓玄德。',
  },

  {
    key: '3',
    title: '第十一章',
    children:
      '三十辐共一毂（gǔ），当其无，有车之用。埏埴（shān zhí）以为器，当其无，有器之用。凿户牖（yǒu）以为室，当其无，有室之用。故有之以为利，无之以为用。 ',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup items={items} />
    </div>
  );
};

export default App;
