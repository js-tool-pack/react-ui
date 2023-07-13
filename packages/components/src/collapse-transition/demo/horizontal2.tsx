/**
 * title: 水平折叠并固定内部宽度
 * description: 因为宽度变化会导致内容重新排列，所以相比垂直折叠需要多操作一步把内部的宽度固定住，限制内容随宽度排列。
 */

import React, { useLayoutEffect, useState } from 'react';
import { Button, CollapseTransition, Divider } from '@tool-pack/react-ui';
const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  useLayoutEffect(() => {
    // 该元素的ref已经被Transition组件获取了，无法再在外部靠useRef获取
    const el = document.querySelector<HTMLDivElement>(
      '#collapse-horizontal2-demo',
    );
    if (!el) return;

    const timer = setTimeout(() => {
      // 由于宽度变化会导致文字内容重排，所以需要固定住当前宽度
      el.style.width = getComputedStyle(el).width;
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div style={{ paddingBottom: '8px', textAlign: 'center' }}>
        <Button onClick={() => setVisible((v) => !v)}>toggle</Button>
      </div>
      <CollapseTransition show={visible} horizontal>
        <div style={{ background: '#910852', color: 'white' }}>
          <div id="collapse-horizontal2-demo" style={{ padding: '10px' }}>
            <p>
              载（zài）营魄抱一，能无离乎？专气致柔，能婴儿乎？涤除玄览，能无疵乎？爱民治国，能无知（zhì）乎？天门开阖（hé），能无雌乎？明白四达，能无为乎？生之、畜（xù）之，生而不有，为而不恃，长（zhǎng）而不宰，是谓玄德。
            </p>
            <Divider />
            <p>
              三十辐共一毂（gǔ），当其无，有车之用。埏埴（shān
              zhí）以为器，当其无，有器之用。凿户牖（yǒu）以为室，当其无，有室之用。故有之以为利，无之以为用。
            </p>
            <Divider />
            <p>
              五色令人目盲，五音令人耳聋，五味令人口爽，驰骋畋（tián）猎令人心发狂，难得之货令人行妨。是以圣人为腹不为目，故去彼取此。
            </p>
          </div>
        </div>
      </CollapseTransition>
    </div>
  );
};

export default App;
