/**
 * title: 自定义渲染
 */

import {
  SelectOptionsItem,
  SelectOption,
  Select,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: SelectOptionsItem[] = Object.keys(Icons).map((key, index) => {
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
            style={{ textAlign: 'right', flex: '0 0 20px', color: '#949494' }}
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

function filter(pattern: string, option: SelectOption): boolean {
  return (option.value as string).toLowerCase().includes(pattern.toLowerCase());
}
const App: React.FC = () => {
  return (
    <>
      <Select placeholder="select" options={options} />
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
