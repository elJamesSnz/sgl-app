import React,{useState} from "react";
import 'antd/dist/antd.css'; 
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const estado = [
  { key: "Funcional", text: "Funcional", value: "Funcional" },
  { key: "No Funcional", text: "No Funcional", value: "No Funcional" },
  {
    key: "Funcional con fallos",
    text: "Funcional con fallos",
    value: "Funcional con fallos",
  },
];

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

  return (
    <>
      <Form className="captureForm"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Nombre">
          <Input placeholder="Nombre del equipo"/>
        </Form.Item>
        <Form.Item label="Descripción">
          <TextArea rows={4} placeholder="Breve descripcion del la utilidad o propósito principal del equipo"/>
        </Form.Item>
        <Form.Item label="Código de barras">
          <Input placeholder="Código de barras (PARTIDA)"/>
        </Form.Item>
        <Form.Item label="Modelo">
          <Input placeholder="Modelo"/>
        </Form.Item>
        <Form.Item label="Año">
          <InputNumber placeholder="Año"/>
        </Form.Item>

        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
        >
          Tiene manual de usuario
        </Checkbox>
        <Form
          labelCol={{span: 4}}
          wrapperCol={{span: 14}}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
          disabled={componentDisabled}
        >
          <Form.Item label="Manual de usuario">
          <Input placeholder="Nombre del manual de usuairo"/>
          </Form.Item>
        </Form>

        <Form.Item label="Estado">
          <Select>
            <Select.Option value="demo">Funcional</Select.Option>
            <Select.Option value="demo">No Funcional</Select.Option>
            <Select.Option value="demo">Funcional con fallos</Select.Option>
          </Select>
        </Form.Item>
        



        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
