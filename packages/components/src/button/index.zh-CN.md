---
category: Components
title: Button 按钮
atomId: Button
demo:
  cols: 2
group:
  title: 通用
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

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `plain` -> `disabled`。

按钮的属性说明如下：

| 属性       | 说明                                                                                                                                 | 类型                                                                   | 默认值    | 版本 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------- | ---- |
| classNames | 语义化结构 class                                                                                                                     | Record<SemanticDOM, string>                                            | -         |      |
| disabled   | 设置按钮失效状态                                                                                                                     | boolean                                                                | false     |      |
| htmlType   | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                                                 | -         |      |
| shape      | 设置按钮形状                                                                                                                         | `default` \| `none` \| `circle` \| `round`                             | `default` |      |
| size       | 设置按钮大小                                                                                                                         | `large` \| `medium` \| `small`                                         | `medium`  |      |
| styles     | 语义化结构 style                                                                                                                     | Record<SemanticDOM, CSSProperties>                                     | -         |      |
| type       | 设置按钮类型                                                                                                                         | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` |      |
| plain      | 设置按钮边框类型                                                                                                                     | boolean \| `dashed` \| `text`                                          | false     |      |
| onClick    | 点击按钮时的回调                                                                                                                     | (event: MouseEvent) => void                                            | -         |      |

支持原生 button 的其他所有属性。