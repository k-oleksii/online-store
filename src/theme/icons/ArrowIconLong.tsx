import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const ArrowIconLong: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83 16"
      fill="none"
      className={combineClass}
    >
      <path d="M82.7072 8.70711C83.0977 8.31658 83.0977 7.68342 82.7072 7.29289L76.3432 0.928932C75.9527 0.538408 75.3195 0.538408 74.929 0.928932C74.5385 1.31946 74.5385 1.95262 74.929 2.34315L80.5859 8L74.929 13.6569C74.5385 14.0474 74.5385 14.6805 74.929 15.0711C75.3195 15.4616 75.9527 15.4616 76.3432 15.0711L82.7072 8.70711ZM0.998535 9H82.0001V7H0.998535V9Z" />
    </svg>
  );
};
