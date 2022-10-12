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
    <Item>Nombre:</Item>  
      <Input 
          name="nombre"
          type="text"
          placeholder="Nombre del equipo" 
          onChange={formik.handleChange}
          error={formik.errors.nombre}
      />

      <Item>Descripción:</Item> 
          <TextArea 
            name="descripcion"
            type="text"
            rows={4}
            placeholder="Breve descripcion del la utilidad o propósito principal del equipo"
            onChange={formik.handleChange}
            error={formik.errors.descripcion}
          />    

        <Item>Código de barras:</Item>
          <Input 
          name="codigo"
          type="text"
          placeholder="Código de barras" 
          onChange={formik.handleChange}
          error={formik.errors.codigo}
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

        <br></br> 
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
          defaultValue="Funcional"
          style={{
            width: 170,
          }}
          onChange={handleChange}
          //error={formik.errors.estado}
        >
          <Option value="Funcional" >Funcional</Option>
          <Option value="No Funcional">No Funcional</Option>
          <Option value="Funcional con Fallo">Funcional con Fallo</Option>
        </Select>
              
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
    descripcion: "",
    codigo: "",
    modelo:"",
    ano:"",
    manual:"",
    estado:"",
  };
}

function validationSchema() {
  return {
    nombre: Yup.string(),
    descripcion: Yup.string(),
    codigo: Yup.string(),
    modelo:Yup.string(),
    ano:Yup.string(),
    manual:Yup.string(),
    estado:Yup.string(),
  };
}