---
category: Components
title: Icon
subtitle: 图标
demo:
  cols: 2
group:
  title: 通用
---

图标 Icon。

## 代码演示

<style>
.demo-icon-icons {font-size: 30px; color: var(--t-primary-bg-color)} 
.demo-icon-icons .t-icon {padding: 2px} 
.demo-icon-icons .t-icon:hover {
background: #dcdcdc;
cursor: pointer;
}
</style>

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/icons.tsx"></code>

## API

图标的属性说明如下：

| 属性  | 说明                                                                              | 类型             | 默认值 | 版本 |
| ----- | --------------------------------------------------------------------------------- | ---------------- | ------ | ---- |
| size  | 图标大小，当传入的是 number 类型时，会加上`px`单位后缀；也可以直接使用 style 设置 | string \| number | `1em`  |      |
| color | 图标颜色，可以直接使用 style 设置                                                 | string           | false  |      |

支持原生 HTML 的其他所有属性。
