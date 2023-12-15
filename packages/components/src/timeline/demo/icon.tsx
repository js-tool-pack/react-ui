/**
 * title: 自定义图标
 */

import { TimelineItemProps, Timeline, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const items: TimelineItemProps[] = [
  {
    content:
      '其安易持，其未兆易谋，其脆易泮（pàn），其微易散。为之于未有，治之于未乱。合抱之' +
      '木，生于毫末；九层之台，起于累土；千里之行，始于足下。为者败之，执者失之。是以圣人无为，故无' +
      '败；无执，故无失。民之从事，常于几成而败之。慎终如始，则无败事。是以圣人欲不欲，不贵难得之货' +
      '。学不学，复众人之所过。以辅万物之自然，而不敢为。',
    icon: (
      <Icon size={20}>
        <Icons.CircleSuccessFill />
      </Icon>
    ),
    time: '2023-01-01',
    type: 'success',
    title: '第六十四章',
  },
  {
    content:
      '古之善为道者，非以明民，将以愚之。民之难治，以其智多。故以智治国，国之贼；不以' +
      '智治国，国之福。知此两者，亦稽（jī）式。常知稽式，是谓玄德。玄德深矣，远矣，与物反矣，然后乃' +
      '至大顺。',
    icon: (
      <Icon size={20}>
        <Icons.CircleWarningFill />
      </Icon>
    ),
    time: '2023-01-02',
    type: 'warning',
    title: '第六十五章',
  },
  {
    content:
      '江海所以能为百谷王者，以其善下之，故能为百谷王。是以欲上民，必以言下之；欲先民，必以身后之。是以圣人处上而民不重，处前而民不害，是以天下乐推而不厌。以其不争，故天下莫能与之争。',
    icon: (
      <Icon size={20}>
        <Icons.CircleCloseFill />
      </Icon>
    ),
    time: '2023-01-03',
    title: '第六十六章',
    type: 'error',
  },
];
const App: React.FC = () => {
  return <Timeline items={items}></Timeline>;
};

export default App;
