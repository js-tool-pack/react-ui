import { NotFountLayout } from './layouts/NotFound.layout';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorLayout } from './layouts/Error.layout';
import { AppLayout } from './layouts/App.layout';
import { getDemos } from './utils/getDemos';
import App from './app/App';

export const baseRouter = [
  {
    element: getDemos(import.meta.glob('~/transition/demo/*.tsx')),
    name: 'transition 动画',
    path: '/transition',
  },
  {
    element: getDemos(import.meta.glob('~/transition-group/demo/*.tsx')),
    name: 'transition-group 动画组',
    path: '/transition-group',
  },
  {
    element: getDemos(import.meta.glob('~/loading/demo/*.tsx')),
    name: 'loading 加载中',
    path: '/loading',
  },
  {
    element: getDemos(import.meta.glob('~/button/demo/*.tsx')),
    name: 'button 按钮',
    path: '/button',
  },
  {
    element: getDemos(import.meta.glob('~/layouts/demo/*.tsx')),
    name: 'layout 布局',
    path: '/layout',
  },
  {
    element: getDemos(import.meta.glob('~/divider/demo/*.tsx')),
    name: 'divider 分割线',
    path: '/divider',
  },
  {
    element: getDemos(import.meta.glob('~/dialog/demo/*.tsx')),
    name: 'dialog 弹窗',
    path: '/dialog',
  },
  {
    element: getDemos(import.meta.glob('~/icon/demo/*.tsx')),
    name: 'icon 图标',
    path: '/icon',
  },
  {
    element: getDemos(import.meta.glob('~/space/demo/*.tsx')),
    name: 'space 间距',
    path: '/space',
  },
  {
    element: getDemos(import.meta.glob('~/resizer/demo/*.tsx')),
    name: 'resizer 修改宽高',
    path: '/resizer',
  },
  {
    element: getDemos(import.meta.glob('~/drawer/demo/*.tsx')),
    name: 'drawer 抽屉',
    path: '/drawer',
  },
  {
    element: getDemos(import.meta.glob('~/message/demo/*.tsx')),
    name: 'message 信息',
    path: '/message',
  },
  {
    element: getDemos(import.meta.glob('~/word-balloon/demo/*.tsx')),
    name: 'word-balloon 文字气泡',
    path: '/word-balloon',
  },
  {
    element: getDemos(import.meta.glob('~/popover/demo/*.tsx')),
    name: 'popover 弹出层',
    path: '/popover',
  },
  {
    element: getDemos(import.meta.glob('~/tooltip/demo/*.tsx')),
    name: 'tooltip 文字提示',
    path: '/tooltip',
  },
  {
    element: getDemos(import.meta.glob('~/pop-confirm/demo/*.tsx')),
    name: 'pop-confirm 弹出确认框',
    path: '/pop-confirm',
  },
  {
    element: getDemos(import.meta.glob('~/collapse-transition/demo/*.tsx')),
    name: 'collapse-transition 折叠动画',
    path: '/collapse-transition',
  },
  {
    element: getDemos(import.meta.glob('~/collapse/demo/*.tsx')),
    name: 'collapse 折叠面板',
    path: '/collapse',
  },
  {
    element: getDemos(import.meta.glob('~/option/demo/*.tsx')),
    name: 'option 选项',
    path: '/option',
  },
  {
    element: getDemos(import.meta.glob('~/dropdown/demo/*.tsx')),
    name: 'dropdown 下拉菜单',
    path: '/dropdown',
  },
  {
    element: getDemos(import.meta.glob('~/number-transition/demo/*.tsx')),
    name: 'number-transition 数值动画',
    path: '/number-transition',
  },
  {
    element: getDemos(import.meta.glob('~/alert/demo/*.tsx')),
    name: 'alert 提示',
    path: '/alert',
  },
  {
    element: getDemos(import.meta.glob('~/switch/demo/*.tsx')),
    name: 'switch 开关',
    path: '/switch',
  },
  {
    element: getDemos(import.meta.glob('~/tag/demo/*.tsx')),
    name: 'tag 标签',
    path: '/tag',
  },
  {
    element: getDemos(import.meta.glob('~/select/demo/*.tsx')),
    name: 'select 选择器',
    path: '/select',
  },
  {
    element: getDemos(import.meta.glob('~/input/demo/*.tsx')),
    name: 'input 输入框',
    path: '/input',
  },
  {
    element: getDemos(import.meta.glob('~/image/demo/*.tsx')),
    name: 'image 图像',
    path: '/image',
  },
  {
    element: getDemos(import.meta.glob('~/slider/demo/*.tsx')),
    name: 'slider 滑块',
    path: '/slider',
  },
  {
    element: getDemos(import.meta.glob('~/empty/demo/*.tsx')),
    name: 'empty 空状态',
    path: '/empty',
  },
  {
    element: getDemos(import.meta.glob('~/timeline/demo/*.tsx')),
    name: 'timeline 时间线',
    path: '/timeline',
  },
  {
    element: getDemos(import.meta.glob('~/calendar/demo/*.tsx')),
    name: 'calendar 日历',
    path: '/calendar',
  },
  /*insert target*/
];

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <App />,
        path: '/',
      },
      ...baseRouter,
    ],
    errorElement: <ErrorLayout />,
    element: <AppLayout />,
    path: '',
  },
  {
    element: <NotFountLayout />,
    path: '*',
  },
]);
