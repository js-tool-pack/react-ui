/**
 * title: 设置文案
 * description: 可以在分割线上自定义文本内容；自定义文本内容只可以在水平分割线上起作用；
 *   可以使用 placement 设置文案所在位置，支持left、center、right三个选项。
 */

import { Divider, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space vertical fill>
      <p>
        Are you ok? <br />
        I'm fine, thank you. And you?
      </p>
      <Divider placement="left">一条华丽的分割线</Divider>
      <p>
        What's your name? <br />
        What? <br />
      </p>
      <Divider>一条华丽的分割线</Divider>
      <p>
        What's your name? <br />
        Tony
      </p>
      <Divider placement="center">一条华丽的分割线</Divider>
      <p>
        **** you, Tony. <br />
        What's your name?
      </p>
      <Divider placement="right">一条华丽的分割线</Divider>
      <p>
        Ezekiel. <br />
        **** you~
      </p>
    </Space>
  );
};

export default App;
