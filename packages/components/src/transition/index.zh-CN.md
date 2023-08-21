---
order: -2
category: Components
title: Transition 动画
atomId: Transition
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  order: 1
  title: 动画
---

Transition 会在一个元素或组件进入和离开 DOM 时应用动画，类似于 Vue 官方的 Transition 组件。

## 何时使用

页面元素需要添加入场、退场动画时。

## className 生命周期

当设 name 为 fade 时

### 入场

`.fade-enter-from` -> `.fade-enter-active` -> `.fade-enter-active.fade-enter-to` -> 动画完成后清理相关 className

### 退场

`.fade-leave-from` -> `.fade-leave-active` -> `.fade-leave-active.fade-leave-to` -> 动画完成后清理相关 className

## children

单个 children 与多个 children 的逻辑有点不同：
:::info{title=children}
多个 children 相对于单个 children 需要为每个 children 设置 key 属性以便 Transition 组件识别组件是否变动，  
且可以通过 mode 设置入场、退场的顺序
:::

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/all.tsx"></code>
<code src="./demo/basic.tsx"></code>
<code src="./demo/appear.tsx"></code>
<code src="./demo/mode.tsx"></code>
<code src="./demo/on.tsx"></code>
<code src="./demo/adpter.tsx"></code>
<code src="./demo/input.tsx"></code>
<code src="./demo/show.tsx"></code>
<code src="./demo/show-appear.tsx"></code>

## API

Transition 的属性说明如下：

| 属性   | 说明                                                   | 类型                              | 默认值    | 版本 |
| ------ | ------------------------------------------------------ | --------------------------------- | --------- | ---- |
| name   | 动画名，用于生成 className                             | string                            | `trans`   |      |
| mode   | 动画类型，用于决定子元素进出场顺序                     | `out-in` \| `in-out` \| `default` | `default` |      |
| appear | 用于设置初始时是否显示动画，只对组件第一次出现时起作用 | boolean                           | false     |
| on     | 切换动画时的回调                                       | TransitionCB                      | -         |      |
| show   | 类似 vue 版的 v-show 控制动画                          | boolean \| undefined              | -         |      |
