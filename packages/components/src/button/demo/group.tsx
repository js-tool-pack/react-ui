/**
 * title: 按钮组
 */

import React from 'react';
import {
  Button,
  Icons,
  ButtonGroup,
  ButtonContext,
  Space,
  Icon,
} from '@tool-pack/react-ui';

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
          size: 'small',
          plain: true,
          onClick: () => alert('click'),
        }}>
        <ButtonGroup size="large">{btns}</ButtonGroup>
      </ButtonContext.Provider>

      <ButtonGroup>
        <ButtonContext.Provider value={{ size: 'large', type: 'primary' }}>
          <Button shape="round" icon={<Icons.CircleClose />}>
            Delete
          </Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button>Upload</Button>
          <Button shape="round" icon={<Icons.CircleWarning />} />
        </ButtonContext.Provider>
      </ButtonGroup>

      <ButtonGroup size="large">
        <ButtonContext.Provider value={{ type: 'danger' }}>
          <Button icon={<Icons.CircleClose />}>Delete</Button>
          <Button icon={<Icons.CircleSuccess />}>Commit</Button>
          <Button>Upload</Button>
          <Button plain="dashed" shape="round" icon={<Icons.CircleWarning />} />
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
          <Button disabled icon={<Icons.CircleSuccess />}>
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
        </ButtonContext.Provider>
      </ButtonGroup>
    </Space>
  );
};

export default App;
