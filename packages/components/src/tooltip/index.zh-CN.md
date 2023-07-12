---
category: Components
title: Tooltip 文字提示
atomId: Tooltip
demo:
  cols: 1
group:
  title: 反馈
---

文字提示气泡框。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>

## API

Tooltip 的属性说明如下：

| 属性     | 说明                                | 类型            | 默认值 | 版本 |
| -------- | ----------------------------------- | --------------- | ------ | ---- |
| title    | Tooltip 显示内容                    | React.ReactNode | --     | --   |
| children | 触发 Tooltip 显示的目标(必填)       | React.ReactNode | --     | --   |
| ...      | 其余属性见 [Popover](./popover#api) | -               | -      | --   |

组件根元素支持原生 HTML 的其他所有属性。
