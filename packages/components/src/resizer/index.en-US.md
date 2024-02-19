---
category: Components
title: Resizer
atomId: Resizer
demo:
  cols: 1
group:
  title: Layout
---

Resizer html 元素宽高拖动修改组件。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/limit.tsx"></code>
<code src="./demo/nest.tsx"></code>
<code src="./demo/inline.tsx"></code>
<code src="./demo/on-resized.tsx"></code>

## API

Resizer 的属性说明如下：

| 属性      | 说明                       | 类型                                            | 默认值                  | 版本 |
| --------- | -------------------------- | ----------------------------------------------- | ----------------------- | ---- |
| placement | 拖动条位置                 | 'left' \| 'right' \| 'top' \| 'bottom'          | 'bottom'                | --   |
| onResized | 宽高调整后的回调           | () => void                                      | --                      | --   |
| min       | 宽高下限                   | number                                          | 0                       | --   |
| max       | 宽高上限                   | number                                          | Number.MAX_SAFE_INTEGER | --   |
| attrs     | 组件 html 根元素的所有属性 | Partial\<React.HTMLAttributes\<HTMLDivElement>> | --                      | --   |

拖动条支持原生 HTMLElement 的其他所有属性。
