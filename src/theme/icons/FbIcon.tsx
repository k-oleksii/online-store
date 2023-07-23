import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const FbIcon: FC<IIconClassProps> = ({ iconClass }) => {
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
        d="M28 10.6667V21.3333C28 23.1014 27.2976 24.7971 26.0474 26.0474C24.7971 27.2976 23.1014 28 21.3333 28H10.6667C8.89856 28 7.20286 27.2976 5.95262 26.0474C4.70238 24.7971 4 23.1014 4 21.3333V10.6667C4 8.89856 4.70238 7.20286 5.95262 5.95262C7.20286 4.70238 8.89856 4 10.6667 4H21.3333C23.1014 4 24.7971 4.70238 26.0474 5.95262C27.2976 7.20286 28 8.89856 28 10.6667Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 28.0001V16.0001C14.6667 13.0827 15.3333 10.6667 20 10.6667M12 17.3334H20"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
