import { useContext } from "react";
import AuthContext from "../context/AuthContext";

//usar los datos del contexto como función en cualquier parte de la app
export default () => useContext(AuthContext);
