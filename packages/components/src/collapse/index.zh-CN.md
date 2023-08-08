---
category: Components
title: Collapse 折叠面板
atomId: Collapse
demo:
  cols: 1
group:
  title: 通用
---

Collapse 折叠面板。

## 组

推荐使用该方式。

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/expanded.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/extra.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/icon-placement.tsx"></code>
<code src="./demo/nest.tsx"></code>
<code src="./demo/accordion.tsx"></code>
<code src="./demo/size.tsx"></code>

## 独立使用

<!-- prettier-ignore -->
<code src="./demo/independent.tsx"></code>

## API

### Collapse API

| 属性          | 说明                                                                                       | 类型                                           | 默认值   | 版本 |
| ------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------- | -------- | ---- |
| title         | 标题                                                                                       | React.ReactNode                                | --       | --   |
| expanded      | 展开/收起面板                                                                              | boolean                                        | false    | --   |
| disabled      | 禁止点击                                                                                   | boolean                                        | false    | --   |
| header        | 替换 header 内部内容                                                                       | (active: boolean) => React.ReactNode           | --       | --   |
| extra         | header 右侧附加信息                                                                        | React.ReactNode                                | --       | --   |
| icon          | 替换默认 icon，为 null 时移除 icon                                                         | null \| ((active: boolean) => React.ReactNode) | 右箭头   | --   |
| iconPlacement | icon 位置                                                                                  | 'start' \| 'end'                               | 'start'  | --   |
| size          | 尺寸                                                                                       | 'small' \| 'medium' \| 'large'                 | 'medium' | --   |
| destroyOnHide | 隐藏时是否销毁 dom ； 为 'mixed'时第一次渲染未展开时不渲染 dom，展开一次后收起也不销毁 dom | boolean \| 'mixed'                             | 'mixed'  | --   |
| onChange      | 展开/收起时的回调                                                                          | (active: boolean) => void                      | --       | --   |

### CollapseGroup API

```typescript
// CollapseProps就是上面的 Collapse API
export type CollapseGroupItem = CollapseProps & {
  children: React.ReactNode;
  key: string | number;
};
```

| 属性          | 说明                          | 类型                                                              | 默认值 | 版本 |
| ------------- | ----------------------------- | ----------------------------------------------------------------- | ------ | ---- |
| tag           | html 标签名                   | keyof HTMLElementTagNameMap                                       | 'div'  | --   |
| accordion     | 手风琴效果                    | boolean                                                           | false  | --   |
| items         | 面板 item 数组                | CollapseGroupItem[]                                               | --     | --   |
| collapseProps | items 的公共选项              | Partial\<CollapseProps>                                           | --     | --   |
| onChange      | 内部面板展开/收起时触发的回调 | (item: CollapseGroupItem, index: number, active: boolean) => void | --     | --   |

其他说明。
