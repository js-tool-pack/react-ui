import { useFollowingState, OptionValueType, getClasses } from '@pkg/shared';
import type { PickerPanelProps, PickerPanelFC } from '../picker.types';
import { getClassNames } from '@tool-pack/basic';
import React, { useEffect } from 'react';
import { PickerCol } from './picker.Col';

const cls = getClasses('picker-panel', [], []);

export const _PickerPanel: React.FC<PickerPanelProps> = React.forwardRef<
  HTMLDivElement,
  PickerPanelProps
>((props, ref) => {
  const { options = [], attrs = {}, onChange, value } = props;

  const [values, setValues] = useFollowingState(value || []);

  // 触发 onchange
  useEffect(() => {
    if (values === value) return;
    onChange?.(values);
  }, [onChange, values]);

  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      {options.map((opts, index) => (
        <PickerCol
          onPickOption={(opt) => setValue(opt.value, index)}
          value={values[index]}
          options={opts}
          key={index}
        />
      ))}
    </div>
  );

  function setValue(value: OptionValueType, index: number): void {
    setValues((v) => {
      const result = v.slice();
      result.splice(index, 1, value);
      return result;
    });
  }
});

export const PickerPanel = _PickerPanel as PickerPanelFC;
