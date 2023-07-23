import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const SendIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={combineClass}
    >
      <path
        d="M29.8693 4L15.2373 27.268L13.0107 15.8067L3 9.79333L29.8693 4ZM29.8693 4L12.9413 15.8547"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
