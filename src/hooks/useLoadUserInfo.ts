import useAxios from 'axios-hooks';

export const useLoadUserInfo = (
  id: number
) => {
  const url = `https://www.citywheels.website/api/users/${id}`;

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
    loadUserInfo: execute,
    errorUserInfo: error,
    isLoadingUserInfo: loading,
    responseUserInfo: data,
  };
};
