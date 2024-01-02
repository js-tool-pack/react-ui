/**
 * title: 过滤
 */

import {
  SelectOptionsItem,
  Select,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options1: SelectOptionsItem[] = [
  {
    label: 'foo',
    value: 1,
  },
  {
    label: 'bar',
    value: 2,
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
                textAlign: 'right',
                flex: '0 0 20px',
                color: '#949494',
              }}
            >
              {index + 1}
            </span>
            {RenderedIcon}
          </Space>
        );
      },
      extra: <span style={{ color: '#c7c7c7' }}>{key} </span>,
      value: key,
    };
  });

const App: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
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
          const v = option.value;
          if (!v.toLowerCase().includes(pattern.toLowerCase())) return false;
          return !value.includes(v);
        }}
        onChange={setValue}
        placeholder="隐藏已选"
        options={options2}
        value={value}
        filterable
        multiple
      />
    </>
  );
};

export default App;
