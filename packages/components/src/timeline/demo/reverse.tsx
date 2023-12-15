/**
 * title: 逆序
 */

import { TimelineItemProps, Timeline, Switch } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '以正治国，以奇用兵，以无事取天下。吾何以知其然哉？以此。天下多忌讳，而民弥贫；' +
      '民多利器，国家滋昏；人多伎（jì）巧，奇物滋起；法令滋彰，盗贼多有。故圣人云：“我无为而民自化' +
      '，我好静而民自正，我无事而民自富，我无欲而民自朴。”',
    time: '2023-01-01',
    title: '第五十七章',
  },
  {
    content:
      '其政闷闷，其民淳淳；其政察察，其民缺缺。祸兮福之所倚，福兮祸之所伏。孰知其极？' +
      '其无正。正复为奇，善复为妖，人之迷，其日固久。是以圣人方而不割，廉而不刿（guì），直而不肆，光' +
      '而不耀。',
    time: '2023-01-02',
    title: '第五十八章',
  },
];
const App: React.FC = () => {
  const [reverse, setReverse] = useState(false);
  return (
    <>
      <Timeline reverse={reverse} items={items} />
      <br />
      <br />
      reverse: <Switch onChange={setReverse} checked={reverse} size="small" />
    </>
  );
};

export default App;
