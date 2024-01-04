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
<code src="./demo/append-to.tsx"></code>
<code src="./demo/nest.tsx"></code>
<code src="./demo/fixed.tsx"></code>
<code src="./demo/contextmenu.tsx"></code>
<code src="./demo/delay.tsx"></code>
<code src="./demo/on-visible-change.tsx"></code>
<code src="./demo/width-by-trigger.tsx"></code>

## API

Popover 的属性说明如下：

| 属性                 | 说明                                                                                                                        | 类型                                            | 默认值              | 版本 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------- | ---- |
| content              | Popover 显示内容                                                                                                            | React.ReactNode                                 | --                  | --   |
| children             | 触发 Popover 显示的目标(必填)                                                                                               | React.ReactNode                                 | --                  | --   |
| placement            | 同 [WordBalloon](/components/word-balloon#api)                                                                              |                                                 | 'top'               | --   |
| showArrow            | 同 [WordBalloon](/components/word-balloon#api)                                                                              | boolean                                         | true                | --   |
| trigger              | 触发显示的方式                                                                                                              | 'hover' \| 'click' \| 'focus' \| 'contextmenu'  | 'hover'             | --   |
| disabled             | 禁用任何触发显示操作                                                                                                        | boolean                                         | false               | --   |
| offset               | Popover 窗体偏移量 (px)                                                                                                     | number                                          | 10                  | --   |
| visible              | 手动控制 Popover 的显示与隐藏                                                                                               | boolean                                         | --                  | --   |
| visibleControllerRef | 手动控制 Popover 的显示与隐藏                                                                                               | React.Ref\<VisibleController\>                  | --                  | --   |
| onVisibleChange      | visible 变化时的回调                                                                                                        | (visible:boolean) => void                       | --                  | --   |
| appendTo             | Popover 窗体插入指定的 html 标签中；如果为 null 的话会插入当前组件包裹的 children(不能是类似 input 这种自闭合的标签元素) 中 | null \| () => HTMLElement                       | () => document.body | --   |
| viewport             | 用于计算窗体位置，需要搭配 appendTo=null 使用；默认 viewport 是 appendTo 对象，不过嵌套使用时需要指定 viewport              | () => HTMLElement                               | --                  | --   |
| delay                | trigger 为 hover 的开启延时                                                                                                 | number                                          | 0 (ms)              | --   |
| leaveDelay           | trigger 为 hover 的关闭延时                                                                                                 | number                                          | 200 (ms)            | --   |
| widthByTrigger       | 窗体宽度与触发元素保持一致                                                                                                  | boolean                                         | --                  | --   |
| attrs                | 组件 html 根元素的所有属性                                                                                                  | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --                  | --   |
