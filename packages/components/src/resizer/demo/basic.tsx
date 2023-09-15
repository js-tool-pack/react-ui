/**
 * title: 基础用法
 * description: Resizer 基础用法。<br />
 *   由于 html 元素定位的特殊性，同一个元素最多两个边可以用该组件拖动；
 *   另外两个边拖动时虽然也能调整大小，但是拖动条跟随位置会有偏差。<br />
 *   注意：Resizer 的父元素的 position 不能是 static。
 */

import { Resizer } from '@tool-pack/react-ui';
import styles from './basic.module.scss';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className={styles['root']}>
      鼠标移至下面四个盒子边框处拖动，可调整盒子大小。
      <div className="boxes-wrapper">
        <div className="box pos-origin">
          <Resizer />
          <Resizer placement="right" />
        </div>
        <div className="box pos-top-right">
          <Resizer />
          <Resizer placement="left" />
        </div>
        <div className="box pos-bottom-left">
          <Resizer placement="top" />
          <Resizer placement="right" />
        </div>
        <div className="box pos-bottom-right">
          <Resizer placement="top" />
          <Resizer placement="left" />
        </div>
      </div>
      <div className="flex-demo">
        鼠标移至下面两个色块之间拖动，可调整盒子大小。
        <div className="flex-demo-box">
          <div className="left">
            <Resizer placement="right" />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
