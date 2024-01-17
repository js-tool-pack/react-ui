---
category: Components
title: DatePicker 日期选择器
atomId: DatePicker
demo:
  cols: 2
group:
  title: 数据录入
---

DatePicker 日期选择器。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/format.tsx"></code>
<code src="./demo/types.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/range.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/date-disabled.tsx"></code>
<code src="./demo/shortcut.tsx"></code>

## API

DatePicker 的属性说明如下：

| 属性         | 说明                                           | 类型                                                       | 默认值 | 版本 |
| ------------ | ---------------------------------------------- | ---------------------------------------------------------- | ------ | ---- |
| type         | 类型                                           | 'datetime' \| 'month' \| 'year' \| 'date' \| 'time'        | 'date' | --   |
| range        | 范围选取                                       | boolean                                                    | false  | --   |
| visible      | 展开选项                                       | boolean                                                    | --     | --   |
| onChange     | 选取后的回调                                   | (value: RangeValueType \| Date) => void                    | --     | --   |
| value        | 值                                             | \[start: Date, end: Date\] \| Date                         | --     | --   |
| icon         | 图标                                           | React.ReactNode                                            | --     | --   |
| disabled     | 禁用                                           | boolean                                                    | --     | --   |
| format       | 格式化                                         | string                                                     | --     | --   |
| dateDisabled | 日期禁用，见[Calendar](./calendar#api)         | --                                                         | --     | --   |
| dateCell     | 自定义日期单元格，见[Calendar](./calendar#api) | --                                                         | --     | --   |
| shortcuts    | 快捷方式                                       | {value: RangeValueType \| Date;label: React.ReactNode;}[\] | --     | --   |
| attrs        | html 标签属性                                  | Partial\<React.HTMLAttributes\<HTMLLabelElement>>          | --     | --   |

其他说明。
