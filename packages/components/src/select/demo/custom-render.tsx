/**
 * title: 自定义渲染
 */

import React from 'react';
import {
  Select,
  SelectOptionsItem,
  Icons,
  Space,
  Icon,
  SelectOption,
} from '@tool-pack/react-ui';

const options: SelectOptionsItem[] = Object.keys(Icons).map((key, index) => {
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
            style={{ flex: '0 0 20px', textAlign: 'right', color: '#949494' }}>
            {index + 1}
          </span>
          {RenderedIcon}
        </Space>
      );
    },
    extra: <span style={{ color: '#c7c7c7' }}>{key} </span>,
  };
});

function filter(pattern: string, option: SelectOption): boolean {
  return (option.value as string).toLowerCase().includes(pattern.toLowerCase());
}
const App: React.FC = () => {
  return (
    <>
      <Select options={options} placeholder="select" />
      <br />
      <Select
        placeholder="select with filterable"
        options={options}
        filter={filter}
        filterable
      />
      <br />
      <Select
        placeholder="multiple select"
        options={options}
        maxTagCount={1}
        multiple
      />
      <br />
      <Select
        placeholder="multiple select with filterable"
        options={options}
        maxTagCount={1}
        filter={filter}
        filterable
        multiple
      />
    </>
  );
};

export default App;
