/**
 * title: 基础用法
 * description: CollapseTransition 基础用法。
 */

import React, { useState } from 'react';
import { Button, CollapseTransition, Divider } from '@tool-pack/react-ui';
import styles from './basic.module.scss';

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={styles['root']}>
      <div style={{ paddingBottom: '8px', textAlign: 'center' }}>
        <Button onClick={() => setShow((v) => !v)}>toggle</Button>
      </div>
      <CollapseTransition show={show}>
        {/* 注意：下一行的padding无效，因为会导致height为0时仍然显示padding部分 */}
        <div style={{ padding: '10px', background: '#910852', color: 'white' }}>
          <p>
            道冲而用之或不盈，渊兮似万物之宗。挫其锐，解其纷，和其光，同其尘。湛兮似或存，吾不知谁之子，象帝之先。
          </p>
          <Divider />
          <p>
            天地不仁，以万物为刍（chú）狗；圣人不仁，以百姓为刍狗。天地之间，其犹橐龠（tuó
            yuè）乎？虚而不屈，动而愈出。多言数（shuò）穷，不如守中。
          </p>
          <Divider />
          <p>
            谷神不死，是谓玄牝（pìn），玄牝之门，是谓天地根。绵绵若存，用之不勤。
          </p>
        </div>
      </CollapseTransition>
    </div>
  );
};

export default App;
