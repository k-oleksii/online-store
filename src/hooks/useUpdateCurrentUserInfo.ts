import useAxios from 'axios-hooks';

export const useUpdateCurrentUserInfo = () => {
  const url = `https://www.citywheels.website/api/users/me`;

  const [{ data, loading, error }, execute] = useAxios(
    {
      url,
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        // ****
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
