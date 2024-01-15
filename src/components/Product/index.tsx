import { IProductProps } from '@/types';
import { ProductCard } from './ProductCard';
import { FC } from 'react';

export const Product: FC<IProductProps> = ({ id }) => {
  return (
    <>
      <ProductCard id={id} />
    </>
  );
};
