export enum EnumIcons {
  search = 'search',
  star = 'star',
  heart = 'heart',
  cart = 'cart',
  user = 'user',
  close = 'close',
  yt = 'yt',
  inst = 'inst',
  in = 'in',
  fb = 'fb',
  mail = 'mail',
  send = 'send',
  arrowLeft = 'arrowLeft',
  arrowRight = 'arrowRight',
  arrowLong = 'arrowLong',
  pass = 'pass',
}

export enum EnumBreakpoints {
  mobile = '600px',
  tablet = '768px',
  tabletPortrait = '1023px',
  desktopSmall = '1280px',
  desktopMedium = '1648px',
}
export interface IIconClassProps {
  iconClass: string;
}

export interface ICardProps {
  path: string;
  title: string;
  img: string;
  imgWebp: string;
  price: number;
  oldPrice?: number;
  sale?: boolean;
  rating?: number;
}
