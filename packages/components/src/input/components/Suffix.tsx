import { CircleCloseFill, EyeInvisible, Loading, Eye } from '@pkg/icons';
import type { ConvertOptional } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { InputProps } from '../input.types';
import { getClasses } from '@pkg/shared';
import { Icon } from '~/icon';
import React from 'react';

interface Props
  extends ConvertOptional<
    Pick<
      InputProps,
      | 'showPasswordOn'
      | 'clearable'
      | 'showCount'
      | 'loading'
      | 'suffix'
      | 'value'
      | 'type'
    >
  > {
  setInnerType: (type: NonNullable<InputProps['type']>) => void;
  innerType: InputProps['type'];
  countEl: React.ReactNode;
  onClear: () => void;
}

const cls = getClasses(
  'input',
  ['clear', 'suffix', 'loading', 'icon', 'count', 'switch'],
  [],
);

export const Suffix: React.FC<Props> = ({
  showPasswordOn,
  setInnerType,
  clearable,
  showCount,
  innerType,
  loading,
  onClear,
  countEl,
  suffix,
  value,
  type,
}) => {
  const showClear = value && clearable;
  const showSuffix = Boolean(
    showClear ||
      suffix ||
      loading ||
      (type !== 'textarea' && showCount) ||
      type === 'password',
  );

  return (
    <>
      {showSuffix && (
        <div className={cls.__.suffix}>
          {showClear && (
            <Icon
              className={getClassNames(cls.__.icon, cls.__.clear)}
              attrs={{ onClick: onClear }}
            >
              <CircleCloseFill />
            </Icon>
          )}
          {loading && (
            <Icon className={getClassNames(cls.__.icon, cls.__.loading)}>
              <Loading />
            </Icon>
          )}
          {type === 'password' && (
            <Icon
              attrs={{
                onMouseDown: onSwitchMouseDown,
                onMouseUp: onSwitchMouseUp,
                onClick: onSwitchClick,
              }}
              className={getClassNames(cls.__.icon, cls.__.switch)}
            >
              {innerType === 'password' ? <EyeInvisible /> : <Eye />}
            </Icon>
          )}
          {type !== 'textarea' && countEl}
          {suffix}
        </div>
      )}
      {type === 'textarea' && countEl}
    </>
  );

  function onSwitchMouseDown(): void {
    switchType('text');
  }
  function onSwitchMouseUp(): void {
    switchType('password');
  }
  function switchType(type: 'password' | 'text'): void {
    if (showPasswordOn === 'click') return;
    if (innerType === type) return;
    setInnerType(type);
  }
  function onSwitchClick(): void {
    if (showPasswordOn !== 'click') return;
    setInnerType(innerType === 'password' ? 'text' : 'password');
  }
};
