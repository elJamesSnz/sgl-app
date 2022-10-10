import React from "react";
import {
  Button,
  Form,
  Header,
  Select,
  Icon,
  DateInput,
} from "semantic-ui-react";
const Laboratorio = [
  { key: "Fisica1", text: "Fisica1", value: "Fisica1" },
  { key: "Fisica2", text: "Fisica2", value: "Fisica2" },
  {
    key: "Sistemas Digitales 1",
    text: "Sistemas Digitales 1",
    value: "Sistemas Digitales 1",
  },
];
const estatus = [
  { key: "Entregado", text: "Entregado", value: "Entregado" },
  { key: "NoEntregado", text: "NoEntregado", value: "NoEntregado" },
];

export default function CaptureFormAdeudo() {
  return (
    <div>
      <FormCapturaAdeudos />
    </div>
  );
}

function FormCapturaAdeudos(props) {
  return (
    <>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Field required>
            <Form.Input fluid label="NombreAlumno" placeholder="NombreAlumno" />
            <Form.Input fluid label="Boleta" placeholder="Boleta" />
            <Form.Input fluid label="Carrera" placeholder="Carrera" />
            <Form.Input
              fluid
              label="Fecha y Hora de peticion "
              placeholder="Fecha y Hora de peticion"
            />
            <Form.Input
              fluid
              label="Fecha y Hora de entrega "
              placeholder="Fecha y Hora de entrega"
            />
            <Form.Select
              fluid
              label="Laboratorio"
              options={Laboratorio}
              placeholder="Laboratorio"
            />

            <Form.Input
              fluid
              label="Material Solicitado "
              placeholder="Material Solicitado"
            />
            <Form.Input fluid label="Materia " placeholder="Materia" />
            <Form.Input fluid label="Profesor  " placeholder="Profesor" />

            <Form.Select
              fluid
              label="Estatus"
              options={estatus}
              placeholder="Estatus"
            />
          </Form.Field>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
