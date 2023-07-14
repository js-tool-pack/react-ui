import React from 'react';
import { getComponentClass } from '@pkg/shared';

const className = getComponentClass('loading-icon');
export const Loading: React.FC = () => (
  <svg className={className} viewBox="0 0 80 80">
    <circle
      className={`${className}__path`}
      fill="none"
      strokeWidth="6"
      stroke="currentColor"
      strokeLinecap="round"
      cx="40"
      cy="40"
      r="30"></circle>
  </svg>
);
