import { FC } from 'react';
import { CartIcon } from './CartIcon';
import { CloseIcon } from './CloseIcon';
import { HeartIcon } from './HeartIcon';
import { SearchIcon } from './SearchIcon';
import { UserIcon } from './UserIcon';

export interface Icons {
  [key: string]: FC<{ iconClass: string }>;
}

export const icons: Icons = {
  search: SearchIcon,
  heart: HeartIcon,
  cart: CartIcon,
  user: UserIcon,
  close: CloseIcon,
};
