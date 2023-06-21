---
category: Components
title: Divider
subtitle: 分割线
demo:
  cols: 2
group:
  title: 布局
---

Divider 分割线。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/text.tsx"></code>
<code src="./demo/style.tsx"></code>
<code src="./demo/vertical.tsx"></code>

## API

Divider 的属性说明如下：

| 属性      | 说明         | 类型                               | 默认值   | 版本 |
| --------- | ------------ | ---------------------------------- | -------- | ---- |
| vertical  | 是否垂直分割 | boolean                            | false    | --   |
| lineStyle | 线条类型     | React.CSSProperties['borderStyle'] | 'solid'  | --   |
| lineColor | 线条颜色     | React.CSSProperties['borderColor'] | 预设颜色 | --   |
| lineWidth | 线条宽度     | React.CSSProperties['borderWidth'] | '1px'    | --   |
| placement | 文案所在位置 | 'left' \| 'center' \| 'right'      | 'center' | --   |

支持原生 HTML 的其他所有属性，不在表格内的属性全部都会传给组件的根元素。
