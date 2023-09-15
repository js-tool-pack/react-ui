/**
 * Popover: 跟随滚动
 * description: 当元素滚动时，Popover 会跟随滚动。
 */

import { PLACEMENTS_12, Popover, Button, Space } from '@tool-pack/react-ui';
import styles from './scroll.module.scss';
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
              <Button style={{ lineHeight: '1em' }}>{p}</Button>
            </Popover>
          ))}
        </Space>
      ))}
    </div>
  );
};

export default App;
