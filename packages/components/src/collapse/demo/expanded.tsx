/**
 * title: 展开
 * description: 初始时展开或收起。
 */

import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '谷神不死，是谓玄牝（pìn），玄牝之门，是谓天地根。绵绵若存，用之不勤。',

    title: '第六章',
    key: '1',
  },
  {
    children:
      '天长地久。天地所以能长且久者，以其不自生，故能长生。是以圣人后其身而身先，外其身而身存。非以其无私邪（yé）？故能成其私',
    title: '第七章',
    key: '2',
  },

  {
    children:
      '上善若水。水善利万物而不争，处众人之所恶（wù），故几（jī）于道。居善地，心善渊，与善仁，言善信，正善治，事善能，动善时。夫唯不争，故无尤。',
    expanded: false,
    title: '第八章',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup collapseProps={{ expanded: true }} items={items} />
    </div>
  );
};

export default App;
