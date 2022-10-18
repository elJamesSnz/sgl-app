import React, { useState } from "react";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Item, Button } from "semantic-ui-react";
import { useRouter } from "next/router";

import { Input, Select, InputNumber, Checkbox, Upload } from "antd";
import { registerEquipApi } from "../../../../../api/user";
const { TextArea } = Input;

export default function CaptureForm(props) {
  const { onShowForm, selectedLab } = props;
  const router = useRouter();
  return (
    <div className="panel_equipamiento">
      <FormCapturaEquipos
        onShowForm={onShowForm}
        selectedLab={selectedLab}
        router={router}
      />
    </div>
  );
}

function FormCapturaEquipos(props) {
  const { onShowForm, values, selectedLab, router } = props;
  //Validador para ocultar Forms
  const [componentDisabled, setComponentDisabled] = useState(false);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initualValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      if (selectedLab == 0 || selectedLab == null) {
        alert("Elige un laboratorio");
        return null;
      } else {
        if (formData.estado == 1) formData.estado = 1;
        if (formData.estado == 2) formData.estado = 2;
        if (formData.estado == 3) formData.estado = 3;
        if (formData.Disponibilidad == 1) formData.Disponibilidad = true;
        if (formData.Disponibilidad == 2) formData.Disponibilidad = false;
        if (formData.id_carrera == 1) formData.id_carrera = 1;
        if (formData.id_carrera == 2) formData.id_carrera = 2;
        if (formData.id_carrera == 3) formData.id_carrera = 3;
        if (formData.id_carrera == 4) formData.id_carrera = 4;
        if (formData.id_carrera == 5) formData.id_carrera = 5;
        formData.idLaboratorio = selectedLab;
        console.log(formData);
        const response = await registerEquipApi(formData);
        console.log(response);
        router.push("/");
      }
    },
  });

  return (
    <Form
      className="captureForm"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ padding: "15px" }}
      onSubmit={formik.handleSubmit}
    >
      <Item>Nombre:</Item>
      <Input
        name="nombre"
        type="text"
        placeholder="Nombre del equipo"
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      />

      <Item>Modelo:</Item>
      <Input
        name="modelo"
        type="text"
        placeholder="Modelo"
        onChange={formik.handleChange}
        error={formik.errors.modelo}
      />

      <Item>Año:</Item>
      <Input
        name="ano"
        type="text"
        placeholder="Año"
        onChange={formik.handleChange}
        error={formik.errors.ano}
      />

      <Item>Código Cams</Item>
      <Input
        name="codigo_barras"
        type="text"
        placeholder="Código de barras"
        onChange={formik.handleChange}
        error={formik.errors.codigo_barras}
      />

      <Item>Partida:</Item>
      <Input //Se manda el id_carrera
        name="Partida"
        type="text"
        placeholder="Numero de Partida del equipo"
        onChange={formik.handleChange}
        error={formik.errors.Partida}
      />

      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        No cuenta con manual de usuario
      </Checkbox>

      <Input
        name="nombre_manual"
        type="text"
        placeholder="Nombre del manual de usuairo"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
        onChange={formik.handleChange}
        error={formik.errors.nombre_manual}
      />

      <Item>Estado:</Item>
      <Select
        id="estado"
        name="estado"
        placeholder="estado"
        style={{
          width: 170,
        }}
        value={formik.values.estado}
        onChange={(value) => {
          formik.setFieldValue("estado", value);
        }}
        onBlur={formik.handleBlur}
        onSelect={formik.handleChange}
      >
        <Option value="1">Funcional</Option>
        <Option value="2">No Funcional</Option>
        <Option value="3">Funcional con fallo</Option>
      </Select>

      <Item>Descripción del fallo:</Item>
      <TextArea
        name="fallo"
        type="text"
        rows={4}
        placeholder="Descripción del fallo presentado"
        onChange={formik.handleChange}
        error={formik.errors.fallo}
      />

      <Item>Disponibilidad:</Item>
      <Select
        name="Disponibilidad"
        placeholder="Disponibilidad"
        defaultValue="Disponible"
        style={{
          width: 170,
        }}
        value={formik.values.Disponibilidad}
        onChange={(value) => {
          formik?.setFieldValue("Disponibilidad", value);
        }}
        onBlur={formik.handleBlur}
        onSelect={formik.handleChange}
      >
        <Option value="1">Disponible</Option>
        <Option value="2">No disponible</Option>
      </Select>

      <Item className="descripcion_item">DESCRIPCION:</Item>
      <Form className="descripcion">
        <Item>Utilidad:</Item>
        <Input
          name="Utilidad"
          type="text"
          placeholder="Utilidad"
          onChange={formik.handleChange}
          error={formik.errors.Utilidad}
        />
        <Item>Carrera:</Item>
        <Select
          id="id_carrera"
          name="id_carrera"
          placeholder="Carrera"
          style={{
            width: 170,
          }}
          value={formik.values.id_carrera}
          onChange={(value) => {
            formik.setFieldValue("id_carrera", value);
          }}
          onBlur={formik.handleBlur}
          onSelect={formik.handleChange}
        >
          <Option value="1">Telematica</Option>
          <Option value="2">Mecatronica</Option>
          <Option value="3">Bionica</Option>
          <Option value="4">Energia</Option>
          <Option value="5">ISISA</Option>
        </Select>

        <Item>Asignatura:</Item>
        <Input //Se manda el id_carrera
          name="Asignatura"
          type="text"
          placeholder="Asignatura"
          onChange={formik.handleChange}
          error={formik.errors.Asignatura}
        />
        <Item>Practicas:</Item>
        <TextArea
          name="Practicas_Aplic"
          type="text"
          rows={4}
          placeholder="Practicas en las que se utiliza el equipo"
          onChange={formik.handleChange}
          error={formik.errors.Practicas_Aplic}
        />
        <Item>Numero Alumnos:</Item>
        <Input //Se manda el id_carrera
          name="Alumnos_beneficiados"
          type="text"
          placeholder="Numero de alumnos beneficiados"
          onChange={formik.handleChange}
          error={formik.errors.Alumnos_beneficiados}
        />
      </Form>

      <Item valuePropName="fileList">Evidencia:</Item>
      <Upload action="/upload.do" listType="picture-card">
        <div>
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Subir imagen
          </div>
        </div>
      </Upload>

      <Button type="submit">Guardar</Button>
    </Form>
  );
}

function initualValues() {
  return {
    nombre: "",
    codigo_barras: "",
    modelo: "",
    ano: "",
    fallo: "",
    estado: "",
    nombre_manual: "",
    idLaboratorio: "",

    Disponibilidad: "",
    //Descripcion
    Utilidad: "",
    id_carrera: "",
    Asignatura: "",
    Practicas_Aplic: Yup.string(),
    Alumnos_beneficiados: "",

    Partida: "",
    Foto_fallo: "",
  };
}

function validationSchema() {
  return {
    nombre: Yup.string(), //.required(true),
    codigo_barras: Yup.string(), //.required("true"),
    modelo: Yup.string(),
    ano: Yup.string(),
    fallo: Yup.string(),
    estado: Yup.string(),
    nombre_manual: Yup.string(),
    idLaboratorio: Yup.string(),

    Disponibilidad: Yup.string(),
    //Descripcion
    Utilidad: Yup.string(),
    id_carrera: Yup.string(),
    Asignatura: Yup.string(),
    Practicas_Aplic: Yup.string(),
    Alumnos_beneficiados: Yup.string(),

    Partida: Yup.string(),
    Foto_fallo: Yup.string(),
  };
}
