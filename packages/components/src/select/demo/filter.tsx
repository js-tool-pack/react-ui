/**
 * title: 过滤
 */

import React, { useState } from 'react';
import {
  Icon,
  Icons,
  Select,
  SelectOptionsItem,
  Space,
} from '@tool-pack/react-ui';

const options1: SelectOptionsItem[] = [
  {
    value: 1,
    label: 'foo',
  },
  {
    value: 2,
    label: 'bar',
  },
];

const options2: SelectOptionsItem[] = Object.keys(Icons)
  .slice(0, 5)
  .map((key, index) => {
    const Ico = Icons[key as keyof typeof Icons];
    const RenderedIcon = (
      <Icon>
        <Ico />
      </Icon>
    );
    return {
      value: key,
      label: (selected, option) => {
        if (selected) {
          return (
            <Space gap={2}>
              {RenderedIcon}
              <span>{option.value}</span>
            </Space>
          );
        }
        // option
        return (
          <Space gap={6}>
            <span
              style={{
                flex: '0 0 20px',
                textAlign: 'right',
                color: '#949494',
              }}>
              {index + 1}
            </span>
            {RenderedIcon}
          </Space>
        );
      },
      extra: <span style={{ color: '#c7c7c7' }}>{key} </span>,
    };
  });

const App: React.FC = () => {
  const [value, setValue] = useState<React.Key[]>([]);
  return (
    <>
      <Select placeholder="select" options={options1} filterable clearable />
      <br />
      <Select
        placeholder="multiple select"
        options={options1}
        filterable
        multiple
      />
      <br />
      <Select
        filter={(pattern, option) => {
          const v = option.value as string;
          if (!v.toLowerCase().includes(pattern.toLowerCase())) return false;
          return !value.includes(v);
        }}
        placeholder="隐藏已选"
        options={options2}
        onChange={setValue}
        value={value}
        filterable
        multiple
      />
    </>
  );
};

export default App;
