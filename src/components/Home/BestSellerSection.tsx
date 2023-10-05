import { useLoadBestSellerProduct } from '@/hooks/useLoadBestSellerProduct';
import { useEffect, useMemo } from 'react';
import { Loading } from '../Loading';
import { ProductSection } from '../ProductSection';

export const BestSellerSection = () => {
  const {
    errorBestSeller,
    responseBestSeller,
    loadBestSeller,
    isLoadingBestSeller,
  } = useLoadBestSellerProduct();

  const retrieveContent = useMemo(() => {
    if (errorBestSeller) {
      return null;
    }

    if (isLoadingBestSeller) {
      return <Loading />;
    }

    return (
      <ProductSection
        data={responseBestSeller?.data.items}
        title={'Best seller'}
      />
    );
  }, [responseBestSeller, errorBestSeller]);

  useEffect(() => {
    if (!isLoadingBestSeller && errorBestSeller === null) {
      loadBestSeller().catch(e => console.log('Best Seller exception', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
