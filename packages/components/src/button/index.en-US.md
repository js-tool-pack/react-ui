---
category: Components
title: Button
atomId: Button
nav:
  title: components
  order: 2
demo:
  cols: 2
group:
  order: 0
  title: Common
---

按钮用于开始一个即时操作。

## 何时使用

标记了一个操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/all.tsx"></code>

<!-- prettier-ignore -->
<code src="./demo/type.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/size.tsx"></code>
<code src="./demo/shape.tsx"></code>
<code src="./demo/plain.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/loading.tsx"></code>
<code src="./demo/group.tsx"></code>

## API

### Button

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `plain` -> `disabled`。

按钮的属性说明如下：

| 属性      | 说明                                                                                                                                 | 类型                                                                   | 默认值    | 版本 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------- | ---- |
| disabled  | 设置按钮失效状态                                                                                                                     | boolean                                                                | false     | --   |
| htmlType  | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | 'submit' \| 'reset' \| 'button' \| undefined                           | --        | --   |
| shape     | 设置按钮形状                                                                                                                         | 'default' \| 'none' \| 'circle' \| 'round'                             | 'default' | --   |
| size      | 设置按钮大小                                                                                                                         | 'large' \| 'medium' \| 'small'                                         | 'medium'  | --   |
| type      | 设置按钮类型                                                                                                                         | 'primary' \| 'success' \| 'info' \| 'warning' \| 'danger' \| 'default' | 'default' | --   |
| plain     | 设置按钮边框类型                                                                                                                     | boolean \| 'dashed' \| 'text'                                          | false     | --   |
| icon      | 按钮的 icon                                                                                                                          | React.ReactElement \| boolean                                          | --        | --   |
| rightIcon | icon 放置在右侧，默认在左侧                                                                                                          | boolean                                                                | --        | --   |
| loading   | 显示加载状态                                                                                                                         | boolean                                                                | --        | --   |
| onClick   | 点击按钮时的回调                                                                                                                     | (event: MouseEvent) => void                                            | --        | --   |
| attrs     | 原生 button 的其他所有属性对象                                                                                                       | Partial\<React.ButtonHTMLAttributes\<HTMLButtonElement>>               | --        | --   |

### ButtonGroup

按钮组的属性说明如下：

| 属性 | 说明                                                                                                                                                                                                                                                            | 类型                           | 默认值 | 版本 |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------ | ---- |
| size | 设置按钮大小；<br /> **size 优先级： ButtonGroup props size > Button props size > ButtonContext size；** <br /> tips: 由于 size 覆盖需要复制子组件，若是子组件是 Provider 还会复制 Provider， 理论上没直接用 Provider 性能好，推荐直接使用 Provider 设置 size。 | 'large' \| 'medium' \| 'small' | --     |      |

支持原生 div 的其他所有属性。
