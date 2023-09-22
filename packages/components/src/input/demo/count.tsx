/**
 * title: 字数
 */

import { Input } from '@tool-pack/react-ui';
import React from 'react';

const segmenter = new Intl.Segmenter('fr', {
  granularity: 'grapheme',
});

const App: React.FC = () => {
  return (
    <>
      <Input placeholder="showCount" showCount clearable autoSize />
      <br />
      <Input
        placeholder="maxLength + showCount"
        value="👨‍👩‍👦‍👦"
        maxLength={20}
        showCount
        clearable
        autoSize
      />
      <br />
      <Input
        countView={(_value, wordCount) => <span>[{wordCount} , 20]</span>}
        count={(value) => Array.from(segmenter.segment(value)).length}
        placeholder="countView + count + maxLength + showCount"
        value="👨‍👩‍👦‍👦"
        maxLength={20}
        showCount
        clearable
        autoSize
      />
      <br />
      <Input
        placeholder="maxLength + showCount"
        type="textarea"
        maxLength={20}
        showCount
        clearable
        autoSize
        rows={2}
      />
      <br />
      <Input
        autoSize={{ maxRows: 10, minRows: 5 }}
        placeholder="showCount"
        type="textarea"
        showCount
      />
    </>
  );
};

export default App;
