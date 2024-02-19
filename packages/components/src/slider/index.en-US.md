---
category: Components
title: Slider
atomId: Slider
demo:
  cols: 2
group:
  title: Data Input
---

Slider 滑块。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/reverse.tsx"></code>
<code src="./demo/step.tsx"></code>
<code src="./demo/tooltip.tsx"></code>
<code src="./demo/formatter.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/keyboard.tsx"></code>
<code src="./demo/vertical.tsx"></code>
<code src="./demo/range.tsx"></code>
<code src="./demo/marks.tsx"></code>
<code src="./demo/step-mark.tsx"></code>
<code src="./demo/ranges.tsx"></code>
<code src="./demo/keep-range-sorted.tsx"></code>

## API

Slider 的属性说明如下：

| 属性            | 说明                                                                                                                            | 类型                                                         | 默认值 | 版本 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ | ---- |
| value           | 当前值，当值类型为数组时为范围选择                                                                                              | number[]                                                     | 0      | --   |
| max             | 最大值                                                                                                                          | number                                                       | 100    | --   |
| min             | 最小值                                                                                                                          | number                                                       | 0      | --   |
| marks           | 刻度标记，key 的类型必须为 number 且取值在闭区间 \[min, max\] 内，每个标签可以单独设置样式                                      | Record<number,{ label: React.ReactNode; reverse?: boolean }> | --     | --   |
| step            | 步长。当 step 为 'mark' 并且 marks 不为空时，步长为 marks 的 key 值；当 step 为 number 时不能小于 0                             | number \| 'mark'                                             | 1      | --   |
| reverse         | 反向                                                                                                                            | boolean                                                      | --     | --   |
| disabled        | 禁用                                                                                                                            | boolean                                                      | --     | --   |
| keyboard        | 可以使用键盘上的上下左右箭头控制滑块的增减                                                                                      | boolean                                                      | true   | --   |
| vertical        | 垂直排列                                                                                                                        | boolean                                                      | --     | --   |
| tooltip         | 设置 tooltip 的显隐                                                                                                             | boolean                                                      | true   | --   |
| tooltipProps    | tooltip 参数，见 [Tooltip](./tooltip#api)                                                                                       | --                                                           | --     | --   |
| formatter       | 格式化 tooltip 文案                                                                                                             | (value: number) => React.ReactNode                           | --     | --   |
| onChange        | 当 value 变化时触发的回调                                                                                                       | (value: number[] \| number) => void;                         | --     | --   |
| keepRangeSorted | 当 value 为数组并设置 keepRangeSorted 为 true时，当拖动的值小于前面的值会推动前面的把手，当拖动的值大于后面的值会推动后面的把手 | boolean                                                      | --     | --   |
| attrs           | html 标签属性                                                                                                                   | Partial\<React.HTMLAttributes\<HTMLDivElement>>              | --     | --   |
