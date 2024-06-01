---
category: Components
title: Draggable 拖拽
atomId: Draggable
demo:
  cols: 2
group:
  title: 通用
---

Draggable 拖拽。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/draggable.tsx"></code>
<code src="./demo/tag.tsx"></code>

## API

Draggable 的属性说明如下：

| 属性     | 说明             | 类型                                            | 默认值 | 版本 |
| -------- | ---------------- | ----------------------------------------------- | ------ | ---- |
| list     | 列表对应的数组   | any[]                                           | --     | --   |
| onChange | 列表改动回调     | (list: T[]) => void                             | --     | --   |
| tag      | 组件 html 根元素 | string \| null                                  | 'div'  | --   |
| attrs    | html 标签属性    | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --     | --   |

其他说明。
