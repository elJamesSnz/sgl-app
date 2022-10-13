import React,{useState} from "react";
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons'; 
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Form,
  Item,
  Button,
} from "semantic-ui-react";

import {  
  Input,
  Select,
  InputNumber,
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
  const { onShowForm,values } = props;
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

      <Item>Código de barras:</Item>
        <Input 
          name="codigo"
          type="text"
          placeholder="Código de barras" 
          onChange={formik.handleChange}
          error={formik.errors.codigo}
        />
      
      
      <Item>Partida:</Item>  
          <Input //Se manda el id_carrera
          name="partida"
          type="text"
          placeholder="Numero de Partida del equipo" 
          onChange={formik.handleChange}
          error={formik.errors.partida}
          /> 

      <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
         >
          No cuenta con manual de usuario
      </Checkbox>

        <Input 
          name="manual"
          type="text"
          placeholder="Nombre del manual de usuairo" 
          onValuesChange={onFormLayoutChange}
          disabled={componentDisabled}
          onChange={formik.handleChange}
          error={formik.errors.manual}
        />
        
        <Item>Estado:</Item> 
        <Select
          //name="estado"
          //type="text"
          defaultValue="1"
          style={{
            width: 170,
          }}
          onChange={handleChange}
          //error={formik.errors.estado}
        >
          <Option value="1" >Funcional</Option>
          <Option value="2">No Funcional</Option>
          <Option value="3">Funcional con Fallo</Option>
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
          //name="estado"
          //type="text"
          defaultValue="1"
          style={{
            width: 170,
          }}
          onChange={handleChange}
          //error={formik.errors.estado}
        >
          <Option value="1" >Disponible</Option>
          <Option value="2">No disponible</Option>
        </Select>

        <Item className="descripcion_item">DESCRIPCION:</Item> 
        <Form className="descripcion">
        <Item>Utilidad:</Item>  
          <Input 
          name="utilidad"
          type="text"
          placeholder="Utilidad" 
          onChange={formik.handleChange}
          error={formik.errors.utilidad}
          />
        <Item>Carrera:</Item>  
          <Select
            id="carrera"
            name="carrera"
            type="text" 
            style={{
              width: 170,
            }}
            onChange={handleChange}
            //onChange={formik.handleChange}
            //error={formik.errors.carrera}
          >
            
            <Option value="1">Telematica</Option>
            <Option value="2">Mecatronica</Option>
            <Option value="3">Bionica</Option>
          </Select>

        <Item>Asignatura:</Item>  
          <Input //Se manda el id_carrera
          name="asignatura"
          type="text"
          placeholder="Asignatura" 
          onChange={formik.handleChange}
          error={formik.errors.asignatura}
          />  
          <Item>Practicas:</Item> 
          <TextArea 
            name="practicas"
            type="text"
            rows={4}
            placeholder="Practicas en las que se utiliza el equipo"
            onChange={formik.handleChange}
            error={formik.errors.practicas}
          /> 
          <Item>Numero Alumnos:</Item>  
          <Input //Se manda el id_carrera
          name="numAlumnos"
          type="text"
          placeholder="Numero de alumnos beneficiados" 
          onChange={formik.handleChange}
          error={formik.errors.numAlumnos}
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
    codigo: "",
    modelo:"",
    ano:"",
    fallo:"",
    estado:"",
    manual:"",
    laboratorio:"",

    disponibilidad:"",
    //Descripcion
    utilidad: "",
    carrera: "",
    asignatura:"",
    practicas:"",
    
    partida:"",
    foto:"",
    
    
  };
}

function validationSchema() {

  return {
    nombre:Yup.string(),//.required(true),
    codigo:Yup.string(),//.required("true"),
    modelo:Yup.string(),
    ano:Yup.string(),
    fallo:Yup.string(),
    estado:Yup.string(),
    manual:Yup.string(),
    laboratorio:Yup.string(),

    disponibilidad:Yup.string(),
    //Descripcion
    utilidad:Yup.string(),
    carrera:Yup.string(),
    asignatura:Yup.string(),
    practicas:Yup.string(),
    numAlumnos:Yup.string(),
    
    partida:Yup.string(),
    foto:"",
  };
}


