import { useLoadProducts } from '@/hooks/useLoadProducts';
import { useEffect, useMemo } from 'react';
import { ProductSection } from '../ProductSection';
import { Loading } from '../Loading';

export const BicyclesSection = () => {
  const { errorProducts, isLoadingProducts, loadProducts, responseProducts } =
    useLoadProducts('bicycle');

  const retrieveContent = useMemo(() => {
    if (errorProducts) {
      return;
    }

    if (isLoadingProducts) {
      return <Loading />;
    }

    return (
      <ProductSection data={responseProducts?.data.items} title={'Bicycles'} />
    );
  }, [errorProducts, responseProducts]);

  useEffect(() => {
    if (!isLoadingProducts && errorProducts === null) {
      loadProducts().catch(e => console.log('Bicycles exception', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
