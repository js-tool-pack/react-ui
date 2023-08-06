---
category: Components
title: Alert 提示
atomId: Alert
demo:
  cols: 2
group:
  title: 反馈
---

Alert 提示。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/bordered.tsx"></code>
<code src="./demo/closable.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/partial.tsx"></code>
<code src="./demo/on-close.tsx"></code>

## API

Alert 的属性说明如下：

| 属性     | 说明                                  | 类型                                                     | 默认值    | 版本 |
| -------- | ------------------------------------- | -------------------------------------------------------- | --------- | ---- |
| type     | 提示类型                              | 'default' \| 'success' \| 'info' \| 'warning' \| 'error' | 'default' | --   |
| bordered | 是否显示边框                          | boolean                                                  | false     | --   |
| closable | 是否显示关闭按钮                      | boolean                                                  | false     | --   |
| icon     | 提示图标，为 null 时不显示图标        | React.ReactNode                                          | 预设图标  | --   |
| title    | 提示标题，为空时不显示标题            | React.ReactNode                                          | --        | --   |
| onClose  | 提示关闭时的回调                      | () => void                                               | --        | --   |
| attrs    | html 标签属性，如 className、style 等 | React.HTMLAttributes\<HTMLElement>                       | --        | --   |
