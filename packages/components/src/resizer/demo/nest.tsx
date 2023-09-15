/**
 * title: 嵌套
 */

import { Resizer } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      <div className="nest-box">
        <div className="inner-box">
          <Resizer />
          <Resizer placement="right" />
        </div>
        <Resizer />
        <Resizer placement="right" />
      </div>
    </div>
  );
};

export default App;
