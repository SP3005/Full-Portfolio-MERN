let accessToken = localStorage.getItem("accessToken");

export const apiFetch = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: "Bearer " + accessToken
    },
    credentials: "include"
  });

  if (res.status === 401) {
    const refresh = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/admin/refresh`,
      { method: "POST", credentials: "include" }
    );

    if (refresh.ok) {
      const data = await refresh.json();
      accessToken = data.accessToken;
      localStorage.setItem("accessToken", accessToken);

      return apiFetch(url, options);
    }
  }

  return res;
};
