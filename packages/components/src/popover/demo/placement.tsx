/**
 * title: 位置
 * description: Popover 所在方向。
 */

import { PLACEMENTS_12, Popover, Button, Space } from '@tool-pack/react-ui';
import styles from './placement.module.scss';
import { chunk } from '@tool-pack/basic';
import React from 'react';

const App: React.FC = () => {
  const chunks = chunk(PLACEMENTS_12, 3);
  return (
    <div className={styles['root']}>
      {chunks.map((c, i) => (
        <Space vertical={(i + 1) % 2 === 0} key={i}>
          {c.map((p) => (
            <Popover placement={p} content={p} key={p}>
              <Button style={{ lineHeight: '1em' }}>
                {p.includes('-') ? (p[0] + p.at(-1)!).toUpperCase() : p}
              </Button>
            </Popover>
          ))}
        </Space>
      ))}
    </div>
  );
};

export default App;
