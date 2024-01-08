import { useLoadProduct } from '@/hooks/useLoadProduct';
import { useEffect, useMemo } from 'react';
import { Loading } from '../Loading';
import { FC } from 'react';
import { ProductCardContent } from './ProductCardContent';

interface IProductProps {
  id: number;
}
export const ProductCard: FC<IProductProps> = ({ id }) => {
  const { errorProduct, isLoadingProduct, loadProduct, responseProduct } =
    useLoadProduct(id);

  const retrieveContent = useMemo(() => {
    if (errorProduct) {
      return;
    }

    if (isLoadingProduct || !responseProduct) {
      return <Loading />;
    }

    return <ProductCardContent {...responseProduct.data} />;
  }, [errorProduct, responseProduct]);

  useEffect(() => {
    if (!responseProduct && errorProduct === null) {
      loadProduct().catch(e => console.log('id', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};

