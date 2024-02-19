---
category: Components
title: ConfigProvider 配置
atomId: ConfigProvider
demo:
  cols: 1
group:
  title: 其他
---

为组件提供统一的全局化配置。

## 代码演示

```jsx | pure
import { ConfigProvider } from '@tool-pack/react-ui';
import zhCN from '@tool-pack/react-ui/locale/zh-CN';

function Demo() {
  return (
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  );
}
```

## API

Calendar 的属性说明如下：

| 属性   | 说明         | 类型   | 默认值 | 版本 |
| ------ | ------------ | ------ | ------ | ---- |
| locale | 语言文本配置 | object | --     | --   |
