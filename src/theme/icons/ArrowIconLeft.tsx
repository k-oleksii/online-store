import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const ArrowIconLeft: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 26"
      fill="none"
      className={combineClass}
    >
      <path
        d="M18 1L6 13L18 25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
