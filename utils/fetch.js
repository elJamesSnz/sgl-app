import { getToken } from "../api/token";

export async function authFetch(url, params, logout) {
  const token = getToken();

  //usuario n ologueado
  if (!token) {
    logout();
  } else {
    if (hasExpiredToken(token)) {
      //token expirado
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        return null;
      }
    }
  }
}
