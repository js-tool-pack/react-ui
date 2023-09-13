/**
 * title: 手动控制 focus、blur
 */

import React, { useRef } from 'react';
import type {
  SelectControllerRef,
  SelectOptionsItem,
} from '@tool-pack/react-ui';
import { Button, Select, Space, useMessageHolder } from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = [
  {
    value: 1,
    label: 'foo',
  },
  {
    value: 2,
    label: 'bar',
  },
];
const App: React.FC = () => {
  const controllerRef = useRef<SelectControllerRef>(null);
  const [message, holder] = useMessageHolder();

  return (
    <Space>
      {holder}
      <Button
        onClick={() => {
          const controller = controllerRef.current;
          if (!controller) return;
          controller.focus();
          setTimeout(controller.blur, 2000);
        }}>
        聚焦并且 2 秒后失效
      </Button>
      <Select
        onFocus={() => {
          message.success('focus');
        }}
        onBlur={() => {
          message.error('blur');
        }}
        attrs={{ style: { flex: 1 } }}
        controllerRef={controllerRef}
        placeholder="select"
        options={options}
      />
    </Space>
  );
};

export default App;
