/**
 * title: 动画曲线函数
 * description: 类似 css 的 transition-timing-function 属性；
 *   目前支持 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'，默认为 'ease'。
 */

import React, { useState } from 'react';
import {
  Button,
  NumberTransition,
  NumberTransitionProps,
  Space,
  TIMING_FNS,
} from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [signal, setSignal] = useState({});

  const reset = () => {
    setDisabled(false);
    setActive(false);
    setSignal({});
  };

  const props: NumberTransitionProps = {
    active,
    duration: 10000,
    to: 25,
    resetSignal: signal,
    onFinished: () => {
      setDisabled(true);
      setActive(false);
    },
  };

  return (
    <Space vertical>
      <Space>
        <Button
          type="primary"
          disabled={disabled}
          onClick={() => setActive((v) => !v)}>
          {active ? '暂停' : '启动'}
        </Button>
        <Button onClick={reset}>重置</Button>
      </Space>
      {TIMING_FNS.map((t) => {
        return (
          <Space key={t}>
            <div>{t}</div>
            <NumberTransition {...props} timingFunction={t} />
          </Space>
        );
      })}
    </Space>
  );
};

export default App;
