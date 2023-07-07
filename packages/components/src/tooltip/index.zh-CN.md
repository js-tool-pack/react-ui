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
<code src="./demo/placement.tsx"></code>
<code src="./demo/trigger.tsx"></code>
<code src="./demo/scroll.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/appendTo.tsx"></code>

## API

Tooltip 的属性说明如下：

| 属性      | 说明                                           | 类型                          | 默认值              | 版本 |
| --------- | ---------------------------------------------- | ----------------------------- | ------------------- | ---- |
| title     | Tooltip 显示内容                               | React.ReactNode               | --                  | --   |
| children  | 触发 Tooltip 显示的目标(必填)                  | React.ReactNode               | --                  | --   |
| placement | 同 [WordBalloon](/components/word-balloon#api) |                               | 'top'               | --   |
| showArrow | 同 [WordBalloon](/components/word-balloon#api) | boolean                       | true                | --   |
| trigger   | 触发显示的方式                                 | 'hover' \| 'click' \| 'focus' | 'hover'             | --   |
| disabled  | 禁用任何触发显示操作                           | boolean                       | false               | --   |
| offset    | Tooltip 窗体偏移量 (px)                        | number                        | 10                  | --   |
| visible   | 手动控制 Tooltip 的显示与隐藏                  | boolean                       | --                  | --   |
| appendTo  | Tooltip 窗体插入指定的 html 标签中             | () => HTMLElement             | () => document.body | --   |

组件根元素支持原生 HTML 的其他所有属性。
