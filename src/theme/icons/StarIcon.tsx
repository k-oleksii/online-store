import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const StarIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={combineClass}
    >
      <g clipPath="url(#clip0_1306_417)">
        <path
          d="M5.7245 5.49047L7.4565 2.00247C7.50692 1.90152 7.58446 1.81662 7.68043 1.75728C7.7764 1.69794 7.887 1.6665 7.99983 1.6665C8.11267 1.6665 8.22327 1.69794 8.31924 1.75728C8.41521 1.81662 8.49275 1.90152 8.54317 2.00247L10.2752 5.49047L14.1472 6.05313C14.2589 6.06862 14.3639 6.11519 14.4504 6.18754C14.5369 6.25989 14.6013 6.35509 14.6363 6.46228C14.6712 6.56948 14.6754 6.68434 14.6482 6.79377C14.621 6.90319 14.5636 7.00277 14.4825 7.08113L11.6812 9.79447L12.3425 13.6278C12.4272 14.1198 11.9072 14.4945 11.4625 14.2625L7.99983 12.4518L4.5365 14.2625C4.0925 14.4951 3.5725 14.1198 3.65717 13.6271L4.3185 9.7938L1.51717 7.08047C1.43649 7.00205 1.37943 6.90257 1.35248 6.79334C1.32552 6.68411 1.32975 6.56951 1.36468 6.46256C1.39961 6.35562 1.46384 6.26061 1.55008 6.18835C1.63631 6.11609 1.74109 6.06948 1.8525 6.0538L5.7245 5.49047Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1306_417">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
