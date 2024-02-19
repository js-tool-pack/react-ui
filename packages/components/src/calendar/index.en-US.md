---
category: Components
title: Calendar
atomId: Calendar
demo:
  cols: 1
group:
  title: Data Display
---

Calendar 日历。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/date-cell.tsx"></code>
<code src="./demo/header.tsx"></code>
<code src="./demo/week-start.tsx"></code>
<code src="./demo/date-disabled.tsx"></code>

## API

Calendar 的属性说明如下：

```typescript
type DateCell = (
  date: Date,
  attrs: Partial<React.HTMLAttributes<HTMLTableDataCellElement>>,
  status: {
    isNextMonth: boolean;
    isSelected: boolean;
    isPreMonth: boolean;
    disabled: boolean;
    isToday: boolean;
  },
) => React.ReactNode;

interface CalendarLocale {
  monthBeforeYear: boolean;
  weekDayNames: string[];
  monthNames: string[];
  today: string;
}
```

| 属性         | 说明                                       | 类型                                              | 默认值     | 版本 |
| ------------ | ------------------------------------------ | ------------------------------------------------- | ---------- | ---- |
| value        | 选中的日期                                 | Date                                              | new Date() | --   |
| today        | 今天的日期(可忽略，用于测试时固定为某一天) | Date                                              | new Date() | --   |
| month        | 日历所展示的月份                           | Date                                              | new Date() | --   |
| onChange     | 当选中的日期变化触发的回调                 | (value: Date) => void                             | --         | --   |
| dateCell     | 自定义渲染格子内容                         | 见上面 DateCell                                   | --         | --   |
| dateDisabled | 日期禁用                                   | (date: Date, value: undefined \| Date) => boolean | --         | --   |
| header       | 头部显示或隐藏                             | boolean                                           | true       | --   |
| firstDay     | 星期的第一天                               | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6                   | 0          | --   |
| locale       | 语言文本配置                               | CalendarLocale                                    | --         | --   |
| attrs        | html 标签属性                              | Partial\<React.HTMLAttributes\<HTMLDivElement>>   | --         | --   |
