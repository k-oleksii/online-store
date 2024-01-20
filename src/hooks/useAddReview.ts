import useAxios from 'axios-hooks';

export const useAddReview = (reviewText: string, rating: number, id: number) => {
  const url = `https://www.citywheels.website/api/reviews`;
  const [{ data, loading, error }, execute] = useAxios(
    {
      url,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        text: reviewText,
        stars: rating,
        article: id,
      },
    },
    { useCache: false, manual: true }
  );

  return {
    loadAddReview: execute,
    errorAddReview: error,
    isLoadingAddReview: loading,
    responseAddReview: data,
  };
};
