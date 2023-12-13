---
category: Components
title: WordBalloon 文字气泡
atomId: WordBalloon
demo:
  cols: 2
group:
  order: 10
  title: 内部
---

WordBalloon 文字气泡/文字气球(像一个飘在天上的 🎈)，可用在各种弹出层信息展示，也可以用于类似移动端的聊天气泡。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>

## API

WordBalloon 的属性说明如下：

| 属性         | 说明                                                    | 类型                                                                                                                                                               | 默认值 | 版本 |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ---- |
| contentStyle | 气泡内容元素的行内样式                                  | React.CSSProperties                                                                                                                                                | --     | --   |
| arrowStyle   | 气泡箭头元素的行内样式                                  | React.CSSProperties                                                                                                                                                | --     | --   |
| background   | 气泡内容和箭头的背景色                                  | React.CSSProperties['background']                                                                                                                                  | --     | --   |
| showArrow    | 是否显示箭头                                            | boolean                                                                                                                                                            | true   | --   |
| placement    | 箭头对应气泡的位置<br /><div style="width:200px"></div> | 'top' \| 'right' \| 'bottom' \| 'left' \| 'top-start' \| 'top-end' \| 'right-start' \| 'right-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end' | 'top'  | --   |
| attrs        | 组件 html 根元素的所有属性                              | Partial\<React.HTMLAttributes\<HTMLDivElement>>                                                                                                                    | --     | --   |

组件根元素支持原生 HTML 的其他所有属性。
