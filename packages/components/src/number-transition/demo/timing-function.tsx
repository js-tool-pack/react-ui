/**
 * title: 动画曲线函数
 * description: 类似 css 的 transition-timing-function 属性；
 *   目前支持 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'，默认为 'ease'。
 */

import {
  NumberTransitionProps,
  NumberTransition,
  TIMING_FNS,
  Button,
  Space,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

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
    onFinished: () => {
      setDisabled(true);
      setActive(false);
    },
    resetSignal: signal,
    duration: 10000,
    active,
    to: 25,
  };

  return (
    <Space vertical>
      <Space>
        <Button
          onClick={() => setActive((v) => !v)}
          disabled={disabled}
          type="primary"
        >
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
