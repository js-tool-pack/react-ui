import { getComponentClass } from '@pkg/shared';
import React from 'react';

const className = getComponentClass('loading-icon');
export const Loading: React.FC = () => (
  <svg className={className} viewBox="0 0 66 66">
    <circle
      className={`${className}__path`}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="6"
      fill="none"
      cx="33"
      cy="33"
      r="30"
    ></circle>
  </svg>
);
