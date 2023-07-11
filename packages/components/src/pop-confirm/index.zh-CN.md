---
category: Components
title: PopConfirm 气泡确认框
atomId: PopConfirm
demo:
  cols: 2
group:
  title: 反馈
---

PopConfirm 气泡确认框。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/text.tsx"></code>
<code src="./demo/callback.tsx"></code>

## API

PopConfirm 的属性说明如下：

| 属性        | 说明                                                                                      | 类型                                   | 默认值  | 版本 |
| ----------- | ----------------------------------------------------------------------------------------- | -------------------------------------- | ------- | ---- |
| content     | 内容                                                                                      | React.ReactNode                        | --      | --   |
| confirmText | 确认按钮文案，当值为 null 时，不显示确认按钮                                              | string \| null                         | '确认'  | --   |
| onConfirm   | 点击确认按钮时的回调，当回调返回值是 false 或者返回的 promise 的值是 false 则停止关闭窗体 | () => boolean \| Promise<void> \| void | --      | --   |
| cancelText  | 取消按钮文案，当值为 null 时，不显示取消按钮                                              | string \| null                         | '取消'  | --   |
| onCancel    | 点击取消按钮时的回调，当回调返回值是 false 或者返回的 promise 的值是 false 则停止关闭窗体 | () => boolean \| Promise<void> \| void | --      | --   |
| icon        | 自定义 icon，如果为 null 则不显示 icon                                                    | React.ReactNode                        | --      | --   |
| trigger     | 同 [tooltip](./tooltip#api)                                                               | --                                     | 'click' | --   |

更多说明见[tooltip](./tooltip#api) 。
