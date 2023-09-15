/**
 * title: 所有的icon
 * description: 展示组件库内所有的icon。
 */

import {
  useMessageHolder,
  Tooltip,
  Button,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import { Clipboard as ClipboardTool } from '@tool-pack/bom';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const copy = (iconName: string) => {
    const content = `<Icon><Icons.${iconName} /></Icon>`;
    ClipboardTool.copy(content).then(() =>
      message.success(
        <div>
          <Button
            style={{ marginRight: '10px' }}
            type="warning"
            size="small"
            disabled
          >
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
          <Tooltip destroyOnHide title={k} key={k}>
            <Icon attrs={{ onClick: () => copy(k) }}>
              {React.createElement(Icons[k as keyof typeof Icons])}
            </Icon>
          </Tooltip>
        ))}
      </Space>
    </>
  );
};

export default App;
