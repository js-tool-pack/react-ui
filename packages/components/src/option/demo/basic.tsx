/**
 * title: 基础用法
 * description: Option 基础用法。
 */

import React, { useEffect, useRef } from 'react';
import { Option } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return <Option ref={ref}>foo bar</Option>;
};

export default App;
