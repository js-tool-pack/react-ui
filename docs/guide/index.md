---
title: 使用方式
nav:
  title: 指南
  order: 1
---

## 安装

npm

```shell
npm install @tool-pack/react-ui --save
```

pnpm

```shell
pnpm add @tool-pack/react-ui -S
```

yarn

```shell
yarn add @tool-pack/react-ui -S
```

## 使用

```typescript jsx
import React from 'react';
import { Button, Space } from '@tool-pack/react-ui';
import '@tool-pack/react-ui/dist/index.css';

const App: React.FC = () => (
  <Space>
    <Button size="small">small</Button>
    <Button>default</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  </Space>
);

export default App;
```
