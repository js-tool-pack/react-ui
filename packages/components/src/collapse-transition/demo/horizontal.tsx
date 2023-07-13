/**
 * title: 水平折叠
 * description: 添加 horizontal 属性，把 Collapse 改为水平折叠。<br />
 *   注意：宽度恢复时取的是父元素的宽度，所以如果宽度不等于父元素时需要在 CollapseTransition 外面多套一层元素。
 */

import React, { useState } from 'react';
import { Button, CollapseTransition, Divider } from '@tool-pack/react-ui';
const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div style={{ paddingBottom: '8px', textAlign: 'center' }}>
        <Button onClick={() => setVisible((v) => !v)}>toggle</Button>
      </div>
      <CollapseTransition show={visible} horizontal>
        <div style={{ background: '#910852', color: 'white' }}>
          <div style={{ padding: '10px' }}>
            <p>
              天长地久。天地所以能长且久者，以其不自生，故能长生。是以圣人后其身而身先，外其身而身存。非以其无私邪（yé）？故能成其私。
            </p>
            <Divider />
            <p>
              上善若水。水善利万物而不争，处众人之所恶（wù），故几（jī）于道。居善地，心善渊，与善仁，言善信，正善治，事善能，动善时。夫唯不争，故无尤。
            </p>
            <Divider />
            <p>
              持而盈之，不如其已。揣(chuǎi)而锐之，不可长保。金玉满堂，莫之能守。富贵而骄，自遗（yí）其咎。功成身退，天之道。
            </p>
          </div>
        </div>
      </CollapseTransition>
    </div>
  );
};

export default App;
