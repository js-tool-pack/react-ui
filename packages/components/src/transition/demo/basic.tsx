/**
 * title: 基础用法
 * description: >
 *  需要有一个name作为元素的className前缀，然后添加相应的css样式。
 */

import React, { useReducer } from 'react';
import { Button, Transition } from '@tool-pack/react-ui';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" shape="round" onClick={setVisible}>
        切 换
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade">
          {visible && (
            <Button type="warning" disabled>
              name: fade
            </Button>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default App;
