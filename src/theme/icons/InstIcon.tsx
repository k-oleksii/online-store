import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const InstIcon: FC<IIconClassProps> = iconClass => {
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
        d="M15.9998 21.3334C17.4143 21.3334 18.7709 20.7715 19.7711 19.7713C20.7713 18.7711 21.3332 17.4146 21.3332 16.0001C21.3332 14.5856 20.7713 13.229 19.7711 12.2288C18.7709 11.2287 17.4143 10.6667 15.9998 10.6667C14.5853 10.6667 13.2288 11.2287 12.2286 12.2288C11.2284 13.229 10.6665 14.5856 10.6665 16.0001C10.6665 17.4146 11.2284 18.7711 12.2286 19.7713C13.2288 20.7715 14.5853 21.3334 15.9998 21.3334Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 21.3333V10.6667C4 8.89856 4.70238 7.20286 5.95262 5.95262C7.20286 4.70238 8.89856 4 10.6667 4H21.3333C23.1014 4 24.7971 4.70238 26.0474 5.95262C27.2976 7.20286 28 8.89856 28 10.6667V21.3333C28 23.1014 27.2976 24.7971 26.0474 26.0474C24.7971 27.2976 23.1014 28 21.3333 28H10.6667C8.89856 28 7.20286 27.2976 5.95262 26.0474C4.70238 24.7971 4 23.1014 4 21.3333Z"
        strokeWidth="1.5"
      />
      <path
        d="M23.3335 8.67995L23.3468 8.66528"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
