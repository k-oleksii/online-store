import useAxios from 'axios-hooks';

const defaultParams = {
  limit: 20,
  page: 1,
};

export const useLoadProducts = (
  category: string,
  searchParams = defaultParams
) => {
  const url = `https://www.citywheels.website/api/articles?page=${searchParams.page}&limit=${searchParams.limit}&category=${category}`;

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
    loadProducts: execute,
    errorProducts: error,
    isLoadingProducts: loading,
    responseProducts: data,
  };
};
