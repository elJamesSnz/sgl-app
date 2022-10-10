import React, { useMemo, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import AuthContext from "../context/AuthContext";
import { setToken, getToken, removeToken } from "../api/token";
import "../styles/globals.css";
import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  //función que guarda token en ls + decodifica el token
  const login = (token) => {
    setToken(token),
      setAuth({
        token,
        //decodificar el token
        idUser: jwtDecode(token).id,
      });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  //useMemo permite guardar información que no actualiza si no cambia al refrescar la página
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  //aùn no se comprueba si user està logueado
  if (auth === undefined) return null;

  console.log(authData.auth);

  return (
    //el AuthContext debe envolver a todo el aplicativo
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
