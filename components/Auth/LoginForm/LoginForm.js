import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi, resetPasswordApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";
import { useRouter } from "next/router";

export default function LoginForm(props) {
  const { onCloseModal } = props;
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  //const router = useRouter();

  const formik = useFormik({
    initialValues: initualValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await loginApi(formData);
      console.log(response);
      if (response?.data.session_token) {
        //toast.success("Inicio de sesión exitoso");
        login(response.data.session_token);
        onCloseModal(true);
      } else {
        //toast.error("El email o la contraseña son incorrectos");
      }

      setLoading(false);
    },
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        type="text"
        placeholder="E-mail"
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      ></Form.Input>
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        error={formik.errors.password}
      ></Form.Input>

      <div className="actions">
        <div>
          <Button className="submit" type="submit" loading={loading}>
            Entrar
          </Button>
        </div>
      </div>
    </Form>
  );
}

function initualValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
