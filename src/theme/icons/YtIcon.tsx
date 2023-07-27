import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const YtIcon: FC<IIconClassProps> = ({ iconClass }) => {
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
        d="M18.6667 15.9999L14 18.6666V13.3333L18.6667 15.9999Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6665 16.9428V15.0561C2.6665 11.1961 2.6665 9.26545 3.87317 8.02411C5.08117 6.78145 6.9825 6.72811 10.7838 6.62011C12.5838 6.56945 14.4238 6.53345 15.9998 6.53345C17.5745 6.53345 19.4145 6.56945 21.2158 6.62011C25.0172 6.72811 26.9185 6.78145 28.1252 8.02411C29.3332 9.26545 29.3332 11.1974 29.3332 15.0561V16.9428C29.3332 20.8041 29.3332 22.7334 28.1265 23.9761C26.9185 25.2174 25.0185 25.2721 21.2158 25.3788C19.4158 25.4308 17.5758 25.4668 15.9998 25.4668C14.2608 25.4616 12.522 25.4322 10.7838 25.3788C6.9825 25.2721 5.08117 25.2188 3.87317 23.9761C2.6665 22.7334 2.6665 20.8028 2.6665 16.9441V16.9428Z"
        strokeWidth="1.5"
      />
    </svg>
  );
};