import { useFollowingState, OptionValueType, getClasses } from '@pkg/shared';
import type { PickerPanelProps, PickerPanelFC } from '../picker.types';
import { getClassNames } from '@tool-pack/basic';
import React, { useEffect } from 'react';
import { PickerCol } from './picker.Col';

const cls = getClasses('picker-panel', [], ['evenly-divided', 'auto-divided']);

export const _PickerPanel = React.forwardRef<HTMLDivElement, PickerPanelProps>(
  (props, ref) => {
    const {
      evenlyDivided = true,
      options = [],
      attrs = {},
      onChange,
      value,
    } = props;

    const [values, setValues] = useFollowingState(value || []);

    // 触发 onchange
    useEffect(() => {
      if (values === value) return;
      onChange?.(values);
    }, [onChange, values]);

    return (
      <div
        {...attrs}
        className={getClassNames(cls.root, attrs.className, {
          [cls['--']['evenly-divided']]: evenlyDivided,
          [cls['--']['auto-divided']]: !evenlyDivided,
        })}
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
        const result: typeof v = [];
        result[index] = value;
        options.forEach((opt, i) => {
          if (index === i) return;
          result[i] = v[i] ?? opt[0]!.value;
        });
        return result;
      });
    }
  },
);

export const PickerPanel = _PickerPanel as PickerPanelFC;
