import useAxios from 'axios-hooks';

export const useLoadProduct = (
  id?: number
) => {
  const url = `https://www.citywheels.website/api/articles/${id}`;

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
    loadProduct: execute,
    errorProduct: error,
    isLoadingProduct: loading,
    responseProduct: data,
  };
};
