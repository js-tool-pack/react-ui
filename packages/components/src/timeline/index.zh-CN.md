---
category: Components
title: Timeline 时间线
atomId: Timeline
demo:
  cols: 2
group:
  title: 数据展示
---

Timeline 时间线。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/status.tsx"></code>
<code src="./demo/reverse.tsx"></code>
<code src="./demo/placement-right.tsx"></code>
<code src="./demo/placement-alternate.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/line-type.tsx"></code>
<code src="./demo/children.tsx"></code>

## API

### Timeline

Timeline 的属性说明如下：

| 属性      | 说明          | 类型                                            | 默认值 | 版本 |
| --------- | ------------- | ----------------------------------------------- | ------ | ---- |
| placement | 排列位置      | 'alternate' \| 'right' \| 'left'                | 'left' | --   |
| reverse   | 逆序          | boolean                                         | --     | --   |
| items     | 内容          | TimelineItemProps[]                             | --     | --   |
| attrs     | html 标签属性 | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --     | --   |

### TimelineItem

TimelineItem 的属性说明如下：

| 属性     | 说明       | 类型                                                     | 默认值    | 版本 |
| -------- | ---------- | -------------------------------------------------------- | --------- | ---- |
| content  | 内容       | React.ReactNode                                          | --        | --   |
| title    | 标题       | React.ReactNode                                          | --        | --   |
| icon     | 自定义图标 | React.ReactNode                                          | --        | --   |
| time     | 时间       | string                                                   | --        | --   |
| lineType | 线条类型   | React.CSSProperties\['borderInlineEndStyle'\]            | 'solid'   | --   |
| type     | 状态分类   | 'default' \| 'info' \| 'success' \| 'warning' \| 'error' | 'default' | --   |
