import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const MailIcon: FC<IIconClassProps> = ({ iconClass }) => {
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
        d="M26.5 6H5.5C4.11929 6 3 7.11929 3 8.5V23.5C3 24.8807 4.11929 26 5.5 26H26.5C27.8807 26 29 24.8807 29 23.5V8.5C29 7.11929 27.8807 6 26.5 6Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L16 17L25 10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
