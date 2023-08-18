# @tool-pack/react-ui

[![NPM version](https://img.shields.io/npm/v/@tool-pack/react-ui.svg?style=flat)](https://npmjs.org/package/@tool-pack/react-ui)
[![NPM downloads](http://img.shields.io/npm/dm/@tool-pack/react-ui.svg?style=flat)](https://npmjs.org/package/@tool-pack/react-ui)

🎨 一个普普通通、面向过去(大家都在面向未来，无奈只能面向过去，大家都有光明的未来 🤘)的 React UI 组件库

## 为什么要重复造轮子？

> 当告诉别人我写了一个组件库的时候，通常会有人这样问：市面上那么多组件库，为什么不直接使用已有的而是要重复造轮子呢？

其实这么问也没什么，只是因为我之前面试的时候，简历上写了会 React，然后我总是拿不出面试官信服的证据，而导致面试不了了之。

React 我真的好几年前就学了，刚开始还是学的 Class Component(那时候 hook 还没出)，但是我也确实没有 React 的项目实际开发经验，我之前好几年都是在写
Vue，虽说经验都是相通的，然而面试却总是拿不出有利的证据证明我会 React。

然后在不久前我和别的小伙伴一起在写 Vue3 的组件库，那时候我就想 Vue 写了那么久，有点腻了，为什么不换个口味弄个 React 的试试呢？

**为了证明自己，也为了练手（不至于荒废了这么个技能），该库应运而生。**

## 为什么不用 Web Component 写通用组件库？

_现在确实很多组件库使用的 Web Component 开发，号称面向未来的组件库。_

实际感受了一下，确实很方便，不管你是用 React、Vue、Selvet、Solid 之类的前端框架都能使用。

曾经也确实想要不直接转 Web Component 方式开发算了，但是这种方式跟我上面的 `为什么要重复造轮子` 原因冲突，
为了保持初心，也就忍痛放弃了这种 `面向未来` 的方式。

> 你使用 Web Component 开发组件库，我使用 React 开发组件库，他使用 Vue 开发组件库，大家都有光明的未来 🤘。

## 为什么叫 react-ui

该库我是放在 tool-pack 下的，顾名思义 tool-pack 就是一个工具包，叫 react-ui 仅仅也是因为它是为 React 写的，
如果它是 Vue 写的那么就叫 vue-ui， 以此类推。

全称是 tool-pack/react-ui，也可以叫 react ui 工具包。

既然叫工具包，那当然里面也不仅仅只有 react-ui。

> 它不需要不相干且花里胡俏的名字。

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

## 样式类型

目前的 UI 库 css

## LICENSE

MIT
