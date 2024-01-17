import { RightDouble, LeftDouble, Right, Left } from '@pkg/icons';
import { getClassNames, formatDate } from '@tool-pack/basic';
import type { RequiredPart } from '@tool-pack/types';
import { ButtonContext, Button } from '~/button';
import { getClasses } from '@pkg/shared';
import React from 'react';

interface Props {
  onChange: (value: -1 | 1, type: 1 | 2) => void;
  children?: React.ReactNode;
  showDoubleBtn?: boolean;
  showSingleBtn?: boolean;
  showRightBtn?: boolean;
  showLeftBtn?: boolean;
  value?: Date;
}

const cls = getClasses(
  'date-picker-select',
  ['prev-db', 'prev', 'label', 'next', 'next-db', 'btn'],
  [],
);
const defaultProps = {} satisfies Partial<Props>;

export const DatePickerSelect: React.FC<Props> = (props) => {
  const {
    showDoubleBtn = true,
    showSingleBtn = true,
    showRightBtn = true,
    showLeftBtn = true,
    onChange,
    children,
    value,
  } = props as RequiredPart<Props, keyof typeof defaultProps>;

  return (
    <div className={cls.root}>
      <ButtonContext.Provider value={{ plain: 'text', size: 'small' }}>
        {getLeftBtn()}
        {children ?? (
          <div className={cls.__.label}>
            {value && formatDate(value, 'yyyy-MM-dd')}
          </div>
        )}
        {getRightBtn()}
      </ButtonContext.Provider>
    </div>
  );

  function getLeftBtn(): React.ReactNode {
    if (!showLeftBtn) return null;
    return (
      <>
        {showDoubleBtn && (
          <Button
            className={getClassNames(cls.__['prev-db'], cls.__.btn)}
            onClick={() => onChange(-1, 2)}
            icon={<LeftDouble />}
          />
        )}
        {showSingleBtn && (
          <Button
            className={getClassNames(cls.__.prev, cls.__.btn)}
            onClick={() => onChange(-1, 1)}
            icon={<Left />}
          />
        )}
      </>
    );
  }
  function getRightBtn(): React.ReactNode {
    if (!showRightBtn) return null;
    return (
      <>
        {showSingleBtn && (
          <Button
            className={getClassNames(cls.__.next, cls.__.btn)}
            onClick={() => onChange(1, 1)}
            icon={<Right />}
          />
        )}
        {showDoubleBtn && (
          <Button
            className={getClassNames(cls.__['next-db'], cls.__.btn)}
            onClick={() => onChange(1, 2)}
            icon={<RightDouble />}
          />
        )}
      </>
    );
  }
};
