/**
 * title: 懒加载
 */

import { Image } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Image
      src="https://s.cn.bing.net/th?id=OHR.BadlandsSunrise_ZH-CN5906162228_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      width={192}
      lazy
    />
  );
};

export default App;
