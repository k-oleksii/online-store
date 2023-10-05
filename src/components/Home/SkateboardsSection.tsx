import { useLoadProducts } from '@/hooks/useLoadProducts';
import { useEffect, useMemo } from 'react';
import { Loading } from '../Loading';
import { ProductSection } from '../ProductSection';

export const SkateboardsSection = () => {
  const { errorProducts, isLoadingProducts, loadProducts, responseProducts } =
    useLoadProducts('skateboard');

  const retrieveContent = useMemo(() => {
    if (errorProducts) {
      return;
    }

    if (isLoadingProducts) {
      return <Loading />;
    }

    return (
      <ProductSection
        data={responseProducts?.data.items}
        title={'Skateboards'}
      />
    );
  }, [errorProducts, responseProducts]);

  useEffect(() => {
    if (!isLoadingProducts && errorProducts === null) {
      loadProducts().catch(e => console.log('Skateboard', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
