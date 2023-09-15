import { CollapseGroupItem, CollapseGroup } from '..';
import { render } from '@testing-library/react';
import { Left } from '@pkg/icons';

describe('CollapseGroup', () => {
  test('all', () => {
    const nest: CollapseGroupItem[] = [
      {
        children:
          '希言自然。故飘风不终朝（zhāo），骤雨不终日。孰为此者？天地。天地尚不能久，而况于人乎？故从事于道者，道者同于道，德者同于德，失者同于失。同于道者，道亦乐得之；同于德者，德亦乐得之；同于失者，失亦乐得之。信不足焉，有不信焉。',
        icon: () => <Left />,
        iconPlacement: 'end',
        title: '第二十三章',
        key: '4',
      },
      {
        children:
          '企者不立，跨者不行，自见（xiàn）者不明，自是者不彰，自伐者无功，自矜者不长。其在道也，曰余食赘（zhuì）行。物或恶（wù）之，故有道者不处（chǔ）。',
        title: '第二十四章',
        disabled: true,
        key: '5',
      },
      {
        children:
          '有物混（hùn）成，先天地生。寂兮寥兮，独立不改，周行而不殆，可以为天下母。吾不知其名，字之曰道，强(qiǎng)为之名曰大。大曰逝，逝曰远，远曰反。故道大，天大，地大，王亦大。域中有四大，而王居其一焉。人法地，地法天，天法道，道法自然。',
        extra: <Left />,
        title: '第二十五章',
        key: '6',
      },
    ];
    const items: CollapseGroupItem[] = [
      {
        children:
          '孔德之容，惟道是从。道之为物，惟恍惟惚。惚兮恍兮，其中有象；恍兮惚兮，其中有物。窈（yǎo）兮冥兮，其中有精；其精甚真，其中有信。自古及今，其名不去，以阅众甫。吾何以知众甫之状哉？以此。',
        title: '第二十一章',
        key: '1',
      },
      {
        children:
          '曲则全，枉则直，洼则盈，敝则新，少则得，多则惑。是以圣人抱一，为天下式。不自见（xiàn）故明，不自是故彰，不自伐故有功，不自矜故长。夫唯不争，故天下莫能与之争。古之所谓曲则全者，岂虚言哉！诚全而归之。',
        title: '第二十二章',
        key: '2',
      },

      {
        children: (
          <CollapseGroup collapseProps={{ expanded: true }} items={nest} />
        ),
        title: '第二十三至二十五章',
        expanded: true,
        extra: '嵌套',
        key: '3',
      },
    ];
    expect(
      render(
        <CollapseGroup
          collapseProps={{ extra: '《道德经》', size: 'large' }}
          attrs={{ className: 'group' }}
          items={items}
          accordion
        />,
      ).container.firstChild,
    ).toMatchSnapshot();
  });
});
