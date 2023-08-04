/**
 * title: 插入html
 * description: 设置 appendTo 可以让 Popover 窗体插入指定的 html标签中。
 */

import React, { useEffect, useRef } from 'react';
import { Popover, Button } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
          <Popover
            trigger="click"
            appendTo={() => rootRef.current || document.body}
            style={{ width: '200px' }}
            content={'渲染在指定的html元素内'}>
            <Button id={'btn1'}>click</Button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default App;
