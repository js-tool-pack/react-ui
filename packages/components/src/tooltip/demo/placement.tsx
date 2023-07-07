/**
 * title: 位置
 * description: Tooltip 所在方向。
 */

import React from 'react';
import { Tooltip, Button, PLACEMENTS_12, Space } from '@tool-pack/react-ui';
import { chunk } from '@tool-pack/basic';
import styles from './placement.module.scss';

const App: React.FC = () => {
  const chunks = chunk(PLACEMENTS_12, 3);
  return (
    <div className={styles['root']}>
      {chunks.map((c, i) => (
        <Space key={i} vertical={(i + 1) % 2 === 0}>
          {c.map((p) => (
            <Tooltip key={p} placement={p} title={p}>
              <Button style={{ lineHeight: '1em' }}>{p}</Button>
            </Tooltip>
          ))}
        </Space>
      ))}
    </div>
  );
};

export default App;
