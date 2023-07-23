import { FC } from 'react';
import { CartIcon } from './CartIcon';
import { CloseIcon } from './CloseIcon';
import { FbIcon } from './FbIcon';
import { HeartIcon } from './HeartIcon';
import { InIcon } from './InIcon';
import { InstIcon } from './InstIcon';
import { MailIcon } from './MailIcon';
import { SearchIcon } from './SearchIcon';
import { SendIcon } from './SendIcon';
import { UserIcon } from './UserIcon';
import { YtIcon } from './YtIcon';

export interface Icons {
  [key: string]: FC<{ iconClass: string }>;
}

export const icons: Icons = {
  search: SearchIcon,
  heart: HeartIcon,
  cart: CartIcon,
  user: UserIcon,
  close: CloseIcon,
  fb: FbIcon,
  in: InIcon,
  inst: InstIcon,
  yt: YtIcon,
  mail: MailIcon,
  send: SendIcon,
};
