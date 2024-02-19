---
title: CSS
category: guide
nav:
  title: 指南
---

## CSS 加载方式

目前市面上 ui 库大致分为两种 CSS 加载的方式：常规外部 css 文件和 css in js。

- 常规外部 css 的代表有：elementui;
- css in js 代表有：ant-design、naiveui。

而本库使用的是常规外部 css。

## 为什么使用这种方式

因为：

- 常规 css 加载方式有众多工具支持，如 sass、less、stylus，postcss，stylelint 等。
- 有编辑器与 stylelint 支持检查错误，编辑器支持智能提示。
- 常规 css 一目了然，且 sass 等工具弥补了 css 的不足。
- 性能相对更好，不需要 js 实时计算。
- 简单方便，不需要各种策略优化性能（当然样式层面还是需要优化的，大家都一样），减少心智负担。

当然这种方式也不是没有缺点：

- 单元测试时不能测试具体的样式（由于 jest、jsdom 等测试库的限制，只支持内联样式，css in js 可以避免），
  不过当 e2e 测试时就不存在这种问题了。
- 相对没有 css in js 灵活。

## css tree shaking

<!-- prettier-ignore -->
<code src="./css-tree-shaking.tsx"></code>
