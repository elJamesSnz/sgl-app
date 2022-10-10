import React from "react";
import { Button, Form, Header, Select, Icon } from "semantic-ui-react";
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
  return (
    <>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Field required>
            <Form.Input fluid label="Nombre" placeholder="Nombre" />
            <Form.TextArea label="Descripción" placeholder="Descripción" />
            <Form.Input
              fluid
              label="Código de barras"
              placeholder="Código de barras"
            />
            <Form.Input fluid label="Modelo" placeholder="Modelo" />
            <Form.Input fluid label="Año" placeholder="Año" />
            //Condicion Si tiene Manual ingresa el name
            <Form.Checkbox fluid label="Manual de Usuario" />
            <Form.Input
              fluid
              label="Nombre Manual de Usuario"
              placeholder="Manual de Usuario"
            />
            //Condicional If No Funcional
            <Form.Select
              fluid
              label="Estado del equipo"
              options={estado}
              placeholder="Estado del equipo"
            />
            <Form.Input
              fluid
              label="Descripcion Fallo"
              placeholder="Descripcion Fallo"
            />
            <Header icon>
              <Icon name="png image outline" />
              Foto del fallo
            </Header>
            <Button primary>Add Document</Button>
          </Form.Field>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
