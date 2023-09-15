/**
 * title: 按钮组
 */

import {
  ButtonContext,
  ButtonGroup,
  Button,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const btns = [
    <Button icon={<Icons.CircleClose />} type="danger" size="small" key={1}>
      Delete
    </Button>,
    <Button icon={<Icons.CircleSuccess />} type="success" key={2}>
      Commit
    </Button>,
    <Button icon={<Icons.CircleInfo />} size="large" type="info" key={3}>
      Upload
    </Button>,
    <Button
      icon={<Icons.CircleWarning />}
      type="primary"
      size="large"
      key={4}
    />,
  ];
  return (
    <Space vertical>
      <ButtonGroup size="small">
        <ButtonContext.Provider value={{ size: 'large' }}>
          {btns}
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup size="medium">{btns}</ButtonGroup>
      <ButtonGroup>{btns}</ButtonGroup>
      <ButtonGroup size="large">{btns}</ButtonGroup>
      <ButtonContext.Provider
        value={{
          onClick: () => alert('click'),
          size: 'small',
          plain: true,
        }}
      >
        <ButtonGroup size="large">{btns}</ButtonGroup>
      </ButtonContext.Provider>

      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'primary', size: 'large' }}>
          <Button icon={<Icons.CircleClose />} shape="round">
            Delete
          </Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button>Upload</Button>
          <Button icon={<Icons.CircleWarning />} shape="round" />
        </ButtonContext.Provider>
      </ButtonGroup>

      <ButtonGroup size="large">
        <ButtonContext.Provider value={{ type: 'danger' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button>Upload</Button>
          <Button icon={<Icons.CircleWarning />} plain="dashed" shape="round" />
        </ButtonContext.Provider>
      </ButtonGroup>

      <ButtonGroup>
        <ButtonContext.Provider value={{ plain: true }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'success', plain: 'dashed' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'warning', plain: 'text' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'primary' }}>
          <Button>items</Button>
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
          />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'info' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider value={{ type: 'primary', shape: 'none' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />} disabled>
            Commit
          </Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonContext.Provider
          value={{
            type: 'primary',
            rightIcon: true,
            disabled: true,
            shape: 'round',
          }}
        >
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />} disabled>
            Commit
          </Button>
          <Button icon={<Icons.CircleInfo />}>Upload</Button>
          <Button icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>
    </Space>
  );
};

export default App;
