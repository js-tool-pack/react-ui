/**
 * title: 自定义icon
 * description: 设置 icon，替换默认 icon。icon 为 null 时， 不显示 icon。
 */

import React from 'react';
import {
  CollapseGroup,
  type CollapseGroupItem,
  Icon,
  Icons,
} from '@tool-pack/react-ui';

const items: CollapseGroupItem[] = [
  {
    key: '1',
    title: '第十五章',
    extra: '公共icon',
    children:
      '古之善为士者，微妙玄通，深不可识。夫唯不可识，故强(qiǎng)为之容。豫焉若冬涉川，犹兮若畏四邻，俨兮其若容，涣兮若冰之将释，敦兮其若朴，旷兮其若谷，混兮其若浊。孰能浊以静之徐清？孰能安以久动之徐生？保此道者不欲盈，夫唯不盈，故能蔽不新成。',
  },
  {
    key: '2',
    title: '第十六章',
    extra: '独立icon',
    icon: (active) => (
      <Icon
        className={`t-collapse__icon ${
          active ? 't-collapse__icon--active' : ''
        }`}>
        <Icons.CircleSuccess></Icons.CircleSuccess>
      </Icon>
    ),
    children:
      '致虚极，守静笃（dǔ），万物并作，吾以观复。夫物芸芸，各复归其根。归根曰静，是谓复命。复命曰常，知常曰明，不知常，妄作，凶。知常容，容乃公，公乃王（wàng），王（wàng）乃天，天乃道，道乃久，没（mò）身不殆',
  },

  {
    key: '3',
    title: '第十七章',
    icon: null,
    extra: '无icon',
    children:
      '太上，下知有之。其次，亲而誉之。其次，畏之。其次，侮之。信不足焉，有不信焉。悠兮其贵言。功成事遂，百姓皆谓我自然',
  },
];
const App: React.FC = () => {
  return (
    <div>
      <CollapseGroup
        collapseProps={{
          icon: (active) => (
            <Icon
              className={`t-collapse__icon ${
                active ? 't-collapse__icon--active' : ''
              }`}>
              <Icons.CircleInfoFill></Icons.CircleInfoFill>
            </Icon>
          ),
        }}
        items={items}
      />
    </div>
  );
};

export default App;
