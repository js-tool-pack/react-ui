/**
 * title: 预览组
 */

import { ImagePreviewGroup, Image } from '@tool-pack/react-ui';
import React from 'react';

const list = [
  'https://s.cn.bing.net/th?id=OHR.BadlandsSunrise_ZH-CN5906162228_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.MallarDucks_ZH-CN7422818269_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.HelloSeal_ZH-CN1064568368_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.SarekSweden_ZH-CN9728518595_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
  'https://s.cn.bing.net/th?id=OHR.AthensAcropolis_ZH-CN9942357439_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
];

const App: React.FC = () => {
  return (
    <ImagePreviewGroup>
      {list.map((i) => (
        <Image width={192} src={i} key={i} />
      ))}
    </ImagePreviewGroup>
  );
};

export default App;
