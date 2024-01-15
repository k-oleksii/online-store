import useAxios from 'axios-hooks';

export const useLoadReviewsByArticleId = (
  id: number
) => {
  const url = `https://www.citywheels.website/api/reviews/article/${id}`;

  const [{ data, loading, error }, execute] = useAxios(
    {
      url,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    { useCache: false, manual: true }
  );

  return {
    loadReviewsByArticleId: execute,
    errorReviewsByArticleId: error,
    isLoadingReviewsByArticleId: loading,
    responseReviewsByArticleId: data,
  };
};
