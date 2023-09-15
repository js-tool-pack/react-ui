/**
 * title: 尺寸
 * description: 尺寸分为 'small' 、 'medium' 、 'large'， 默认为 'medium'。
 */

import { type CollapseGroupItem, CollapseGroup } from '@tool-pack/react-ui';
import styles from './size.module.scss';
import React from 'react';

const items: CollapseGroupItem[] = [
  {
    children:
      '将欲取天下而为之，吾见其不得已。天下神器，不可为也。为者败之，执者失之。故物或行或随，或歔（xū）或吹，或强或羸（léi），或挫或隳（huī）。是以圣人去甚，去奢，去泰。',
    title: '第二十九章',
    size: 'small',
    key: '1',
  },
  {
    children:
      '以道佐人主者，不以兵强天下，其事好（hào）还。师之所处，荆棘生焉。大军之后，必有凶年。善有果而已，不敢以取强。果而勿矜，果而勿伐，果而勿骄，果而不得已，果而勿强。物壮则老，是谓不道，不道早已。',
    size: 'medium',
    title: '第三十章',
    key: '2',
  },

  {
    children:
      '夫佳兵者，不祥之器。物或恶（wù）之，故有道者不处（chǔ）。君子居则贵左，用兵则贵右。兵者，不祥之器，非君子之器。不得已而用之，恬淡为上，胜而不美。而美之者，是乐(yào)杀人。夫乐(yào)杀人者，则不可以得志于天下矣。吉事尚左，凶事尚右。偏将军居左，上将军居右，言以丧（sāng）礼处之。杀人之众，以哀悲泣之，战胜，以丧礼处之。',
    title: '第三十一章',
    size: 'large',
    key: '3',
  },
];
const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      <CollapseGroup items={items} accordion />
    </div>
  );
};

export default App;
