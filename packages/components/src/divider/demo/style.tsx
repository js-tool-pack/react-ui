/**
 * title: 设置线条样式
 * description: lineStyle 设置线条类型，跟css border-style同一类型；lineColor 设置线条颜色; lineWidth 设置线条宽度。
 */

import React from 'react';
import { Divider, Space } from '@tool-pack/react-ui';

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
      <Divider lineStyle="dashed" lineColor="blue">
        一条华丽的分割线
      </Divider>
      <p>
        What's your name? <br />
        Tony
      </p>
      <Divider
        placement="center"
        lineStyle="dotted"
        lineColor="red"
        lineWidth="10px">
        <div style={{ color: 'blue' }}>一条华丽的分割线</div>
      </Divider>
      <p>
        **** you, Tony. <br />
        What's your name?
      </p>
      <Divider placement="right" lineColor="lime">
        一条华丽的分割线
      </Divider>
      <p>
        Ezekiel. <br />
        **** you~
      </p>
    </Space>
  );
};

export default App;
