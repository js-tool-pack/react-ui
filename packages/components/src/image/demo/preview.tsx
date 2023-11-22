/**
 * title: 禁止预览
 */

import { Image } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Image
      src="https://s.cn.bing.net/th?id=OHR.BadlandsSunrise_ZH-CN5906162228_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      attrs={{ style: { background: 'pink' } }}
      preview={false}
      fit="contain"
      width={192}
    />
  );
};

export default App;
