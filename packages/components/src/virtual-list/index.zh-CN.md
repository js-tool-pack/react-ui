---
category: Components
title: VirtualList 虚拟列表
atomId: VirtualList
demo:
  cols: 2
group:
  title: 数据展示
---

VirtualList 虚拟列表。

当列表数据量大的时候，使用该组件能够提高长列表的性能。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/dynamic-size.tsx"></code>

## API

VirtualList 的属性说明如下：

| 属性  | 说明               | 类型                                         | 默认值 | 版本 |
| ----- | ------------------ | -------------------------------------------- | ------ | ---- |
| tag   | 组件根元素的标签名 | keyof HTMLElementTagNameMap                  | 'div'  | --   |
| attrs | html 标签属性      | Partial\<React.HTMLAttributes\<HTMLElement>> | --     | --   |

其他说明。
