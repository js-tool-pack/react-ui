/**
 * title: 基础用法
 * description: Collapse 基础用法。
 */

import React, { useLayoutEffect } from 'react';
import { Collapse, Divider } from '@tool-pack/react-ui';

const App: React.FC = () => {
  useLayoutEffect(() => {
    // debugger;
  }, []);
  return (
    <div>
      <Divider style={{ margin: '10px 0' }} />

      <Collapse title={'第十三章'} expanded>
        宠辱若惊，贵大患若身。何谓宠辱若惊？宠为下，得之若惊，失之若惊，是谓宠辱若惊。何谓贵大患若身？吾所以有大患者，为吾有身，及吾无身，吾有何患！故贵以身为天下，若可寄天下；爱以身为天下，若可托天下。
      </Collapse>

      <Divider style={{ margin: '10px 0' }} />

      <Collapse title={'第十四章'} size="small" disabled>
        视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。此三者不可致诘（jié），故混（hùn）而为一。其上不皦（jiǎo皎），其下不昧。绳绳(mǐn
        mǐn)不可名，复归于无物，是谓无状之状，无物之象。是谓惚恍。迎之不见其首，随之不见其后。执古之道，以御今之有，能知古始，是谓道纪。
      </Collapse>

      <Divider style={{ margin: '10px 0' }} />

      <Collapse
        title={'第十五章'}
        size="large"
        iconPlacement="end"
        style={{
          border: '1px solid gray',
          borderRadius: '8px',
          padding: '0 16px',
        }}>
        <div style={{ paddingBottom: '20px' }}>
          古之善为士者，微妙玄通，深不可识。夫唯不可识，故强(qiǎng)为之容。豫焉若冬涉川，犹兮若畏四邻，俨兮其若容，涣兮若冰之将释，敦兮其若朴，旷兮其若谷，混兮其若浊。孰能浊以静之徐清？孰能安以久动之徐生？保此道者不欲盈，夫唯不盈，故能蔽不新成。
        </div>
      </Collapse>

      <Divider style={{ margin: '10px 0' }} />
    </div>
  );
};

export default App;
