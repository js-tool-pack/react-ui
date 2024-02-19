---
category: Components
title: Dialog
atomId: Dialog
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Feedback
  order: 4
---

对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Dialog 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/centered.tsx"></code>
<code src="./demo/center.tsx"></code>
<code src="./demo/close.tsx"></code>

## API

dialog 的属性说明如下：

| 属性             | 说明                             | 类型                                         | 默认值 | 版本 |
| ---------------- | -------------------------------- | -------------------------------------------- | ------ | ---- |
| visible          | 开关                             | boolean                                      | false  |      |
| header           | 窗体头部                         | ReactNode                                    | -      |      |
| footer           | 窗体尾部                         | ReactNode                                    | -      |      |
| onClose          | 内部关闭回调                     | () => void                                   | -      |      |
| closeOnClickMask | 点击遮罩关闭 dialog              | boolean                                      | false  |      |
| center           | header 与 footer 水平居中        | boolean                                      | false  |      |
| centered         | 窗体垂直居中                     | boolean                                      | false  |      |
| esc              | 按下 esc 关闭 dialog             | boolean                                      | false  |      |
| zIndex           | dialog 的 css z-index            | number                                       | 100    |      |
| attrs            | 组件 html 根元素的所有属性       | Partial\<React.HTMLAttributes\<HTMLElement>> | --     | --   |
| bodyAttrs        | 组件抽屉窗体 html 元素的所有属性 | Partial\<React.HTMLAttributes\<HTMLElement>> | --     | --   |
