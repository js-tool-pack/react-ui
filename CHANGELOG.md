## [0.0.2-beta.3](https://github.com/js-tool-pack/react-ui/compare/v0.0.2-beta.2...v0.0.2-beta.3) (2023-08-04)

### Bug Fixes

- **components/popover:** 修复 Popover 在 Safari 浏览器下查找 fixed 元素会报错的问题 ([fdbcd9a](https://github.com/js-tool-pack/react-ui/commit/fdbcd9a78f01c1d177f1eb1b4269e4886c022b48))
- **components/popover:** 修复 Popover 对部分 appendTo 为 null 时位置计算不准的问题 ([4974f87](https://github.com/js-tool-pack/react-ui/commit/4974f875449242db0b593f90125579b8233771e6))
- **components/popover:** 修复 Popover 组件因为 appendTo 导致第一次打开时动画丢失的问题 ([1156345](https://github.com/js-tool-pack/react-ui/commit/11563453633de7e93c4e64e34e044977bae9c87a))
- **components/popover:** 修复原位置和反面位置都不行时会发生位置抖动的问题 ([3b899a7](https://github.com/js-tool-pack/react-ui/commit/3b899a7d74f57de914b94ab8a60833d78e2f19da))
- **components/transition:** 修复 transitionCBAdapter onIdle 和 onInvisible 不会触发的问题 ([5c7bc2c](https://github.com/js-tool-pack/react-ui/commit/5c7bc2c8908dd5b25dc14552ba5bdb0af1c1cd00))
- **components/word-balloon:** 修复嵌套使用时子窗体箭头方向会被父窗体影响的问题 ([e4ad55e](https://github.com/js-tool-pack/react-ui/commit/e4ad55e19efa51557defd58731b6cca45655e837))
- **components/word-balloon:** 修复文字气泡组件除了 top 位其他位置都看不太清箭头部分的问题 ([3ce410d](https://github.com/js-tool-pack/react-ui/commit/3ce410d088e55f15f51260979d26c8646301fe73))
- **shared:** 修复 useForwardRef 类型问题 ([a2fc4b2](https://github.com/js-tool-pack/react-ui/commit/a2fc4b217a7d0928c63e53708e89e6ecb57f0d7e))

### Features

- **components/button:** 新增 ButtonContext ([3cdfa51](https://github.com/js-tool-pack/react-ui/commit/3cdfa514eefff8b45ddcb1d856da521b56dac807))
- **components/button:** 新增 ButtonGroup 按钮组组件 ([cf95bb1](https://github.com/js-tool-pack/react-ui/commit/cf95bb1c344e206b4e52fbdd7ebb6737fb6945c8))
- **components/divider:** 支持自选 tag ([3887a7e](https://github.com/js-tool-pack/react-ui/commit/3887a7e36a8a9d0ddb07b17453cabdfd3c8b0155))
- **components/popover:** 新增 childrenRef 属性获取内部 children 的 ref ([e3f440b](https://github.com/js-tool-pack/react-ui/commit/e3f440b21ff25d521372f32cd1855a463adcae87))
- **components/popover:** 新增鼠标右击开启功能 ([6c643ad](https://github.com/js-tool-pack/react-ui/commit/6c643ad3d172da81f794f45350c2a91e32e5a257))
- **components/popover:** 添加内部嵌套功能。appendTo 支持为 null，添加 viewport 属性。 ([1391cb7](https://github.com/js-tool-pack/react-ui/commit/1391cb7e8e5881abbb8eb27f97481f66ac877ee7))
- **components:** 新增 Dropdown 下拉菜单组件 ([86cd77d](https://github.com/js-tool-pack/react-ui/commit/86cd77d75cc40781f5eb7c8dcf3559fb9e5e217f)), closes [#35](https://github.com/js-tool-pack/react-ui/issues/35)
- **components:** 新增 Option 组件 ([b64aa98](https://github.com/js-tool-pack/react-ui/commit/b64aa981d8d56e663b00a59300016ae1fd70e105))

### Performance Improvements

- **components/button:** 移除 ButtonGroup 的 buttonProps 属性，使用 ButtonContext 作为内部 Button 的公共参数 ([304ddc4](https://github.com/js-tool-pack/react-ui/commit/304ddc49cc831d40a5d0d55dfba98f6331a13576))

## [0.0.2-beta.2](https://github.com/js-tool-pack/react-ui/compare/v0.0.2-beta.1...v0.0.2-beta.2) (2023-07-31)

### Bug Fixes

- **components/button:** span 内部为 i 标签的时候不会垂直居中 ([9dd4014](https://github.com/js-tool-pack/react-ui/commit/9dd401406e11fcfd5ba029c5e571505f7668e009))
- **components/transition-group:** 修复 transition-group 组件在非 dumi 环境下丢失 flips 动画的问题 ([0061ab2](https://github.com/js-tool-pack/react-ui/commit/0061ab2e4d1d63e6a400d9aba31d7f3ac76c1279))
- **components/transition:** 修复 transition 组件使用 show 控制时在非 dumi 环境下 hide 会直接消失的问题 ([1d1e77c](https://github.com/js-tool-pack/react-ui/commit/1d1e77c320ed3ce0dadbf8f0c5bea799f5e7687c))

### Features

- **components/transition:** 可像普通 html 标签一样传参 ([4dcdc95](https://github.com/js-tool-pack/react-ui/commit/4dcdc9500fa2591e4b26581ff9fcd820b4866eb8))
- **components/transition:** 新增 transitionCBAdapter ([8dac896](https://github.com/js-tool-pack/react-ui/commit/8dac89687e836a024350e8244607f7048bc465dc))

### Performance Improvements

- **components/transition-group:** v2 版 ([459f6c6](https://github.com/js-tool-pack/react-ui/commit/459f6c672df6d0cb1a68ad2e90d3de209cadd636))
- **components/transition-group:** 移除原来添加到 html 元素上的 data-key 标识 ([96f6e26](https://github.com/js-tool-pack/react-ui/commit/96f6e26658385b8b2149e6011bcb58344f30cbf2))
- **components/transition:** 优化 useDispatcher ([9aef7d8](https://github.com/js-tool-pack/react-ui/commit/9aef7d8e13cb5ef29c2210df6b2356baae8d7a4e))

## 0.0.2-beta.1 (2023-07-18)

### Bug Fixes

- **components:** --t-radius 命名错误为--t-redis ([2800fb0](https://github.com/js-tool-pack/react-ui/commit/2800fb0dadcdc3588a36ac500555f48910e60c38))
- **components/button:** [#8](https://github.com/js-tool-pack/react-ui/issues/8) ([d5f51a5](https://github.com/js-tool-pack/react-ui/commit/d5f51a5c9571c296ca254b7ca5e1359e85edcff9))
- **components/button:** button 在 plain 为 text 的时候点击组件最底下的像素有点击动画但不触发事件 ([cbb2a69](https://github.com/js-tool-pack/react-ui/commit/cbb2a6905f96ee3b50a92b942ef483bdc009ea1c)), closes [#6](https://github.com/js-tool-pack/react-ui/issues/6)
- **components/collapse:** 修复嵌套使用时，内部收起的面板箭头方向会跟随父面板箭头方向；icon 参数改为函数 ([7442ff8](https://github.com/js-tool-pack/react-ui/commit/7442ff8e53b40829ecde6082c11941c20217a4e6))
- **components/dialog:** 颜色不跟随主题 ([da181ca](https://github.com/js-tool-pack/react-ui/commit/da181caeb3dab2052d3d7effe8799d7fc8e15368))
- **components/drawer:** 颜色不跟随主题 ([54e9ee9](https://github.com/js-tool-pack/react-ui/commit/54e9ee996f4808567cfa9e927e9fb99c98759a40))
- **components/loading:** 修复 loading 的类型 ([77c9359](https://github.com/js-tool-pack/react-ui/commit/77c935952714012721ab80c95958f505b65158e6))
- **components/message:** 修复 content 只能为 string 的 bug ([d1aac21](https://github.com/js-tool-pack/react-ui/commit/d1aac216b2ad128b44c3cba8d1f69e0e0a97087e))
- **components/message:** 文本颜色不跟随主题 ([c4720ad](https://github.com/js-tool-pack/react-ui/commit/c4720ad6a380e2b65c45f09a2355efbd7dd44e22))
- **components/popover:** destroyOnHide 为 true 时，balloon 监听 hover 事件失败 ([5bc6b82](https://github.com/js-tool-pack/react-ui/commit/5bc6b82b1cc777d83424544ee61853e971dc66a0))
- **components/resizer:** 获取 inline 元素宽高会是 auto ([0a228db](https://github.com/js-tool-pack/react-ui/commit/0a228dbdf3c63083bde98f8951aeb9cd8fba119d))
- **components/tooltip:** 内部 show 不会跟随外部 visible ([7784e80](https://github.com/js-tool-pack/react-ui/commit/7784e80ddc5721bd767cfd154527533e38b2371f))
- **components/transition-group:** 在 playground 报错 ([b0c10b0](https://github.com/js-tool-pack/react-ui/commit/b0c10b09966801e4792f43af0a69179695d86b98))
- **components/transition-group:** 由于 transition 组件的重构，导致 transition-group 组件第一次启动时会闪一下 ([6ef98ba](https://github.com/js-tool-pack/react-ui/commit/6ef98ba2e9baead00def71661218205ed7b2ae8f)), closes [#12](https://github.com/js-tool-pack/react-ui/issues/12)
- **components/transition:** 修复[修复刷新页面后第一次点击偶尔会闪的情况(dialog 刷新后第一次显示]留下的 dialog 从外部关闭会报 key 重复的错误 ([5fd116a](https://github.com/js-tool-pack/react-ui/commit/5fd116aa42bf1d8ad69540551fa7dbf8e1b10f37))
- **components/transition:** 修复 Transition 组件在单个元素切换动画时会生成新的 dom 的问题 ([98844da](https://github.com/js-tool-pack/react-ui/commit/98844da4e8a2950d2c049b148a1bcbc4ddf11b82))
- **components/transition:** 修复刷新页面后第一次点击偶尔会闪的情况(dialog 刷新后第一次显示) ([1cd8a28](https://github.com/js-tool-pack/react-ui/commit/1cd8a285e70e745c3a4ac025730f535f53d71c65))
- **components/transition:** 判断触发事件的元素是否绑定事件的元素 ([98b8862](https://github.com/js-tool-pack/react-ui/commit/98b8862d32cfe88a9ad0c48256b10262a7d0253f))
- **components/transition:** 在子元素为 input 时，每输入一个字符都会触发动画，且光标位置丢失 ([d483511](https://github.com/js-tool-pack/react-ui/commit/d4835113542ff3aa954830ddf787072aca9325f1)), closes [#10](https://github.com/js-tool-pack/react-ui/issues/10)
- **components/word-balloon:** ref 类型报错 ([e242dd4](https://github.com/js-tool-pack/react-ui/commit/e242dd44c48755c6482b6df02e123ab3063a3305))
- **components/word-balloon:** 修复 color 跟随主题，外部 className 丢失的问题，默认 placement 应该为 top ([2b3795c](https://github.com/js-tool-pack/react-ui/commit/2b3795ce3390bd460b44da55102aa461796307c3))
- **components/word-balloon:** 方向反了，不能以箭头的方向做朝向 ([9f14c66](https://github.com/js-tool-pack/react-ui/commit/9f14c660181693dbf5c302dab131150744417d87))
- **components:** size className 失效 ([78f684a](https://github.com/js-tool-pack/react-ui/commit/78f684a957f4a6d36341423af1ab11ef3396fe73))
- **components:** 修复导入 css module 类型报错的问题 ([ad0c8e2](https://github.com/js-tool-pack/react-ui/commit/ad0c8e2721d4ac61442717447c88cebac4e7dba7))
- **playground:** 修复 router 会类型报错的问题 ([277b964](https://github.com/js-tool-pack/react-ui/commit/277b964e91c5ddf682f8d552c7a322af5eb9000a))
- **react-ui:** 修复打包 css 出错的问题 ([45ccf99](https://github.com/js-tool-pack/react-ui/commit/45ccf99427d2fab71f63b4887a0efd4953068aa9))

### Features

- **components/button:** shape 添加'none'选项 ([ebf6898](https://github.com/js-tool-pack/react-ui/commit/ebf68988f02275ad816d1b5e7bdf329a6010fcce))
- **components/button:** shape 默认为 default ([4497e69](https://github.com/js-tool-pack/react-ui/commit/4497e69c3a86eb137d43a5cb2b1ee4c2dc998f3b))
- **components/button:** 新增功能 ([a82480a](https://github.com/js-tool-pack/react-ui/commit/a82480affbfb59b585453c5d0efd8e428959c870))
- **components/button:** 添加点击效果 ([60ed72a](https://github.com/js-tool-pack/react-ui/commit/60ed72a8f6f820cc8197de1293a10b499480e2b9))
- **components/button:** 补全属性 ([ba9b1a9](https://github.com/js-tool-pack/react-ui/commit/ba9b1a94faa06332715d57a0ef149439879a4313))
- **components/button:** 透出 Button 的 ref，使它可以外部赋予 ref ([83ed753](https://github.com/js-tool-pack/react-ui/commit/83ed75388436bc8b763296ca4fb4cddee08cf2b9))
- **components/css.variable:** 重置部分 css 变量 ([7b81fd0](https://github.com/js-tool-pack/react-ui/commit/7b81fd0c210150e5e5f21d8582b3991c7709c925))
- **components/dialog:** 新增 zIndex 参数和点击 esc 关闭弹窗 ([8e308aa](https://github.com/js-tool-pack/react-ui/commit/8e308aa2edd56f5bf20ea1ae75c05893681c8043))
- **components/icon:** 新增 icon 组件 ([1f18661](https://github.com/js-tool-pack/react-ui/commit/1f18661a86195307fad7e5ed15dab0f6d76dd7ee))
- **components/layouts:** 透出 Layout 的 ref，使它可以外部赋予 ref ([e2658b0](https://github.com/js-tool-pack/react-ui/commit/e2658b0933fe2343bb921e99b6e9e7aa5fb7005b))
- **components/loading:** loading 从 kits-ui 迁入 ([1155575](https://github.com/js-tool-pack/react-ui/commit/11555753e757d102c65c4a0fe4fe1b518db592b7)), closes [#2](https://github.com/js-tool-pack/react-ui/issues/2)
- **components/loading:** 使用公共默认 z-index ([3f1585d](https://github.com/js-tool-pack/react-ui/commit/3f1585d0b177dbcea1e188a04b64ac9c9cd6d7b3))
- **components/loading:** 原 useLoading 改为 useLoadingHolder; 新增新的 useLoading; 新增 showLoading ([bdafeec](https://github.com/js-tool-pack/react-ui/commit/bdafeec48f8c23cc091b4cbc4c2d823549d47a60))
- **components/loading:** 默认 color 为白色 ([d1e967e](https://github.com/js-tool-pack/react-ui/commit/d1e967e6ae7f2830e984fb199b1a2489b8d01b6d))
- **components/popover:** 优化 ([72bd4bf](https://github.com/js-tool-pack/react-ui/commit/72bd4bfd02b9bfaf6dca3cca7e1b8a59c00f9a27))
- **components/popover:** 组件样式可供外部复用 ([838356c](https://github.com/js-tool-pack/react-ui/commit/838356c581590ee62c07e46f3c21027bfaf17084))
- **components/space:** 为 SpaceProps 补上 ref ([7ee40b5](https://github.com/js-tool-pack/react-ui/commit/7ee40b564119bcbafe9a68dbd801060390425173))
- **components/transition-group:** 调整类型和导出 ([e07753a](https://github.com/js-tool-pack/react-ui/commit/e07753a22e283c197c5d093b8f75f8f1430fae36))
- **components/transition:** 导出 TransitionProps ([64f445e](https://github.com/js-tool-pack/react-ui/commit/64f445e73b7d2ed27f978a399f9639395dddac04))
- **components/transition:** 导出枚举 ([2b3c405](https://github.com/js-tool-pack/react-ui/commit/2b3c4058adca64341556937a93c0f786d18b6e2e))
- **components/transition:** 支持 boolean&&jsx 这种内容传入 ([2ca9732](https://github.com/js-tool-pack/react-ui/commit/2ca973205a7b0750e72c8bc8c801ddfdae3efce1)), closes [#1](https://github.com/js-tool-pack/react-ui/issues/1)
- **components/transition:** 新增类似 vue transition 的用 v-show 控制显隐的模式 ([05352e6](https://github.com/js-tool-pack/react-ui/commit/05352e67f822f4aa0a8b0fbd58f44eb671a14e12)), closes [#14](https://github.com/js-tool-pack/react-ui/issues/14)
- **components:** divider ([2b1e5c5](https://github.com/js-tool-pack/react-ui/commit/2b1e5c56a66f97ae1f2d76689f9063c38ce3b498)), closes [#7](https://github.com/js-tool-pack/react-ui/issues/7)
- **components:** message ([f22092d](https://github.com/js-tool-pack/react-ui/commit/f22092db73868636eab0423773aa09d613996678))
- **components:** space 组件新增 inline、fill 功能 ([05b6b33](https://github.com/js-tool-pack/react-ui/commit/05b6b332d8baa4945fc41b7fe6e8d23dce76fcd2))
- **components:** space 组件新增分隔符和指定标签类型的功能 ([f311568](https://github.com/js-tool-pack/react-ui/commit/f311568debe525ae4f27c984df69ad725794eb02))
- **components:** transition-group 组件支持回调事件 ([4e3f7ca](https://github.com/js-tool-pack/react-ui/commit/4e3f7cabb67de509cebfeac19005f0d6a7a7d93c))
- **components:** 为 Drawer 添加可调整窗体大小的功能 ([4ce46b1](https://github.com/js-tool-pack/react-ui/commit/4ce46b194c0517e30a9dc20d015da46001335ddf)), closes [#19](https://github.com/js-tool-pack/react-ui/issues/19)
- **components:** 为 Resizer 添加指定宽高上限和下限的功能 ([1f219bb](https://github.com/js-tool-pack/react-ui/commit/1f219bbf3b3be4c4b6c0c1cc51159140d1effde4)), closes [#20](https://github.com/js-tool-pack/react-ui/issues/20)
- **components:** 新增 CollapseTransition 折叠动画组件 ([c8ea2c6](https://github.com/js-tool-pack/react-ui/commit/c8ea2c6cf556f1ac89a4007ccc58b93406b275bb)), closes [#30](https://github.com/js-tool-pack/react-ui/issues/30)
- **components:** 新增 Collapse 折叠面板组件 ([d4e6690](https://github.com/js-tool-pack/react-ui/commit/d4e6690f1cd6704cbed1cd73a179b195b00a3a37)), closes [#28](https://github.com/js-tool-pack/react-ui/issues/28)
- **components:** 新增 css 变量和 scss 变量 ([3afde90](https://github.com/js-tool-pack/react-ui/commit/3afde901523c72ddbe4182b175bcb9bf5a97d342))
- **components:** 新增 dialog 组件 ([d704548](https://github.com/js-tool-pack/react-ui/commit/d7045480d290c63e95eb7387c145ff5e0ea8fc1a)), closes [#5](https://github.com/js-tool-pack/react-ui/issues/5)
- **components:** 新增 Drawer 抽屉组件 ([cc77875](https://github.com/js-tool-pack/react-ui/commit/cc778753410bd576eafdea15e356ae063af1b9d4)), closes [#9](https://github.com/js-tool-pack/react-ui/issues/9)
- **components:** 新增 PopConfirm 气泡确认框 ([fd7e519](https://github.com/js-tool-pack/react-ui/commit/fd7e51912fd18281a7c791005bf817a571fabaec))
- **components:** 新增 Popover 气泡弹框 ([c226dfe](https://github.com/js-tool-pack/react-ui/commit/c226dfeb274bff1ae8567a7e51465c9859126afb)), closes [#22](https://github.com/js-tool-pack/react-ui/issues/22)
- **components:** 新增 Resizer 宽高修改组件 ([815d4b9](https://github.com/js-tool-pack/react-ui/commit/815d4b9da31aa8ef822b5d5cd1a16a16a65f336a)), closes [#17](https://github.com/js-tool-pack/react-ui/issues/17)
- **components:** 新增 space 组件 ([1be2ee0](https://github.com/js-tool-pack/react-ui/commit/1be2ee093b3944fcededaa9ba8564adb599c2fed))
- **components:** 新增 Tooltip 组件 ([917cfb4](https://github.com/js-tool-pack/react-ui/commit/917cfb4e7e65210bc210944c6543fbccaa93931d)), closes [#21](https://github.com/js-tool-pack/react-ui/issues/21)
- **components:** 新增 WordBalloon 文字气泡组件 ([1444b7b](https://github.com/js-tool-pack/react-ui/commit/1444b7b3faff62aee991e7d7f456d99a41a8f75c)), closes [#23](https://github.com/js-tool-pack/react-ui/issues/23)
- **components:** 新增布局(layouts)组件 ([72ed54d](https://github.com/js-tool-pack/react-ui/commit/72ed54dcb1bd4ec7bfa9f2b44f7fee63c18a1a3a)), closes [#4](https://github.com/js-tool-pack/react-ui/issues/4)
- **components:** 新增按钮组件 ([f490ef6](https://github.com/js-tool-pack/react-ui/commit/f490ef6f03ec2b7930e971379314889ec7be70af))
- **icons:** 新增 icons 子包 ([7c027b5](https://github.com/js-tool-pack/react-ui/commit/7c027b58df5edfdb889a23110a064d5032e8d7ca))
- **icons:** 新增 icons 子包 ([91fdd4d](https://github.com/js-tool-pack/react-ui/commit/91fdd4d179af5538204df57b775d2526b898a35d))
- **icons:** 新增各种方向的箭头 icon ([62618ec](https://github.com/js-tool-pack/react-ui/commit/62618ec24636de2d3f3822523ee8fc02e73bf8c4))
- **icons:** 新增多个 icon 组件 ([e683411](https://github.com/js-tool-pack/react-ui/commit/e68341160100892742853f2c395b77fc32200a05))
- **shared:** hooks 新增 useForwardRef、useTimeDown ([35e4586](https://github.com/js-tool-pack/react-ui/commit/35e45865e44adb3fca91bc0e7454ff5abfbb9aa3))
- **shared:** numToPx ([c75a151](https://github.com/js-tool-pack/react-ui/commit/c75a151cdb70da9fbc62e382447728ed8c9abf8c))
- **shared:** 抽取 getElRealSize，获取元素真实的尺寸 ([79fbb07](https://github.com/js-tool-pack/react-ui/commit/79fbb077894d7cc19e2dcc37b2bda0f034162cb9))
- **shared:** 抽取 size 的类型 ([ee6330a](https://github.com/js-tool-pack/react-ui/commit/ee6330ab674e683fa44aeb5961b0b844640425c4))
- **shared:** 抽取出 getSizeClassName 公共函数 ([7ca5b5f](https://github.com/js-tool-pack/react-ui/commit/7ca5b5ff09c5571f7ec10e197bd85679e3d6dc5d))
- **share:** nextTick ([f0804b0](https://github.com/js-tool-pack/react-ui/commit/f0804b0dfd1e2623cd451fb0de3634813b083cc4))
- 项目 monorepo 完成，并添加 Transition 和 TransitionGroup 两个基础组件 ([19525df](https://github.com/js-tool-pack/react-ui/commit/19525df55d8489456059a357add29ac34ce0332c))

### Performance Improvements

- **components/collapse-transition:** 优化 CollapseTransition ([19d7310](https://github.com/js-tool-pack/react-ui/commit/19d7310a3d31c36f57fe9909bf061242fc275b35))
- **components/dialog:** 优化 ([70ca063](https://github.com/js-tool-pack/react-ui/commit/70ca063932aeaac9d2158e5dfb7b590919a97c8b))
- **components/layouts:** 抽取公共代码并让各种 layout 组件可以自定义 tag ([4993899](https://github.com/js-tool-pack/react-ui/commit/4993899e50e72fcf28133c52241b6de05441aa52))
- **components/pop-confirm:** 优化 ([049bcaf](https://github.com/js-tool-pack/react-ui/commit/049bcaf23f6a0205bb2bf879fda3f657040fe4af))
- **components/tooltip:** 优化动画 ([9d240a9](https://github.com/js-tool-pack/react-ui/commit/9d240a9dc656652df02fa983277e9159b59f306d))
- **components|icons:** 优化 loading 动画，更换 loading icon ([1dfc89c](https://github.com/js-tool-pack/react-ui/commit/1dfc89ccf4a1f7648b717ef7ec87eaea1532f5aa))
- **components:** 优化 IconProps 的 color 的 ts 类型 ([0d00f63](https://github.com/js-tool-pack/react-ui/commit/0d00f631dd62257f902aa6c0b7073478d04a7e25))
- **components:** 优化 pop 系列组件的弹窗动画 ([be7fafc](https://github.com/js-tool-pack/react-ui/commit/be7fafc863894fbbebc3b597c2277b9d4cad184b))
- **shared:** useForceUpdate 使用 useCallback 包裹起来避免重复渲染 ([830b9f0](https://github.com/js-tool-pack/react-ui/commit/830b9f0ad7eea95ab08ef8ef13e29e189450b733))

### Reverts

- Revert "refactor(components/transition): 调整 transition 组件"，因为有两个元素时默认模式不符合预期 ([1d42f23](https://github.com/js-tool-pack/react-ui/commit/1d42f239ddd449ae75b63566bf87d918b28f9378))
