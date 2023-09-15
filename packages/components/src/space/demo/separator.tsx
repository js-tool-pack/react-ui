/**
 * title: 插入分隔符
 * description: 可以使用 separator 参数指定 space 组件的分隔符，如果为空则不添加间隔，可以使用jsx作为分隔符。
 */

import { Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space
      separator={
        <div style={{ background: 'gray', height: '1px', width: '100%' }}></div>
      }
      vertical
    >
      <Space separator="|" tag="div" gap={20}>
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
      </Space>
      <Space
        separator={
          <div
            style={{
              background: 'var(--t-primary-bg-color)',
              height: '1em',
              width: '1px',
            }}
          ></div>
        }
        tag="div"
      >
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
        <Button type="success">bt3</Button>
      </Space>
      <Space separator={<button disabled>使用button分隔</button>} tag="div">
        <Button type="primary">bt1</Button>
        <Button type="danger">bt2</Button>
        <Button type="success">bt3</Button>
      </Space>
    </Space>
  );
};

export default App;
