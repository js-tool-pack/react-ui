/**
 * title: 图标按钮
 */

import React from 'react';
import { Button, Icons, Space, Divider, Icon } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <>
      <Space>
        <Button size="small" type="danger" icon={<Icons.CircleClose />}>
          Delete
        </Button>

        <Button type="success" icon={<Icons.CircleSuccess />}>
          Commit
        </Button>

        <Button type="info" size="large" icon={<Icons.CircleInfo />}>
          Upload
        </Button>

        <Button type="primary" size="large" icon={<Icons.CircleWarning />} />
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
          size="small"
          type="danger"
          icon={<Icons.CircleClose />}
          rightIcon>
          Delete
        </Button>

        <Button type="success" icon={<Icons.CircleSuccess />} rightIcon>
          Commit
        </Button>

        <Button type="info" size="large" icon={<Icons.CircleInfo />} rightIcon>
          Upload
        </Button>

        <Button
          type="primary"
          size="large"
          icon={<Icons.CircleWarning />}
          rightIcon
        />
      </Space>
    </>
  );
};

export default App;
