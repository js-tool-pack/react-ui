# @tool-pack/react-ui

[![NPM version](https://img.shields.io/npm/v/@tool-pack/react-ui.svg?style=flat)](https://npmjs.org/package/@tool-pack/react-ui)
[![NPM downloads](http://img.shields.io/npm/dm/@tool-pack/react-ui.svg?style=flat)](https://npmjs.org/package/@tool-pack/react-ui)

🎨 一个普普通通、面向过去(大家都在面向未来，无奈只能面向过去 🤘)的 React UI 组件库

## Usage

```bash
$ pnpm add @tool-pack/react-ui -S
```

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

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm docs:dev
```

## LICENSE

MIT
