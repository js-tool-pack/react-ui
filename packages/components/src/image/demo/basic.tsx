/**
 * title: 基础用法
 * description: Image 基础用法。
 */

import { Image } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Image
      src="https://s.cn.bing.net/th?id=OHR.MallarDucks_ZH-CN7422818269_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      attrs={{ style: { background: 'pink' } }}
      fit="contain"
      height={100}
      width={200}
    />
  );
};

export default App;
