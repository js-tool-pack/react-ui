---
category: Components
title: Drawer
subtitle: Drawer
demo:
  cols: 2
group:
  title: 反馈
---

呼出一个侧边栏, 可以从多个方向出现。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/nest.tsx"></code>
<code src="./demo/appendTo.tsx"></code>

## API

Drawer 的属性说明如下：

| 属性             | 说明                                                                                            | 类型                                   | 默认值        | 版本 |
| ---------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------- | ------------- | ---- |
| visible          | 控制抽屉组件的显示隐藏，必填                                                                    | boolean                                | --            | --   |
| header           | 抽屉的 header，如果为 null 则移除 header                                                        | ReactNode                              | --            | --   |
| title            | 抽屉的 header 内的 title 元素                                                                   | ReactNode                              | --            | --   |
| showClose        | 是否显示关闭按钮                                                                                | boolean                                | true          | --   |
| closeIcon        | 替换关闭按钮的 icon，可以不必限定为 icon 组件                                                   | ReactNode                              | \<Close \/\>  | --   |
| onClose          | 抽屉关闭时的回调                                                                                | () => void                             | --            | --   |
| footer           | 抽屉 footer 部分，如果为 null 则移除 footer                                                     | ReactNode                              | --            | --   |
| onLeave          | 抽屉关闭动画完成后的回调                                                                        | () => void                             | --            | --   |
| zIndex           | 抽屉根元素的 css z-index                                                                        | number                                 | 1000          | --   |
| closeOnClickMask | 是否点击遮罩关闭抽屉                                                                            | boolean                                | true          | --   |
| placement        | 抽屉所在的位置                                                                                  | 'left' \| 'right' \| 'top' \| 'bottom' | 'right'       | --   |
| destroyOnClose   | 关闭组件后是否移除内部 dom；如果是 mixed 则第一次渲染时不会渲染 dom，组件关闭时不会移除内部 dom | boolean \| 'mixed'                     | 'mixed'       | --   |
| size             | 组件窗体的宽高；当组件 palcement 为'left'\|'right'时为宽度，否则为高度                          | string \| number                       | '35%'         | --   |
| appendTo         | 组件 dom 插入位置;默认插入 document.body，如果为 null 则插入当前位置                            | HTMLElement \| null                    | document.body | --   |

抽屉窗体支持原生 HTMLElement 的其他所有属性。
