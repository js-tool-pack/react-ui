import { CollapseTransition } from '@pkg/components';
import { Loading as LoadingIcon } from '@pkg/icons';
import { ButtonProps } from '~/button';
import React, { useMemo } from 'react';
import { Icon } from '~/icon';

export function useBtnIcon(
  rootClass: string,
  icon: ButtonProps['icon'],
  loading: ButtonProps['loading'],
): React.ReactElement {
  return useMemo(() => {
    const className = `${rootClass}__icon`;
    const Loading = (
      <Icon className={className} key="loading-icon">
        <LoadingIcon />
      </Icon>
    );

    if (icon)
      return loading ? Loading : <Icon className={className}>{icon}</Icon>;
    return <CollapseTransition width>{loading && Loading}</CollapseTransition>;
  }, [loading, icon]);
}
