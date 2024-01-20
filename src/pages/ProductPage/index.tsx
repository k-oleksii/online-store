import { Product } from '@/components/Product';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const ProductPage: FC = () => {
  const { id } = useParams();
  const productId = Number(id);
  return (
    <>
      <Product id={productId} />
    </>
  );
};
