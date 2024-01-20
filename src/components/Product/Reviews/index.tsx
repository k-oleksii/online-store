import { useEffect, useMemo } from 'react';
import { FC } from 'react';

import { Loading } from '../../Loading';
import { useLoadReviewsByArticleId } from '@/hooks/useLoadReviewsByArticleId';
import { ReviewsSlider } from './ReviewsSlider';
import { IProductProps } from '@/types';


export const Reviews: FC<IProductProps> = ({ id }) => {
  const {
    errorReviewsByArticleId,
    isLoadingReviewsByArticleId,
    loadReviewsByArticleId,
    responseReviewsByArticleId,
  } = useLoadReviewsByArticleId(id);
 
  const retrieveContent = useMemo(() => {
    if (errorReviewsByArticleId) {
      return;
    }

    if (isLoadingReviewsByArticleId || !responseReviewsByArticleId) {
      return <Loading />;
    }

    return <ReviewsSlider {...responseReviewsByArticleId.data} />;
  }, [errorReviewsByArticleId, responseReviewsByArticleId]);

  useEffect(() => {
    if (!responseReviewsByArticleId && errorReviewsByArticleId === null) {
      loadReviewsByArticleId().catch(e => console.log('id', e));
    }
  }, []);

  return <>{retrieveContent}</>;
};
