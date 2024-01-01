---
category: Components
title: Picker 拾取器
atomId: Picker
demo:
  cols: 2
group:
  title: 数据录入
---

Picker 拾取器，可用于时间选择，地区选择等。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/format.tsx"></code>
<code src="./demo/panel.tsx"></code>

## API

### PickerProps

Picker 的属性说明如下：

| 属性                        | 说明                                                          | 类型                                            | 默认值 | 版本 |
| --------------------------- | ------------------------------------------------------------- | ----------------------------------------------- | ------ | ---- |
| format                      | 格式化显示选中内容                                            | (value: OptionValueType[]) => React.ReactNode   | --     | --   |
| panelAttrs                  | 弹窗面板 html 标签属性                                        | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --     | --   |
| inputPopoverProps           | InputPopover 组件参数，见 [InputPopover](./input-popover#api) | Partial\<InputPopoverProps\>                    | --     | --   |
| attrs                       | html 标签属性                                                 | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --     | --   |
| 更多属性见 PickerPanelProps | --                                                            | --                                              | --     | --   |

### PickerPanelProps

PickerPanelProps 的属性说明如下：

| 属性     | 说明               | 类型                                            | 默认值 | 版本 |
| -------- | ------------------ | ----------------------------------------------- | ------ | ---- |
| options  | 选项               | Array<PickerOption[]>                           | --     | --   |
| value    | 选中的值           | (string \| number)[]                            | --     | --   |
| onChange | 值变化时的回调函数 | (value: OptionValueType[]) => void              | --     | --   |
| attrs    | html 标签属性      | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --     | --   |

### PickerOption

PickerOption 的属性说明如下：

| 属性  | 说明          | 类型                                            | 默认值 | 版本 |
| ----- | ------------- | ----------------------------------------------- | ------ | ---- |
| label | 显示内容      | React.ReactNode                                 | --     | --   |
| value | 选中值        | string \| number                                | --     | --   |
| attrs | html 标签属性 | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --     | --   |
