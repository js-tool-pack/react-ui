---
category: Components
title: Space 间距
atomId: Space
demo:
  cols: 2
group:
  title: 布局
---

Space 间距：用于给多个元素之间添加间距，跟其他组件库不同的是此组件的 children 不使用额外的 item 元素包裹。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/tag.tsx"></code>
<code src="./demo/gap.tsx"></code>
<code src="./demo/vertical.tsx"></code>
<code src="./demo/inline.tsx"></code>
<code src="./demo/fill.tsx"></code>
<code src="./demo/separator.tsx"></code>

## API

Space 的属性说明如下：

| 属性      | 说明                                         | 类型                                         | 默认值    | 版本 |
| --------- | -------------------------------------------- | -------------------------------------------- | --------- | ---- |
| gap       | 间距                                         | number \| string                             | `8px`     |      |
| tag       | 根元素 html 标签                             | keyof HTMLElementTagNameMap                  | `section` |      |
| vertical  | 垂直排列                                     | boolean                                      | false     |      |
| separator | 分隔符                                       | React.ReactNode                              | -         |      |
| inline    | 是否设为 inline-flex                         | boolean                                      | false     |      |
| fill      | 子元素开启 fillRatio 比例填充                | boolean                                      | false     |      |
| fillRatio | 子元素 fillRatio(百分比，\[1 - 100])比例填充 | number                                       | 100       |      |
| attrs     | 组件 html 根元素的所有属性                   | Partial\<React.HTMLAttributes\<HTMLElement>> | --        | --   |

支持原生 HTML 的其他所有属性，像一些 wrap、justify、align-items 之类的可以直接写 style。
