/**
 * title: fixed
 * debug: true
 */

import { Divider, Popover, Button } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const openLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '10vh',
          right: '10vw',
          zIndex: 10,
        }}
      >
        <div>fixed</div>
        <Popover content="不如须臾之所学也" placement="right">
          <div>吾尝终日而思矣；</div>
        </Popover>
        <Popover
          attrs={{ style: { width: 'max-content' } }}
          content={<span>不如登高之博见也</span>}
          viewport={() => document.body}
          placement="right"
          appendTo={null}
        >
          <div style={{ position: 'relative' }}>吾尝跂而望矣</div>
        </Popover>
      </div>
      <div style={{ transform: 'translateZ(0)' }}>
        <div style={{ height: '20px' }}></div>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'fixed',
              left: '10px',
              top: '2px',
              zIndex: 10,
            }}
          >
            <Popover
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}
              placement="left"
              trigger="click"
            >
              <div style={{ display: 'inline-block', position: 'relative' }}>
                fake fixed click
              </div>
            </Popover>
            <Divider vertical />
            <Popover
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}
              placement="right"
              trigger="hover"
            >
              <div style={{ display: 'inline-block', position: 'relative' }}>
                fake fixed hover
              </div>
            </Popover>
            <Divider vertical />
            <Popover
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}
              placement="bottom"
              trigger="focus"
            >
              <button style={{ display: 'inline-block', position: 'relative' }}>
                fake fixed focus
              </button>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
