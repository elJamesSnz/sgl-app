import React,{useState} from "react";
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons'; 

import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Checkbox,
  Upload,
} from "antd";

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

  return (
    <>
      <Form
        className="captureForm"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Nombre">
          <Input placeholder="Nombre del equipo" />
        </Form.Item>
        <Form.Item label="Descripción">
          <TextArea
            rows={4}
            placeholder="Breve descripcion del la utilidad o propósito principal del equipo"
          />
        </Form.Item>
        <Form.Item label="Código de barras">
          <Input placeholder="Código de barras" />
        </Form.Item>
        <Form.Item label="Modelo">
          <Input placeholder="Modelo" />
        </Form.Item>
        <Form.Item label="Año">
          <InputNumber placeholder="Año" />
        </Form.Item>

        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
        >
          No cuenta con manual de usuario
        </Checkbox>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
          disabled={componentDisabled}
        >
          <Form.Item label="Manual de usuario">
            <Input placeholder="Nombre del manual de usuairo" />
          </Form.Item>
        </Form>

        <Form.Item label="Estado">
        <Select
          defaultValue="Funcional"
          style={{
            width: 170,
          }}
          onChange={handleChange}
        >
          <Option value="Funcional">Funcional</Option>
          <Option value="No Funcional">No Funcional</Option>
          <Option value="Funcional con Fallo">Funcional con Fallo</Option>
        </Select>
        </Form.Item>

        <Form.Item label="Foto" valuePropName="fileList">
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
        </Form.Item>


        <Form.Item label="Guardar">
          <Button>Guardar</Button>
        </Form.Item>
      </Form> 
    </>
  );
}
