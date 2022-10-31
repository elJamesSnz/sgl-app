import { map, size } from "lodash";
import React, { useState } from "react";
import {
  Button,
  Icon,
  Input,
  Form,
  Item,
  Select,
  Dropdown,
} from "semantic-ui-react";

export default function EquipamientoEditForm(props) {
  const { viewEquip, estadosEquipos } = props;
  const [editable, setEditable] = useState(false);
  console.log(viewEquip);
  return (
    <EditFormEquipo
      estadosEquipos={estadosEquipos}
      editable={editable}
      setEditable={setEditable}
      viewEquip={viewEquip}
    />
  );
}

function EditFormEquipo(props) {
  const { editable, setEditable, estadosEquipos, viewEquip } = props;

  let options = [];

  {
    let i = 0;
    for (i; i < size(estadosEquipos); i++) {
      const aux = {
        key: i,
        text: estadosEquipos[i].Descripcion_estado,
        value: estadosEquipos[i].Id_estado,
      };

      options.push(aux);
    }
  }
  return (
    <>
      <div className="EquipamientoEditForm">
        <div className="EquipamientoEditForm__form">
          <Form
            className="adeudo_edit"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ padding: "10px" }}
          >
            <Item>Laboratorio</Item>
            <Input
              className={`nombre ${editable ? "" : "disabled"}`}
              name="nombre"
              type="text"
              placeholder="Nombre del Laboratorio"
              value={`${viewEquip.Nombre_laboratorio}`}
            />
            <Item>Nombre del equipo:</Item>
            <Input
              className={`nombreequipo ${editable ? "" : "disabled"}`}
              name="nombreequipo"
              type="text"
              placeholder="Nombre del equipo"
              value={`${viewEquip.Nombre_equipo}`}
            />
            <Item>Codigo Cams:</Item>
            <Input
              className={`correo ${editable ? "" : "disabled"}`}
              name="codigo_barras"
              type="text"
              placeholder="Codigo de Barras"
              value={`${viewEquip.Cams_equipo}`}
            />
            <Item>Modelo:</Item>
            <Input
              className={`modelo ${editable ? "" : "disabled"}`}
              name="modelo"
              type="text"
              rows={4}
              placeholder="Modelo"
              value={`${viewEquip.Modelo_equipo}`}
            />
            <Item>Año:</Item>
            <Input
              className={`ano ${editable ? "" : "disabled"}`}
              name="ano"
              type="text"
              placeholder="Año"
              value={`${viewEquip.Año_equipo}`}
            />
            <Item>Descripción</Item>
            <Input
              className={`Id_descripcion ${editable ? "" : "disabled"}`}
              name="Id_descripcion"
              type="text"
              placeholder="Descripción"
              value={`${viewEquip.Descripcion_equipo}`}
            />
            <Item>Nombre del manual:</Item>
            <Input
              className={`nombre_manual ${editable ? "" : "disabled"}`}
              name="nombre_manual"
              type="text"
              placeholder="Nombre del manual"
              value={`${viewEquip.nombre_manual}`}
            />
            <Item>Estatus:</Item>
            <Dropdown
              clearable
              search
              selection
              options={options}
              style={{
                width: 170,
              }}
            />
            <Item>Descripción del fallo:</Item>
            <Input
              className={`fallo ${editable ? "" : "disabled"}`}
              name="fallo"
              type="text"
              placeholder="Descripción del fallo"
              value={`${viewEquip.fallo}`}
            />
            <Item>Disponibilidad:</Item>
            <Input
              className={`Disponibilidad ${editable ? "" : "disabled"}`}
              name="Disponibilidad"
              type="text"
              placeholder="Disponibilidad"
              value={`${
                viewEquip.Disponibilidad_equipo ? "Disponible" : "No disponible"
              }`}
            />
          </Form>
          <div className="EquipamientoEditForm__img">
            <img
              alt="example"
              //src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_epf5hcwaMn4XXjm0F1bWC1dWjIJ18-_TcA&usqp=CAU"
            />
            <Button>
              <Icon name="upload"></Icon>
            </Button>
          </div>
        </div>
        <div className="EquipamientoEditForm__actions">
          <Button onClick={() => setEditable(!editable)}>
            <Icon name="edit"></Icon>
          </Button>
          <Button disabled={!editable}>
            <Icon name="save"></Icon>
          </Button>
        </div>
      </div>
    </>
  );
}

/*

{map(estadosEquipos, (estado) => (
                <Option value={`${estado.Id_estado}`.trim()}>
                  {estado.Descripcion_estado}
                </Option>
              ))}*/
