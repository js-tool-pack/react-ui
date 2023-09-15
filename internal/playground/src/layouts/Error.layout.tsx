import { useRouteError } from 'react-router-dom';
import React from 'react';

export function ErrorLayout(): JSX.Element {
  const err = useRouteError() as Error & {
    statusText?: string;
    status?: number;
  };
  return (
    <React.Fragment>
      <strong>Error {err.status || 500}</strong>:{' '}
      {err.statusText ?? err.message}
    </React.Fragment>
  );
}
