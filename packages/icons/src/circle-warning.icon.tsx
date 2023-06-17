import React from 'react';

export const CircleWarning: React.FC = () => {
  return (
    <svg viewBox="0 0 1024 1024">
      <path
        d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m0 76.032a372.032 372.032 0 0 0 0 743.936A372.032 372.032 0 0 0 512 140.032zM512 640a48 48 0 1 1 0 96 48 48 0 0 1 0-96z m24-352c4.416 0 8 3.584 8 8v272A8 8 0 0 1 536 576h-48a8 8 0 0 1-8-8v-272c0-4.416 3.584-8 8-8z"
        fill="currentColor"></path>
    </svg>
  );
};
