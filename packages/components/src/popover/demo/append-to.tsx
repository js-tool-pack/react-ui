/**
 * title: 插入html
 * description: 设置 appendTo 可以让 Popover 窗体插入指定的 html标签中。
 */

import { Popover, Button } from '@tool-pack/react-ui';
import React, { useEffect, useRef } from 'react';

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
      style={{
        position: 'relative',
        alignItems: 'center',
        background: 'cyan',
        overflow: 'hidden',
        height: '200px',
      }}
      ref={rootRef}
    >
      <div style={{ overflow: 'auto', height: '200px' }} ref={scrollerRef}>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            display: 'flex',
            height: '300%',
            width: '300%',
          }}
        >
          <Popover
            appendTo={() => rootRef.current || document.body}
            attrs={{ style: { width: '200px' } }}
            content={'渲染在指定的html元素内'}
            trigger="click"
          >
            <Button attrs={{ id: 'btn1' }}>click</Button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default App;
