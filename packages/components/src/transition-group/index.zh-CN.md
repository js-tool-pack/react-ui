---
order: -1
category: Components
title: TransitionGroup
subtitle: 动画组
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 通用
---

用于给一组 html 元素添加动画。

## 何时使用

当需要给一组 html 元素添加进场退场动画时。

:::info{title=tips}
TransitionGroup 基于 Transition，会给它触发了动画的 children 套上 Transition 组件；  
TransitionGroup 比 Transition 多一个 `${name}-move`的 className。
:::

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/all.tsx"></code>

## API

动画组的属性说明如下：

| 属性   | 说明                               | 类型                              | 默认值    | 版本 |
| ------ | ---------------------------------- | --------------------------------- | --------- | ---- |
| name   | 同 Transition                      | string                            |           |      |
| mode   | 同 Transition                      | `out-in` \| `in-out` \| `default` | `default` |      |
| appear | 同 Transition                      | boolean                           | false     |      |
| tag    | 包裹 children 的容器的 html tag 名 | string                            | `div`     |      |

支持原生 HTML 的其他所有属性。
