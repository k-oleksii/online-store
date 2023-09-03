import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const ArrowIconRight: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      viewBox="0 0 24 26"
      fill="none"
      className={combineClass}
    >
      <path
        d="M6 1L18 13L6 25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
