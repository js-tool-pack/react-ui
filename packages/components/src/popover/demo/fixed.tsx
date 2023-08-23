/**
 * title: fixed
 * debug: true
 */

import React, { useState } from 'react';
import { Button, Divider, Popover } from '@tool-pack/react-ui';

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
        }}>
        <div>fixed</div>
        <Popover placement="right" content="不如须臾之所学也">
          <div>吾尝终日而思矣；</div>
        </Popover>
        <Popover
          placement="right"
          content={<span>不如登高之博见也</span>}
          appendTo={null}
          attrs={{ style: { width: 'max-content' } }}
          viewport={() => document.body}>
          <div style={{ position: 'relative' }}>吾尝跂而望矣</div>
        </Popover>
      </div>
      <div style={{ transform: 'translateZ(0)' }}>
        <div style={{ height: '20px' }}></div>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'fixed',
              top: '2px',
              left: '10px',
              zIndex: 10,
            }}>
            <Popover
              placement="left"
              trigger="click"
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                fake fixed click
              </div>
            </Popover>
            <Divider vertical />
            <Popover
              placement="right"
              trigger="hover"
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                fake fixed hover
              </div>
            </Popover>
            <Divider vertical />
            <Popover
              placement="bottom"
              trigger="focus"
              content={
                <div>
                  <Button onClick={openLoading} loading={loading}>
                    123123
                  </Button>
                </div>
              }
              attrs={{ style: { width: 'max-content' } }}>
              <button style={{ position: 'relative', display: 'inline-block' }}>
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
