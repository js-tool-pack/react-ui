import React from 'react';
import { getClasses } from '@pkg/shared';
import { SelectProps } from '~/select';
import { ConvertOptional } from '@tool-pack/types';

const cls = getClasses('select-empty', ['content'], []);

export const MenuEmpty: React.FC<
  ConvertOptional<Pick<SelectProps, 'empty'>>
> = (props) => {
  const { empty } = props;

  return (
    <div className={cls.root}>
      {empty || <div className={cls.__.content}>No Data</div>}
    </div>
  );
};
