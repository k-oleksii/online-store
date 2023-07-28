import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const CloseIcon: FC<IIconClassProps> = ({ iconClass }) => {
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
        d="M9.01074 22.9907L16.0014 16L22.9921 22.9907M22.9921 9.00934L16.0001 16L9.01074 9.00934"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
