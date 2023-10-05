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
  google = 'google',
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
  id: number;
  price: number;
  inStock: boolean;
  description: string;
  characteristic: string;
  rating: null | number;
  name: string;
  views: number;
  isPreviouslyUsed: boolean;
  images: {
    id: number;
    name: string;
    url: string;
  }[];
  sale: {
    id: number;
    newPrise: number;
    activeTill: string;
  };
  reviews: any[];
  categories: {
    id: number;
    name: string;
  }[];
}
