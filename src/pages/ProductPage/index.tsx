import { ProductCard } from '@/components/ProductCard';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  return <ProductCard id={productId} />;
};
