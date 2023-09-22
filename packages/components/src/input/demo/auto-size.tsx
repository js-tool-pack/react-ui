/**
 * title: 自适应文本域
 */

import { Input } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input
        value=" 回忆像个说书的人，用充满乡音的口吻
        跳过水坑绕过小村，等相遇的缘分
        你用泥巴捏一座城，说将来要娶我进门"
        placeholder="autoSize = true"
        type="textarea"
        clearable
        autoSize
      />
      <br />
      <Input
        value=" 转多少身，过几次门，虚掷青春
        小小的誓言还不稳，小小的泪水还在撑"
        placeholder="autoSize = true, rows = 2"
        type="textarea"
        clearable
        autoSize
        rows={2}
      />
      <br />
      <Input
        value="
      稚嫩的唇在说离分，我的心里从此住了一个人

      曾经模样小小的我们，那年你搬小小的板凳

      为戏入迷我也一路跟，我在找那个故事里的人

      你是不能缺少的部分，你在树下小小的打盹
      "
        placeholder="autoSize = { minRows: 5, maxRows: 10 }"
        autoSize={{ maxRows: 10, minRows: 5 }}
        type="textarea"
      />
    </>
  );
};

export default App;
