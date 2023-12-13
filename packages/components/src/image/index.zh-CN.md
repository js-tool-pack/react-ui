---
category: Components
title: Image 图像
atomId: Image
demo:
  cols: 2
group:
  title: 数据展示
---

Image 图像。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx"></code>
<code src="./demo/preview.tsx"></code>
<code src="./demo/lazy.tsx"></code>
<code src="./demo/group.tsx"></code>

## API

### Image

Image 的属性说明如下：

| 属性     | 说明                       | 类型                                                   | 默认值 | 版本 |
| -------- | -------------------------- | ------------------------------------------------------ | ------ | ---- |
| fit      | 图片标签的 object-fit 属性 | React.CSSProperties\['objectFit'\]                     | --     | --   |
| fallback | 图片加载失败时的占位图     | string                                                 | 默认图 | --   |
| preview  | 开启或关闭点击图片预览功能 | boolean                                                | true   | --   |
| lazy     | 懒加载功能开关             | boolean                                                | false  | --   |
| imgAttrs | 图片标签的 html 属性       | Partial\<React.ImgHTMLAttributes\<HTMLImageElement\>\> | --     | --   |
| attrs    | html 标签属性              | Partial\<React.HTMLAttributes\<HTMLDivElement>>        | --     | --   |

### ImagePreview

ImagePreview 的属性说明如下：

| 属性   | 说明             | 类型                      | 默认值 | 版本 |
| ------ | ---------------- | ------------------------- | ------ | ---- |
| images | 预览图数组       | (undefined \| string)\[\] | --     | --   |
| onHide | 点击关闭时的回调 | ()=>void                  | --     | --   |
