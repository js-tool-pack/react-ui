/**
 * title: 垂直分割线
 * description: 使用 vertical 设置为行内的垂直分割线，垂直分割线内的文字会丢弃。
 */

import React from 'react';
import { Divider, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space style={{ alignItems: 'initial' }} vertical>
      <div>
        Are you ok?
        <Divider lineColor="red" vertical />
        I'm fine, thank you. And you?
      </div>
      <Space separator={<Divider lineColor="blue" vertical />}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
      </Space>
      <Space separator={<Divider lineColor="blue" vertical />}>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
      </Space>
    </Space>
  );
};

export default App;
