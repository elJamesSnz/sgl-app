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
        
        <Item>Fecha de peticion y Fecha de entrega:</Item>
        <DatePicker.RangePicker
          style={{
            width: '50%'
          }}
          name="fecha"
          //type="text"
          onChange={formik.handleChange}
          error={formik.errors.fecha}
        />

        <Item>Laboratorio:</Item>
          <Input 
          name="lab"
          type="text"
          placeholder="Laboratorio" 
          onChange={formik.handleChange}
          error={formik.errors.lab}
          />
        
        <Item>Asignatura:</Item>  
          <Input 
          name="asignatura"
          type="text"
          placeholder="Asignatura" 
          onChange={formik.handleChange}
          error={formik.errors.asignatura}
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
          name="material"
          type="text"
          placeholder="Material o equipo adeudado" 
          onValuesChange={onFormLayoutChange}
          disabled={componentDisabled}
          onChange={formik.handleChange}
          error={formik.errors.material}
          />
        
        <Item>Estatus:</Item> 
        <Select
          //name="estado"
          //type="text"
          defaultValue="Entregado"
          style={{
            width: 170,
          }}
          onChange={handleChange}
          //error={formik.errors.estado}
        >
          <Option value="Entregado" >Entregado</Option>
          <Option value="No Entregado">No Entregado</Option>
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
    fecha_inicio:"",
    fecha_fin:"",
    lab:"",
    asignatura:"",
    profesor:"",
    material:"",
    estado:"",
    correo:"",
  };
}

function validationSchema() {
  return {
    nombre: Yup.string(),
    boleta: Yup.string(),
    carrera: Yup.string(),
    fecha_inicio:Yup.string(),
    fecha_fin:Yup.string(),
    lab:Yup.string(),
    asignatura:Yup.string(),
    profesor:Yup.string(),
    material:Yup.string(),
    estado:Yup.string(),
    correo:Yup.string(),
  };
}