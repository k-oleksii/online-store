import { useLoadProducts } from '@/hooks/useLoadProducts';
import { useEffect, useMemo } from 'react';
import { Loading } from '../Loading';
import { ProductSection } from '../ProductSection';

export const BicyclesSection = () => {
  const { errorProducts, isLoadingProducts, loadProducts, responseProducts } =
    useLoadProducts('bicycle');

  const retrieveContent = useMemo(() => {
    if (errorProducts) {
      return;
    }

    if (isLoadingProducts || !responseProducts) {
      return <Loading />;
    }

    return (
      <ProductSection data={responseProducts?.data.items} title={'Bicycles'} />
    );
  }, [errorProducts, responseProducts]);

  useEffect(() => {
    if (!responseProducts && errorProducts === null) {
      loadProducts().catch(e => console.log('Bicycles exception', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
