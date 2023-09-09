---
category: Components
title: Tag 标签
atomId: Tag
demo:
  cols: 2
group:
  title: 通用
---

Tag 标签。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/bordered.tsx"></code>
<code src="./demo/closeable.tsx"></code>
<code src="./demo/size.tsx"></code>
<code src="./demo/round.tsx"></code>
<code src="./demo/checkable.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/icon.tsx"></code>

## API

Tag 的属性说明如下：

| 属性          | 说明                                                            | 类型                                                     | 默认值    | 版本 |
| ------------- | --------------------------------------------------------------- | -------------------------------------------------------- | --------- | ---- |
| size          | 大小                                                            | 'small' \| 'medium' \| 'large'                           | 'medium'  | --   |
| type          | Tag 类型                                                        | 'primary' \| 'info' \| 'success' \| 'warning' \| 'error' | 'primary' | --   |
| round         | 圆角                                                            | boolean                                                  | --        | --   |
| closeable     | 是否显示关闭按钮                                                | boolean                                                  | --        | --   |
| onClose       | 显示关闭按钮时的回调，当使用了 e.preventDefault()时，会停止关闭 | (e: React.MouseEvent\<HTMLButtonElement>) => void        | --        | --   |
| bordered      | 是否显示边框                                                    | boolean                                                  | true      | --   |
| checkable     | 是否可选择                                                      | boolean                                                  | --        | --   |
| checked       | 是否选中                                                        | boolean                                                  | --        | --   |
| onChange      | checked 变化时触发的回调                                        | (checked: boolean) => void                               | --        | --   |
| disabled      | 是否禁止操作，对 checkable、closeable 有效                      | boolean                                                  | --        | --   |
| icon          | 图标                                                            | React.ReactNode                                          | --        | --   |
| attrs         | html 标签属性                                                   | Partial\<React.HTMLAttributes\<HTMLDivElement>>          | --        | --   |
| closeBtnAttrs | 关闭按钮的 html 标签属性                                        | Partial\<React.HTMLAttributes\<HTMLButtonElement>>       | --        | --   |
