/**
 * title: appear
 * description: 用于设置初始时是否显示动画，只对组件第一次出现时起作用；默认为 false。
 */

import React, { useState } from 'react';
import { Button, Space, Transition } from '@tool-pack/react-ui';
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
        <Button type="primary" shape="round" onClick={toggle}>
          切 换
        </Button>
        <Button type="primary" plain shape="round" onClick={restore}>
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
                <Button type="success" className="fade" key={1} disabled>
                  appear：true
                </Button>
              )}
            </Transition>
          </div>
          <div className="transition-box">
            <Transition name="fade">
              {visible && (
                <Button type="info" className="fade" key={2} disabled>
                  appear：false
                </Button>
              )}
            </Transition>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
