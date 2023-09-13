/**
 * title: 异步加载
 */

import React, { useRef, useState } from 'react';
import { SelectOption, Select, Icons, Space, Icon } from '@tool-pack/react-ui';

const Options: SelectOption[] = Object.keys(Icons).map((key, index) => {
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

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [mValue, setMValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<SelectOption[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  return (
    <>
      <Select
        placeholder="select"
        onChange={setValue}
        onSearch={onSearch}
        loading={loading}
        options={options}
        value={value}
        remote
      />
      <br />
      <Select
        placeholder="select multiple"
        onChange={setMValue}
        onSearch={onSearch}
        loading={loading}
        options={options}
        value={mValue}
        multiple
        remote
      />
    </>
  );

  function onSearch(p: string): void {
    setLoading(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const options = p
        ? Options.filter((opt) =>
            (opt.value as string).toLowerCase().includes(p.toLowerCase()),
          )
        : [];
      setOptions(options);
      setLoading(false);
    }, 1500);
  }
};

export default App;
