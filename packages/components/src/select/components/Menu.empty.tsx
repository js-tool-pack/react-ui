import { ConvertOptional } from '@tool-pack/types';
import { getClasses } from '@pkg/shared';
import { SelectProps } from '~/select';
import { Empty } from '~/empty';
import React from 'react';

const cls = getClasses('select-empty', ['content'], []);

export const MenuEmpty: React.FC<
  ConvertOptional<Pick<SelectProps, 'empty'>>
> = (props) => {
  const { empty } = props;
  return <div className={cls.root}>{empty || <Empty />}</div>;
};
