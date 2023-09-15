/**
 * title: 图标按钮
 */

import { Divider, Button, Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Space>
        <Button icon={<Icons.CircleClose />} type="danger" size="small">
          Delete
        </Button>

        <Button icon={<Icons.CircleSuccess />} type="success">
          Commit
        </Button>

        <Button icon={<Icons.CircleInfo />} size="large" type="info">
          Upload
        </Button>

        <Button icon={<Icons.CircleWarning />} type="primary" size="large" />
      </Space>
      <Divider>
        <Space>
          <Space>
            <Icon>
              <Icons.Up />
            </Icon>
            icon在左侧
          </Space>
          <Divider lineColor="lime" vertical />
          <Space>
            <Icon>
              <Icons.Down />
            </Icon>
            icon在右侧
          </Space>
        </Space>
      </Divider>
      <Space>
        <Button
          icon={<Icons.CircleClose />}
          type="danger"
          size="small"
          rightIcon
        >
          Delete
        </Button>

        <Button icon={<Icons.CircleSuccess />} type="success" rightIcon>
          Commit
        </Button>

        <Button icon={<Icons.CircleInfo />} size="large" type="info" rightIcon>
          Upload
        </Button>

        <Button
          icon={<Icons.CircleWarning />}
          type="primary"
          size="large"
          rightIcon
        />
      </Space>
    </>
  );
};

export default App;
