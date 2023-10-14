import { useLoadSaleProduct } from '@/hooks/useLoadSaleProduct';
import { useEffect, useMemo } from 'react';
import { Loading } from '../Loading';
import { ProductSection } from '../ProductSection';

export const SaleSection = () => {
  const {
    errorBestSeller,
    responseBestSeller,
    loadBestSeller,
    isLoadingBestSeller,
  } = useLoadSaleProduct();

  const retrieveContent = useMemo(() => {
    if (errorBestSeller) {
      return null;
    }

    if (isLoadingBestSeller) {
      return <Loading />;
    }

    return (
      <ProductSection data={responseBestSeller?.data.items} title={'Sale'} />
    );
  }, [responseBestSeller, errorBestSeller]);

  useEffect(() => {
    if (!isLoadingBestSeller && errorBestSeller === null) {
      loadBestSeller().catch(e => console.log('Sale exception', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
