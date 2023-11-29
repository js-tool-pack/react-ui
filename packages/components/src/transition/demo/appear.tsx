/**
 * title: appear
 * description: 用于设置初始时是否显示动画，只对组件第一次出现时起作用；默认为 false。
 */

import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(true);

  const toggle = () => setVisible((v) => !v);

  const restore = () => {
    setActive(false);
    setVisible(true);
    setTimeout(() => setActive(true), 50);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <Space inline>
        <Button onClick={toggle} type="primary" shape="round">
          切 换
        </Button>
        <Button onClick={restore} type="primary" shape="round" plain>
          重新加载组件
        </Button>
      </Space>
      <br />
      <br />
      {active && (
        <>
          <div className="transition-box">
            <Transition name="fade" appear>
              {visible && (
                <button className="fade" disabled key={1}>
                  appear：true
                </button>
              )}
            </Transition>
          </div>
          <div className="transition-box">
            <Transition name="fade">
              {visible && (
                <button className="fade" disabled key={2}>
                  appear：false
                </button>
              )}
            </Transition>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
