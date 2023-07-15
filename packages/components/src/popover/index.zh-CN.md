---
category: Components
title: Popover 气泡弹框
atomId: Popover
demo:
  cols: 1
group:
  title: 反馈
---

Popover 气泡弹框。

## 与 Tooltip 的区别

功能大体上没区别，甚至能混用，但有语义上的区别。

- Tooltip 更多承担的是 html 标签上 title 的作用，虽然也能作为弹出操作，但是不符合语义
- 超出了 Tooltip 职能的弹出操作都可以使用 Popover

:::info{title=tips}
通常来说：Tooltip 显示文字就好，且只做展示用； Popover 做的不仅仅只是显示文字，且带操作。
:::

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/placement.tsx"></code>
<code src="./demo/trigger.tsx"></code>
<code src="./demo/scroll.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/appendTo.tsx"></code>

## API

Popover 的属性说明如下：

| 属性      | 说明                                           | 类型                          | 默认值              | 版本 |
| --------- | ---------------------------------------------- | ----------------------------- | ------------------- | ---- |
| content   | Popover 显示内容                               | React.ReactNode               | --                  | --   |
| children  | 触发 Popover 显示的目标(必填)                  | React.ReactNode               | --                  | --   |
| placement | 同 [WordBalloon](/components/word-balloon#api) |                               | 'top'               | --   |
| showArrow | 同 [WordBalloon](/components/word-balloon#api) | boolean                       | true                | --   |
| trigger   | 触发显示的方式                                 | 'hover' \| 'click' \| 'focus' | 'hover'             | --   |
| disabled  | 禁用任何触发显示操作                           | boolean                       | false               | --   |
| offset    | Popover 窗体偏移量 (px)                        | number                        | 10                  | --   |
| visible   | 手动控制 Popover 的显示与隐藏                  | boolean                       | --                  | --   |
| appendTo  | Popover 窗体插入指定的 html 标签中             | () => HTMLElement             | () => document.body | --   |

组件根元素支持原生 HTML 的其他所有属性。