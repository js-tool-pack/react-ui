/**
 * title: 按钮组
 */

import React from 'react';
import { Button, Icons, ButtonGroup, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const btns = [
    <Button key={1} size="small" type="danger" icon={<Icons.CircleClose />}>
      Delete
    </Button>,
    <Button key={2} type="success" icon={<Icons.CircleSuccess />}>
      Commit
    </Button>,
    <Button key={3} type="info" size="large" icon={<Icons.CircleInfo />}>
      Upload
    </Button>,
    <Button
      key={4}
      type="primary"
      size="large"
      icon={<Icons.CircleWarning />}
    />,
  ];
  return (
    <Space vertical>
      <ButtonGroup size="small">{btns}</ButtonGroup>
      <ButtonGroup size="medium">{btns}</ButtonGroup>
      <ButtonGroup>{btns}</ButtonGroup>
      <ButtonGroup size="large">{btns}</ButtonGroup>
      <ButtonGroup
        size="large"
        buttonProps={{
          size: 'small',
          plain: true,
          onClick: () => alert('click'),
        }}>
        {btns}
      </ButtonGroup>
      <ButtonGroup buttonProps={{ size: 'large', type: 'primary' }}>
        <Button shape="round" icon={<Icons.CircleClose />}>
          Delete
        </Button>
        <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        <Button>Upload</Button>
        <Button shape="round" icon={<Icons.CircleWarning />} />
      </ButtonGroup>
      <ButtonGroup size="large" buttonProps={{ type: 'danger' }}>
        <Button icon={<Icons.CircleClose />}>Delete</Button>
        <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        <Button>Upload</Button>
        <Button plain="dashed" shape="round" icon={<Icons.CircleWarning />} />
      </ButtonGroup>

      <ButtonGroup buttonProps={{ plain: true }}>
        <Button icon={<Icons.CircleClose />}>Delete</Button>
        <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        <Button icon={<Icons.CircleInfo />}>Upload</Button>
        <Button icon={<Icons.CircleWarning />} />
      </ButtonGroup>
      <ButtonGroup buttonProps={{ type: 'success', plain: 'dashed' }}>
        <Button icon={<Icons.CircleClose />}>Delete</Button>
        <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        <Button icon={<Icons.CircleInfo />}>Upload</Button>
        <Button icon={<Icons.CircleWarning />} />
      </ButtonGroup>
      <ButtonGroup buttonProps={{ type: 'warning', plain: 'text' }}>
        <Button icon={<Icons.CircleClose />}>Delete</Button>
        <Button icon={<Icons.CircleSuccess />}>Commit</Button>
      </ButtonGroup>
      <ButtonGroup buttonProps={{ type: 'info' }}>
        <Button icon={<Icons.CircleClose />}>Delete</Button>
        <Button icon={<Icons.CircleSuccess />}>Commit</Button>
      </ButtonGroup>
      <ButtonGroup buttonProps={{ type: 'primary', shape: 'none' }}>
        <Button icon={<Icons.CircleClose />}>Delete</Button>
        <Button disabled icon={<Icons.CircleSuccess />}>
          Commit
        </Button>
        <Button icon={<Icons.CircleInfo />}>Upload</Button>
        <Button icon={<Icons.CircleWarning />} />
      </ButtonGroup>
      <ButtonGroup
        buttonProps={{
          type: 'primary',
          disabled: true,
          rightIcon: true,
          shape: 'round',
        }}>
        <Button icon={<Icons.CircleClose />}>Delete</Button>
        <Button disabled icon={<Icons.CircleSuccess />}>
          Commit
        </Button>
        <Button icon={<Icons.CircleInfo />}>Upload</Button>
        <Button icon={<Icons.CircleWarning />} />
      </ButtonGroup>
    </Space>
  );
};

export default App;
