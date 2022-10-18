import React, { useState } from "react";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerDebtApi } from "../../../../../api/user";
import { useRouter } from "next/router";
import { map, size } from "lodash";

import { Form, Item, Button } from "semantic-ui-react";

import { Input, Select, DatePicker, Checkbox, Upload } from "antd";
import form from "antd/lib/form";

export default function CaptureFormAdeudo(props) {
  const { onShowForm, selectedLab, equips } = props;

  const router = useRouter();

  return (
    <div className="panel_adeudo">
      <FormCapturaEquipos
        onShowForm={onShowForm}
        selectedLab={selectedLab}
        equips={equips}
        router={router}
      />
    </div>
  );
}

function FormCapturaEquipos(props) {
  const { onShowForm, selectedLab, equips, router } = props;
  //Validador para ocultar Forms
  const [componentDisabled, setComponentDisabled] = useState(false);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [estatus, setEstatus] = useState(false);

  const formik = useFormik({
    initialValues: initualValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      if (selectedLab == 0 || selectedLab == null) {
        alert("Elige un laboratorio");
        return null;
      }else{
        if (formData.carrera == 1) formData.carrera = 1;
        if (formData.carrera == 2) formData.carrera = 2;
        if (formData.carrera == 3) formData.carrera = 3;
        if (formData.carrera == 4) formData.carrera = 4;
        if (formData.carrera == 5) formData.carrera = 5;
        //if (formData.otro == checked) formData.otro = true;
        //if (formData.otro == off) formData.otro = false;
      }

      if (formData.estatus === 1) formData.estatus = true;
      else formData.estatus = false;
      formData.idlaboratorio = selectedLab;
      console.log(formData);
      const response = await registerDebtApi(formData);
      router.push("/");
    },
  });

  return (
    <Form
      className="captureForm_a"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ padding: "15px" }}
      onSubmit={formik.handleSubmit}
    >
      <Item className="form_Adeudo">
        ------------------------------------------------------
        -----------------------------------------------------
      </Item>
      <Item className="datosAlumno_item">DATOS DEL ALUMNO:</Item>
      <Form className="datoAlumno">
        <Item>Nombre del Alumno:</Item>
        <Input
          name="nombre"
          type="text"
          placeholder="Nombre del Alumno"
          onChange={formik.handleChange}
          error={formik.errors.nombre}
        />

        <Item>Boleta:</Item>
        <Input
          name="boleta"
          type="text"
          rows={4}
          placeholder="Boleta del alumno"
          onChange={formik.handleChange}
          error={formik.errors.boleta}
        />

        <Item>Carrera:</Item>
        <Select
          id="carrera"
          name="id_carrera"
          placeholder="Carrera"
          style={{
            width: 170,
          }}
          value={formik.values.carrera}
          onChange={(value) => {
            formik.setFieldValue("carrera", value);
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

        <Item>Correo:</Item>
        <Input
          name="correo"
          type="text"
          placeholder="Correo"
          onChange={formik.handleChange}
          error={formik.errors.correo}
        />
      </Form>

      <Item className="datosAdeudo_item">DATOS DEL ADEUDO:</Item>
      <Form className="datoAdeudo"></Form>
      <Item>Fecha de peticion</Item>
      <Input
        name="fecha_peticion"
        type="text"
        placeholder="MM/DD/AAAA"
        onChange={formik.handleChange}
        error={formik.errors.fecha_peticion}
      />
      <Item>Fecha de entrega:</Item>
      <Input
        name="fecha_entrega"
        type="text"
        placeholder="MM/DD/AAAA"
        onChange={formik.handleChange}
        error={formik.errors.fecha_entrega}
      />
      {/* <Item>Laboratorio:</Item>
      <Input
        name="idlaboratorio"
        type="text"
        placeholder="Laboratorio"
        onChange={formik.handleChange}
        error={formik.errors.idlaboratorio}
      /> */}

      <Item>Asignatura:</Item>
      <Input
        name="materia"
        type="text"
        placeholder="Asignatura"
        onChange={formik.handleChange}
        error={formik.errors.materia}
      />
      <Item>Profesor:</Item>
      <Input
        name="profesor"
        type="text"
        placeholder="Profesor"
        onChange={formik.handleChange}
        error={formik.errors.profesor}
      />
      <Item>Material o Equipo:</Item>
      <Select
        name="idequipo"
        placeholder="Equipo"
        style={{
          width: 350,
        }}
        value={formik.values.idequipo}
        onChange={(value) => {
          formik.setFieldValue("idequipo", value);
        }}
        onBlur={formik.handleBlur}
        onSelect={formik.handleChange}
        disabled={componentDisabled}
      >
        {map(equips, (equip) => (
          <Option value={`${equip.idequipo}`.trim()}>
            {equip.nombreequipo} - Código {equip.codigo_barras}
          </Option>
        ))}
      </Select>
      <br></br>

      <Checkbox
        name="otro"
        checked={componentDisabled}
        onChange={(e) => {setComponentDisabled(e.target.checked), formik?.setFieldValue("otro", e.target.checked),console.log(e.target.checked)}}
        onBlur={formik.handleBlur}
        onSelect={formik.handleChange}
      >
        Otros componentes no registrados
      </Checkbox>

      <Input
        name="otro_name"
        type="text"
        placeholder="Nombre del componente"
        onValuesChange={onFormLayoutChange}
        disabled={!componentDisabled}
        onChange={formik.handleChange}
        error={formik.errors.otro_name}
      />
      <Input
        name="otro_motivo"
        type="text"
        placeholder="Descripcion del componente"
        onValuesChange={onFormLayoutChange}
        disabled={!componentDisabled}
        onChange={formik.handleChange}
        error={formik.errors.otro_motivo}
      />

      <Item>Estatus:</Item>
      <Select
        name="estatus"
        placeholder="Estado"
        defaultValue="Entregado"
        style={{
          width: 170,
        }}
        value={formik.values.estatus}
        onChange={(value) => {
          formik?.setFieldValue("estatus", value);
        }}
        onBlur={formik.handleBlur}
        onSelect={formik.handleChange}
      >
        <Option value="1">Entregado</Option>
        <Option value="2">No Entregado</Option>
      </Select>

      <br></br>
      <br></br>
      <Button type="submit">Guardar</Button>
    </Form>
  );
}

function initualValues() {
  return {
    nombre: "",
    boleta: "",
    carrera: "",
    fecha_peticion: "",
    fecha_entrega: "",
    idlaboratorio: "",
    materia: "",
    profesor: "",
    idequipo: "",
    estatus: "",
    correo: "",
    otro:"",
    otro_name:"",
    otro_motivo:"",
    
  };
}

function validationSchema() {
  return {
    nombre: Yup.string(),
    boleta: Yup.string(),
    carrera: Yup.string(),
    fecha_peticion: Yup.string(),
    fecha_entrega: Yup.string(),
    idlaboratorio: Yup.string(),
    materia: Yup.string(),
    profesor: Yup.string(),
    idequipo: Yup.string(),
    estatus: Yup.string(),
    correo: Yup.string(),
    otro:Yup.string(),
    otro_name: Yup.string(),
    otro_motivo: Yup.string(),
  };
}
