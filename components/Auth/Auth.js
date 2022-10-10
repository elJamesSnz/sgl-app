import React, { useState } from "react";
import LoginForm from "./LoginForm";

export default function Auth(props) {
  const { onCloseModal, setTitleModel } = props;
  const [showLogin, setShowLogin] = useState(true);

  return showLogin ? <LoginForm onCloseModal={onCloseModal} /> : <></>;
}
