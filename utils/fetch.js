import { getToken, hasExpiredToken } from "../api/token";

export async function authFetch(url, params, logout) {
  const token = getToken();

  //usuario n ologueado
  if (!token) {
    logout();
  } else {
    if (hasExpiredToken(token)) {
      //token expirado
      logout();
    }

    const paramsTemp = {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(paramsTemp);
    try {
      const response = await fetch(url, paramsTemp);
      console.log(response);
      const result = await response.json();

      return result;
    } catch (error) {
      return console.log(error);
    }
  }
}
