---
category: Components
title: Select
atomId: Select
demo:
  cols: 2
group:
  title: Data Input
---

Select 选择器。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/multiple.tsx"></code>
<code src="./demo/size.tsx"></code>
<code src="./demo/clear.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/filter.tsx"></code>
<code src="./demo/group.tsx"></code>
<code src="./demo/max-tag-count.tsx"></code>
<code src="./demo/custom-render.tsx"></code>
<code src="./demo/remote.tsx"></code>
<code src="./demo/status.tsx"></code>
<code src="./demo/slots.tsx"></code>
<code src="./demo/controller.tsx"></code>

## API

### SelectProps

| 属性              | 说明                                                                                        | 类型                                                               | 默认值    | 版本 |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------- | ---- |
| multiple          | 多选                                                                                        | boolean                                                            | --        | --   |
| value             | 指定当前选中的条目，多选时为一个数组                                                        | React.Key[] \| React.Key                                           | --        | --   |
| size              | 尺寸                                                                                        | 'small' \| 'medium' \| 'large'                                     | 'medium'  | --   |
| options           | 选项                                                                                        | (SelectOption \| SelectOptionGroup \| SelectDivider)[]             | --        | --   |
| disabled          | 禁用                                                                                        | boolean                                                            | --        | --   |
| clearable         | 显示清理按钮                                                                                | boolean                                                            | --        | --   |
| loading           | 加载中                                                                                      | boolean                                                            | --        | --   |
| placeholder       | 提示信息                                                                                    | string                                                             | 'select'  | --   |
| status            | 验证状态                                                                                    | 'warning' \| 'error'                                               | --        | --   |
| onFocus           | focus 回调                                                                                  | () => void                                                         | --        | --   |
| onBlur            | blur 回调                                                                                   | () => void                                                         | --        | --   |
| onClear           | 清理全部已选时的回调                                                                        | () => void                                                         | --        | --   |
| onSelect          | 选中一个选项时的回调                                                                        | (option: SelectOption) => void;                                    | --        | --   |
| onChange          | 选中的结果变化时的回调                                                                      | (value: React.Key[] \| React.Key, options: SelectOption[]) => void | --        | --   |
| maxTagCount       | 当 multiple 为 true 时，限定展示 tag 的数量，多的会收起来                                   | number                                                             | --        | --   |
| filterable        | 过滤输入开关                                                                                | boolean                                                            | --        | --   |
| filter            | 默认过滤选项 label 文字，传入 filter 后可自定义过滤方式；可脱离 filterable 使用             | (pattern: string, option: SelectOption) => boolean;                | --        | --   |
| ignoreComposition | 忽略输入法 Composition 状态                                                                 | boolean                                                            | true      | --   |
| remote            | 是否异步获取选项。如果开启了，那么 filter 不会对 options 生效。这个时候你在全权控制 options | boolean                                                            | --        | --   |
| onSearch          | 异步获取选项时的回调                                                                        | (pattern: string) => void                                          | --        | --   |
| header            | 窗体顶部插槽                                                                                | React.ReactNode                                                    | --        | --   |
| footer            | 窗体底部插槽                                                                                | React.ReactNode                                                    | --        | --   |
| empty             | 选项为空时显示的内容                                                                        | React.ReactNode                                                    | 'No Data' | --   |
| icon              | 右侧图标插槽                                                                                | React.ReactNode                                                    | --        | --   |
| controllerRef     | 控制器                                                                                      | React.Ref\<SelectControllerRef\>                                   | --        | --   |
| attrs             | html 标签属性                                                                               | Partial\<React.HTMLAttributes\<HTMLDivElement>>                    | --        | --   |

其他属性见 [Popover](./popover#api) 组件

### SelectControllerRef

| 属性  | 说明     | 类型       | 版本 |
| ----- | -------- | ---------- | ---- |
| focus | 获取焦点 | () => void | --   |
| blur  | 移除焦点 | () => void | --   |

### SelectOption

| 属性     | 说明                       | 类型                                                                               | 默认值 | 版本 |
| -------- | -------------------------- | ---------------------------------------------------------------------------------- | ------ | ---- |
| type     | 类型                       | 'option'                                                                           | --     | --   |
| value    | 对应唯一值                 | React.Key                                                                          | --     | --   |
| label    | tag 或者 option 显示的内容 | React.ReactNode \| ((selected: boolean, option: SelectOption) =\> React.ReactNode) | --     | --   |
| disabled | 禁用                       | boolean                                                                            | --     | --   |
| attrs    | html 标签属性              | Partial\<React.HTMLAttributes\<HTMLDivElement>>                                    | --     | --   |

### SelectOptionGroup

选项组属性。

| 属性     | 说明          | 类型                                                   | 默认值 | 版本 |
| -------- | ------------- | ------------------------------------------------------ | ------ | ---- |
| type     | 类型          | 'group'                                                | --     | --   |
| key      | 唯一 key      | React.Key                                              | --     | --   |
| children | 子选项        | (SelectOption \| SelectOptionGroup \| SelectDivider)[] | --     | --   |
| attrs    | html 标签属性 | Partial\<React.HTMLAttributes\<HTMLDivElement>>        | --     | --   |

### SelectDivider

分割线属性。

| 属性 | 说明     | 类型      | 默认值 | 版本 |
| ---- | -------- | --------- | ------ | ---- |
| type | 类型     | 'divider' | --     | --   |
| key  | 唯一 key | React.Key | --     | --   |

其他属性见 [Divider](./divider#api) 组件
