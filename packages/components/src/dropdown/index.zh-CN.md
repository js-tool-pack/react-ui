---
category: Components
title: Dropdown 下拉菜单
atomId: Dropdown
demo:
  cols: 2
group:
  title: 通用
---

Dropdown 说明。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/hide-on-click.tsx"></code>
<code src="./demo/divider.tsx"></code>
<code src="./demo/show-arrow.tsx"></code>
<code src="./demo/icon.tsx"></code>
<code src="./demo/size.tsx"></code>
<code src="./demo/disabled.tsx"></code>
<code src="./demo/header.tsx"></code>
<code src="./demo/footer.tsx"></code>
<code src="./demo/nest.tsx"></code>
<code src="./demo/group.tsx"></code>
<code src="./demo/contextmenu.tsx"></code>

## API

Dropdown 的属性说明如下：

```typescript
export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  lineStyle?: React.CSSProperties['borderStyle'];
  lineColor?: React.CSSProperties['borderColor'];
  lineWidth?: React.CSSProperties['borderWidth'];
  placement?: 'left' | 'center' | 'right';
  vertical?: boolean;
  tag?: keyof HTMLElementTagNameMap;
};

export type DropdownDivider = DividerProps & {
  type: 'divider';
  key: React.Key;
};

export type OptionProps = React.HTMLAttributes<HTMLElement> & {
  tag?: keyof HTMLElementTagNameMap;
  size?: Size;
  disabled?: boolean;
  expandable?: boolean;
  readonly?: boolean;
  icon?: React.ReactNode;
};

export type DropdownOption = Omit<OptionProps, 'size' | 'children'> & {
  type?: 'group' | 'option';
  key: React.Key;
  label: React.ReactNode;
  children?: DropdownOptionsItem[];
};
export type DropdownOptionsItem = DropdownOption | DropdownDivider;
```

| 属性        | 说明                 | 类型                                                        | 默认值   | 版本 |
| ----------- | -------------------- | ----------------------------------------------------------- | -------- | ---- |
| options     | 选项(必填)           | DropdownOptionsItem[]                                       | --       | --   |
| size        | 尺寸                 | "small" \| "medium" \| "large"                              | "medium" | --   |
| onSelect    | 选项选中时的回调函数 | (option: DropdownOption, parents: DropdownOption[]) => void | --       | --   |
| header      | 头部插槽             | React.ReactNode                                             | --       | --   |
| header      | 尾部插槽             | React.ReactNode                                             | --       | --   |
| hideOnClick | 点击选项时是否关闭   | boolean                                                     | true     | --   |

支持 html 标签的其他属性。
