import { getToken, hasExpiredToken } from "../api/token";

export async function authFetch(url, params, logout, urlExtra) {
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
        Authorization: `JWT ${token}`,
      },
    };
    if (urlExtra) {
      url = url + urlExtra;
    }
    try {
      const response = await fetch(url, paramsTemp);
      const result = await JSON.stringify(response);
      //console.log(result);
      return result;
    } catch (error) {
      return console.log(error);
    }
  }
}

/*
if (urlExtra) {
      url = url + urlExtra;
    }

    const headers = {
      "Content-type": "application/json",
      Authorization: token,
    };

    res = await http.get(url, headers);
    data = JSON.stringify(res.body);
    return data;

    try {
      const response = await fetch(url, paramsTemp);
      const result = await JSON.stringify(response);
      //console.log(result);
      return result;
    } catch (error) {
      return console.log(error);
    }
*/
