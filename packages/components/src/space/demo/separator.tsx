/**
 * title: 插入分隔符
 * description: 可以使用 separator 参数指定 space 组件的分隔符，如果为空则不添加间隔，可以使用jsx作为分隔符。
 */

import React from 'react';
import { Space, Button } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space
      vertical
      separator={
        <div style={{ background: 'gray', height: '1px', width: '100%' }}></div>
      }>
      <Space tag="div" separator="|" gap={20}>
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
      </Space>
      <Space
        tag="div"
        separator={
          <div
            style={{
              background: 'var(--t-primary-bg-color)',
              width: '1px',
              height: '1em',
            }}></div>
        }>
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
        <Button type="success">bt3</Button>
      </Space>
      <Space tag="div" separator={<button disabled>使用button分隔</button>}>
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
        <Button type="success">bt3</Button>
      </Space>
    </Space>
  );
};

export default App;
