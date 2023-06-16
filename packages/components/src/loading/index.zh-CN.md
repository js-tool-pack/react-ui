---
category: Components
title: Loading
subtitle: 加载中
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 通用
---

用于显示一个 loading 界面。

## 何时使用

需要等待的操作，如请求数据前显示一个 loading 界面。

在组件中我们提供了两种使用方式。

- 标签：jsx 方式。
- 函数：调用函数开启 loading。

## 基础用法

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/slot.tsx"></code>

## 渲染模式(mode)

loading 有三种渲染模式：

- global 全局模式
- `wrap` 包裹模式
- `insert` 插入模式

其中 `wrap` 和 `insert`需要传入 mode，global 需要 children 为空。

<!-- prettier-ignore -->
<code src="./demo/global.tsx"></code>
<code src="./demo/insert.tsx"></code>
<code src="./demo/wrap.tsx"></code>

## 函数式调用

loading 有三种函数式调用方式：

- showLoading
- useLoading
- useLoadingHolder

<!-- prettier-ignore -->
<code src="./demo/showLoading.tsx"></code>
<code src="./demo/useLoading.tsx"></code>
<code src="./demo/useLoadingHolder.tsx"></code>

## API

loading 的属性说明如下：

visible: boolean;
closeOnClick?: boolean;
text?: React.ReactNode;
icon?: React.ReactNode;
background?: string;
color?: string;
className?: string;
zIndex?: number;
mode?: 'insert' | 'wrap';
children?: React.ReactNode;
onLeave?: () => void;
onClose?: () => void;

className: '',
background: 'var(--t-mask-bg-color)',
color: 'var(--t-text-color)',
mode: 'insert',
zIndex: 100,
text: 'loading...',
icon: LoadingIcon,

| 属性         | 说明                         | 类型                        | 默认值                   | 版本 |
| ------------ | ---------------------------- | --------------------------- | ------------------------ | ---- |
| classNames   | 语义化结构 class             | Record<SemanticDOM, string> | -                        |      |
| visible      | 开关                         | boolean                     | false                    |      |
| closeOnClick | 点击遮罩后关闭按钮           | boolean                     | false                    |      |
| color        | 字体和 icon 的颜色           | string                      | `var(--t-text-color)`    |      |
| background   | 遮罩背景色                   | string                      | `var(--t-mask-bg-color)` |      |
| icon         | 设置按钮的图标               | ReactNode                   | 默认图标                 |      |
| text         | 设置按钮的图标               | ReactNode                   | `loading...`             |      |
| zIndex       | css z-index                  | number                      | 100                      |      |
| mode         | 设置 loading 的包裹模式      | `insert` \| `wrap`          | `insert`                 |      |
| onLeave      | loading 关闭动画完成后的回调 | () => void                  | -                        |      |
| onClose      | loading 内部关闭后的回调     | () => void                  | -                        |      |
