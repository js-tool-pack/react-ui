/**
 * title: 所有的icon
 * description: 展示组件库内所有的icon。
 */

import React from 'react';
import {
  Icon,
  Icons,
  Space,
  Button,
  Tooltip,
  useMessageHolder,
} from '@tool-pack/react-ui';
import { Clipboard as ClipboardTool } from '@tool-pack/bom';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const copy = (iconName: string) => {
    const content = `<Icon><Icons.${iconName} /></Icon>`;
    ClipboardTool.copy(content).then(() =>
      message.success(
        <div>
          <Button
            type="warning"
            size="small"
            disabled
            style={{ marginRight: '10px' }}>
            {content}
          </Button>
          复制成功 🎉
        </div>,
      ),
    );
  };

  return (
    <>
      <Space className="demo-icon-icons">
        {holder}
        {Object.keys(Icons).map((k) => (
          <Tooltip key={k} title={k} destroyOnHide>
            <Icon onClick={() => copy(k)}>{React.createElement(Icons[k])}</Icon>
          </Tooltip>
        ))}
      </Space>
    </>
  );
};

export default App;
