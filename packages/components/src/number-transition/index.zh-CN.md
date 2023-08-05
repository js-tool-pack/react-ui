---
category: Components
title: NumberTransition 数值动画
atomId: NumberTransition
demo:
  cols: 2
group:
  title: 通用
---

NumberTransition 说明。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/precision.tsx"></code>
<code src="./demo/duration.tsx"></code>
<code src="./demo/reset.tsx"></code>
<code src="./demo/format.tsx"></code>
<code src="./demo/timing-function.tsx"></code>

## API

NumberTransition 的属性说明如下：

| 属性           | 说明                                         | 类型                                                           | 默认值           | 版本 |
| -------------- | -------------------------------------------- | -------------------------------------------------------------- | ---------------- | ---- |
| active         | 启动或者暂停动画                             | boolean                                                        | --               | --   |
| from           | 从该数字开始                                 | number                                                         | 0                | --   |
| to             | 到该数字结束                                 | number                                                         | 10               | --   |
| duration       | 动画时长                                     | number                                                         | 3000             | --   |
| precision      | 小数位数，为 null 时返回原值                 | number \| null                                                 | 0                | --   |
| timingFunction | 动画曲线函数                                 | 'ease' \| 'linear' \| 'ease-in' \| 'ease-out' \| 'ease-in-out' | 'ease'           | --   |
| resetSignal    | 重置信号，任何与上次不同的值都会触发动画重置 | unkown                                                         | --               | --   |
| format         | 格式化数字显示                               | (value: number \| string) => number \| string                  | (value) => value | --   |
| onFinished     | 动画播放完毕回调                             | () => void                                                     | --               | --   |
| attrs          | 组件 html 根元素的各种属性设置               | Partial\<React.HTMLAttributes\<HTMLDivElement>>                | --               | --   |
