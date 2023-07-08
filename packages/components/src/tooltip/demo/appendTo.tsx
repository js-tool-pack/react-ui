/**
 * title: 插入html
 * description: 设置 appendTo 可以让 Tooltip 窗体插入指定的 html标签中。
 */

import React, { useEffect, useRef, useState } from 'react';
import { Tooltip, Button } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [, forceUpdate] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    forceUpdate(1);
    const el = scrollerRef.current;
    if (!el) return;
    setTimeout(() => {
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }, 500);
  }, []);
  return (
    <div
      ref={rootRef}
      style={{
        position: 'relative',
        height: '200px',
        background: 'cyan',
        overflow: 'hidden',
      }}>
      <div ref={scrollerRef} style={{ height: '200px', overflow: 'auto' }}>
        <div
          style={{
            width: '300%',
            height: '300%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Tooltip
            trigger="click"
            appendTo={() => rootRef.current || document.body}
            style={{ width: '200px' }}
            title={'渲染在指定的html元素内'}>
            <Button id={'btn1'}>click</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default App;
