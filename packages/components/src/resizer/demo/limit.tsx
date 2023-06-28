/**
 * title: 限制
 * description: 限制可调整范围。<br />
 *   min 参数限制最小范围，max 参数限制最大范围。
 */

import React from 'react';
import { Resizer } from '@tool-pack/react-ui';
import styles from './basic.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      <div className="flex-demo">
        鼠标移至下面两个色块之间拖动，可调整盒子大小。左边宽度限制在[50，600]之间
        <div className="flex-demo-box">
          <div className="left">
            <Resizer placement="right" min={50} max={600} />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
