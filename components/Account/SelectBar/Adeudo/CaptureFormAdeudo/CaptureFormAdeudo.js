import React,{useState} from "react";
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons'; 
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi, resetPasswordApi } from "../../../../../api/user";
import { useRouter } from "next/router";

import {
  Form,
  Item,
  Button,
} from "semantic-ui-react";

import {  
  Input,
  Select,
  DatePicker,
  Checkbox,
  Upload,} from "antd";

const { TextArea } = Input;

export default function CaptureForm(props) {
  const { onShowForm } = props;

  return (
    <div>
      <FormCapturaEquipos onShowForm={onShowForm} />
    </div>
  );
}

function FormCapturaEquipos(props) {
  const { onShowForm } = props;
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
      console.log(formData);
    },
  });

  return (
    <Form
    className="captureForm"
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    style={{padding:'15px'}}
    onSubmit={formik.handleSubmit}
    >
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
          <Input 
          name="carrera"
          type="text"
          placeholder="Carrera" 
          onChange={formik.handleChange}
          error={formik.errors.carrera}
          />

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
        <DatePicker
          name="fecha_peticion"
          style={{
            width: '50%'
          }}
        />
        <Item>Fecha de entrega:</Item>
        <DatePicker
          name="fecha_entrega"
          style={{
            width: '50%'
          }}
        />

        <Item>Laboratorio:</Item>
          <Input 
          name="idlaboratorio"
          type="text"
          placeholder="Laboratorio" 
          onChange={formik.handleChange}
          error={formik.errors.idlaboratorio}
          />
        
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
          <Input 
          name="idequipo"
          type="text"
          placeholder="Material o equipo adeudado" 
          onValuesChange={onFormLayoutChange}
          disabled={componentDisabled}
          onChange={formik.handleChange}
          error={formik.errors.idequipo}
          />
        
        <Item>Estatus:</Item> 
        <Select
          name = "estatus"
          placeholder="Estado"
          defaultValue="Entregado"
          style={{
            width: 170,
          }}
          value={formik.values.estatus}
          onChange={(value) => { formik.setFieldValue('estatus', value); }}
          onBlur={formik.handleBlur}
          onSelect={formik.handleChange}
          >
          <Option value="TRUE">Entregado</Option>
          <Option value="FALSE">No Entregado</Option>
        </Select>


          <br></br><br></br>
      <Button type="submit">Guardar</Button>

    </Form>
  );
}

function initualValues() {
  return {
    nombre: "",
    boleta: "",
    carrera: "",
    fecha_peticion:"",
    fecha_entrega:"",
    idlaboratorio:"",
    materia:"",
    profesor:"",
    idequipo:"",
    estatus:"",
    correo:"",
  };
}

function validationSchema() {
  return {
    nombre: Yup.string(),
    boleta: Yup.string(),
    carrera: Yup.string(),
    fecha_peticion:Yup.string(),
    fecha_entrega:Yup.string(),
    idlaboratorio:Yup.string(),
    materia:Yup.string(),
    profesor:Yup.string(),
    idequipo:Yup.string(),
    estatus:Yup.string(),
    correo:Yup.string(),
  };
}