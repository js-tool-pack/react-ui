---
category: Components
title: Calendar 日历
atomId: Calendar
demo:
  cols: 1
group:
  title: 数据展示
---

Calendar 日历。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/date-cell.tsx"></code>
<code src="./demo/header.tsx"></code>
<code src="./demo/week-start.tsx"></code>

## API

Calendar 的属性说明如下：

| 属性     | 说明                       | 类型                                            | 默认值     | 版本 |
| -------- | -------------------------- | ----------------------------------------------- | ---------- | ---- |
| value    | 选中的日期                 | Date                                            | new Date() | --   |
| onChange | 当选中的日期变化触发的回调 | (value: Date) => void                           | --         | --   |
| dateCell | 自定义渲染格子内容         | (date: Date) => React.ReactNode                 | --         | --   |
| header   | 头部显示或隐藏             | boolean                                         | true       | --   |
| firstDay | 星期的第一天               | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6                 | 0          | --   |
| attrs    | html 标签属性              | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --         | --   |
