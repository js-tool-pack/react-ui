---
category: Components
title: Switch
atomId: Switch
demo:
  cols: 2
group:
  order: 3
  title: Data Input
---

Switch 开关。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/size.tsx"></code>
<code src="./demo/content.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/event.tsx"></code>
<code src="./demo/loading.tsx"></code>
<code src="./demo/icon.tsx"></code>

## API

Switch 的属性说明如下：

| 属性              | 说明                 | 类型                                               | 默认值   | 版本 |
| ----------------- | -------------------- | -------------------------------------------------- | -------- | ---- |
| checked           | 开启或关闭           | boolean                                            | false    | --   |
| size              | 尺寸                 | 'small' \| 'medium' \| 'large'                     | 'medium' | --   |
| disabled          | 是否禁止操作         | boolean                                            | false    | --   |
| loading           | 显示加载动画         | boolean                                            | false    | --   |
| onChange          | checked 改变时的回调 | (checked: boolean) => void                         | --       | --   |
| checkedChildren   | 开关开启时显示的内容 | React.ReactNode                                    | --       | --   |
| uncheckedChildren | 开关关闭时显示的内容 | React.ReactNode                                    | --       | --   |
| checkedIcon       | 开关开启时的图标     | React.ReactNode                                    | --       | --   |
| uncheckedIcon     | 开关关闭时的图标     | React.ReactNode                                    | --       | --   |
| attrs             | html 按钮标签属性    | Partial\<React.HTMLAttributes\<HTMLButtonElement>> |          | --   |
