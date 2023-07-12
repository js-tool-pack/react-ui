/**
 * title: 跟随滚动
 * description: 当元素滚动时，Popover 会跟随滚动。
 */

import React from 'react';
import { Popover, Button, PLACEMENTS_12, Space } from '@tool-pack/react-ui';
import { chunk } from '@tool-pack/basic';
import styles from './scroll.module.scss';

const App: React.FC = () => {
  const chunks = chunk(PLACEMENTS_12, 3);
  return (
    <div className={styles['root']}>
      {chunks.map((c, i) => (
        <Space key={i} vertical={(i + 1) % 2 === 0}>
          {c.map((p) => (
            <Popover key={p} placement={p} content={p}>
              <Button style={{ lineHeight: '1em' }}>{p}</Button>
            </Popover>
          ))}
        </Space>
      ))}
    </div>
  );
};

export default App;
