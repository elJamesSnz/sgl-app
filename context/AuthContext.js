import { createContext } from "react";
const AuthContext = createContext({
  //datos del usuario
  auth: undefined,
  //guardar token en local storage
  login: () => null,
  //hacer logout desde cualquier parte de la app
  logout: () => null,
  //para recargar la aplicación completa
  setReloadUser: () => null,
});

export default AuthContext;
