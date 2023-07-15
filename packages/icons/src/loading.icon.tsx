import React from 'react';
import { getComponentClass } from '@pkg/shared';

const className = getComponentClass('loading-icon');
export const Loading: React.FC = () => (
  <svg className={className} viewBox="0 0 66 66">
    <circle
      className={`${className}__path`}
      fill="none"
      strokeWidth="6"
      stroke="currentColor"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"></circle>
  </svg>
);
