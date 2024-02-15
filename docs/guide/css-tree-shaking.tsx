/**
 * title: css tree shaking
 */

// 组件库预设的各种 css 变量
import '@tool-pack/react-ui/dist/styles/css.variable.css';
// button 的样式
import '@tool-pack/react-ui/dist/styles/button.css';
import { Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Button type="primary">click</Button>;
};

export default App;
