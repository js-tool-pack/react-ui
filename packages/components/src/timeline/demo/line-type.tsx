/**
 * title: 线条样式
 * description: 线条类型跟 css 属性里的 border-style 的选项一致，默认为 solid。
 */

import { TimelineItemProps, Timeline, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '天下皆谓我道大，似不肖（xiào）。夫唯大，故似不肖。若肖，久矣其细也夫。我有三宝' +
      '，持而保之。一曰慈，二曰俭，三曰不敢为天下先。慈，故能勇；俭，故能广；不敢为天下先，故能成器' +
      '长（zhǎng）。今舍慈且勇，舍俭且广，舍后且先，死矣！夫慈，以战则胜，以守则固，天将救之，以慈卫之。',
    time: '2023-01-01',
    lineType: 'dotted',
    title: '第六十七章',
  },
  {
    icon: (
      <Icon>
        <Icons.Loading />
      </Icon>
    ),
    content: <div style={{ lineHeight: 1 }}>Loading...</div>,
  },
];
const App: React.FC = () => {
  return <Timeline items={items}></Timeline>;
};

export default App;
