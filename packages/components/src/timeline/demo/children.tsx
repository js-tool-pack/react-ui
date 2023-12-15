/**
 * title: JSX 子组件
 * description: 这种方式不能使用 reverse 逆序。
 */

import { TimelineItem, Timeline } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Timeline>
      <TimelineItem
        content="善为士者不武，善战者不怒，善胜敌者不与，善用人者为之下。是谓不争之德，是谓用人之力，是谓配天古之极。"
        title="第六十八章"
      />
      <TimelineItem
        content="用兵有言，吾不敢为主而为客，不敢进寸而退尺。是谓行（xíng）无行（háng），攘(rǎng)无臂，扔无敌，执无兵。祸莫大于轻敌，轻敌几丧吾宝。故抗兵相加，哀者胜矣。"
        title="第六十九章"
      />
    </Timeline>
  );
};

export default App;
