/**
 * title: 外部控制
 */

import { useMessageHolder, Button, Input, Space } from '@tool-pack/react-ui';
import React, { useRef } from 'react';

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, holder] = useMessageHolder();
  return (
    <Space>
      {holder}
      <Button
        onClick={() => {
          const input = inputRef.current;
          if (!input) return;
          input.focus();
          setTimeout(() => input.blur(), 2000);
        }}
      >
        聚焦并且 2 秒后失效
      </Button>
      <Input
        attrs={{
          onFocus: () => message.success('focus'),
          onBlur: () => message.error('blur'),
        }}
        rootAttrs={{ style: { flex: 1 } }}
        placeholder="input"
        ref={inputRef}
        clearable
      />
    </Space>
  );
};

export default App;
