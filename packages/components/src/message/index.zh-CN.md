---
category: Components
title: Message
subtitle: 信息
demo:
  cols: 2
group:
  title: 反馈
---

Message 信息, 常用于主动操作后的反馈提示。。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/type.tsx"></code>
<code src="./demo/showClose.tsx"></code>
<code src="./demo/hoverKeep.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/className.tsx"></code>
<code src="./demo/useMessageHolder.tsx"></code>
<code src="./demo/single.tsx"></code>

## API

Message 的属性说明如下：

| 属性      | 说明               | 类型                                        | 默认值   | 版本 |
| --------- | ------------------ | ------------------------------------------- | -------- | ---- |
| type      | 信息类型           | `success` \| `info` \| `warning` \| `error` | `info`   |      |
| duration  | 倒计时毫秒值       | number                                      | 3000     |      |
| icon      | 图标               | ReactNode                                   | 默认图标 |      |
| showClose | 显示关闭按钮       | boolean                                     | false    |      |
| hoverKeep | hover 时暂停倒计时 | boolean                                     | false    |      |

支持原生 HTML 的其他所有属性。
