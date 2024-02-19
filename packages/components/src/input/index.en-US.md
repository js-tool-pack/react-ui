---
category: Components
title: Input
atomId: Input
demo:
  cols: 2
group:
  title: Data Input
---

Input 输入框。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/clearable.tsx"></code>
<code src="./demo/size.tsx"></code>
<code src="./demo/slots.tsx"></code>
<code src="./demo/loading.tsx"></code>
<code src="./demo/textarea.tsx"></code>
<code src="./demo/auto-size.tsx"></code>
<code src="./demo/count.tsx"></code>
<code src="./demo/password.tsx"></code>
<code src="./demo/control.tsx"></code>
<code src="./demo/status.tsx"></code>

## API

### InputProps

| 属性           | 说明                     | 类型                                                  | 默认值   | 版本 |
| -------------- | ------------------------ | ----------------------------------------------------- | -------- | ---- |
| value          | 内容                     | string                                                | --       | --   |
| size           | 尺寸                     | 'small' \| 'medium' \| 'large'                        | 'medium' | --   |
| type           | 类型                     | 'textarea' \| 'password' \| 'text'                    | 'text'   | --   |
| placeholder    | 占位文本                 | string                                                | --       | --   |
| clearable      | 显示清空按钮             | boolean                                               | --       | --   |
| loading        | 加载状态                 | boolean                                               | --       | --   |
| disabled       | 禁用                     | boolean                                               | --       | --   |
| onChange       | 内容变化时的回调         | (value: string) => void                               | --       | --   |
| showCount      | 显示文字数计数           | boolean                                               | --       | --   |
| maxLength      | 最大文字数量             | number                                                | --       | --   |
| count          | 自定义文字数计算函数     | (value: string) => number                             | --       | --   |
| countView      | 自定义文字数显示界面     | (value: string, wordCount: number) => React.ReactNode | --       | --   |
| showPasswordOn | 显示密码事件触发类型     | 'mouseDown' \| 'click'                                | 'click'  | --   |
| status         | 状态                     | 'warning' \| 'error'                                  | --       | --   |
| prefix         | 前缀                     | React.ReactNode                                       | --       | --   |
| suffix         | 后缀                     | React.ReactNode                                       | --       | --   |
| rootRef        | --                       | React.ForwardedRef\<HTMLLabelElement\>                | --       | --   |
| rootAttrs      | 组件根元素 html 标签属性 | Partial\<React.HTMLAttributes\<HTMLLabelElement>>     | --       | --   |
| attrs          | 组件 input html 标签属性 | Partial\<React.HTMLAttributes\<HTMLDivElement>>       | --       | --   |

### TextareaProps

当 `type` 为 `textarea` 时可以使用以下属性：

| 属性     | 说明       | 类型                                           | 默认值 | 版本 |
| -------- | ---------- | ---------------------------------------------- | ------ | ---- |
| rows     | 行数       | number                                         | 3      | --   |
| autoSize | 自适应尺寸 | {minRows?: number;maxRows?: number;}\| boolean | --     | --   |
