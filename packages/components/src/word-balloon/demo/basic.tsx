/**
 * title: 基础用法
 */

import { PLACEMENTS_12, WordBalloon, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space gap={30} vertical>
      <WordBalloon
        attrs={{ style: { alignSelf: 'flex-end', maxWidth: '50%' } }}
        placement="left-start"
        background={'#b8cfef'}
      >
        {'你是谁? 你是谁? 你是谁?\n'.repeat(5)}
      </WordBalloon>
      <WordBalloon
        attrs={{ style: { alignSelf: 'flex-start', maxWidth: '50%' } }}
        placement="right-start"
        background={'#9eec9e'}
      >
        {'你好，我是ChatGPT，我是ChatGPT，我真的是ChatGPT。\n'.repeat(5)}
      </WordBalloon>

      <WordBalloon>
        <p>
          道可道，非常道；名可名，非常名。无名天地之始，有名万物之母。故常无欲，以观其妙；常有欲，以观其徼（jiào）。此两者同出而异名，同谓之玄，玄之又玄，众妙之门。
        </p>
        <p>
          天下皆知美之为美，斯恶（è）已；皆知善之为善，斯不善已。故有无相生，难易相成，长短相较，高下相倾，音声相和（hè），前后相随。是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。夫（fú）唯弗居，是以不去。
        </p>
        <p>
          不尚贤，使民不争；不贵难得之货，使民不为盗；不见（xiàn）可欲，使民心不乱。是以圣人之治，虚其心，实其腹；弱其志，强其骨。常使民无知无欲，使夫（fú）智者不敢为也。为无为，则无不治。
        </p>
      </WordBalloon>

      <Space gap={30}>
        {PLACEMENTS_12.map((p) => (
          <WordBalloon background={'#b8cfef'} placement={p} key={p}>
            <div style={{ width: '80px' }}>{p}</div>
          </WordBalloon>
        ))}
      </Space>

      <WordBalloon
        background={'linear-gradient(225deg,#ffdee9,#b5fffc)'}
        showArrow={false}
      >
        {'无箭头 '.repeat(5)}
      </WordBalloon>
    </Space>
  );
};

export default App;
