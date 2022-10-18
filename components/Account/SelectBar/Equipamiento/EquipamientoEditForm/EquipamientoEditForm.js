import React, { useState } from "react";
import { Button, Icon, Input, Form, Item } from "semantic-ui-react";

export default function EquipamientoEditForm(props) {
  const { viewEquip } = props;
  const [editable, setEditable] = useState(false);
  console.log(viewEquip);
  return (
    <div className="EquipamientoEditForm">
      <div className="EquipamientoEditForm__form">
        {/* <div className="EquipamientoEditForm__info">
          <p>info de la form</p>
          <p>{viewEquip.idequipo}</p>
        </div> */}
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
            value={`${viewEquip.nombre}`}
          />
          <Item>Nombre del equipo:</Item>
          <Input
            className={`nombreequipo ${editable ? "" : "disabled"}`}
            name="nombreequipo"
            type="text"
            placeholder="Nombre del equipo"
            value={`${viewEquip.nombreequipo}`}
          />
          <Item>Codigo Cams:</Item>
          <Input
            className={`correo ${editable ? "" : "disabled"}`}
            name="codigo_barras"
            type="text"
            placeholder="Codigo de Barras"
            value={`${viewEquip.codigo_barras}`}
          />
          <Item>Modelo:</Item>
          <Input
            className={`modelo ${editable ? "" : "disabled"}`}
            name="modelo"
            type="text"
            rows={4}
            placeholder="Modelo"
            value={`${viewEquip.modelo}`}
          />
          <Item>Año:</Item>
          <Input
            className={`ano ${editable ? "" : "disabled"}`}
            name="ano"
            type="text"
            placeholder="Año"
            value={`${viewEquip.ano}`}
          />
          <Item>Descripción</Item>
          <Input
            className={`Id_descripcion ${editable ? "" : "disabled"}`}
            name="Id_descripcion"
            type="text"
            placeholder="Descripción"
            value={`${viewEquip.Id_descripcion}`}
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
          <Input
            className={`estatus ${editable ? "" : "disabled"}`}
            name="estatus"
            type="text"
            placeholder="Estatus"
            value={`${viewEquip.estatus ? "Funcional" : "No funcional"}`}
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
              viewEquip.Disponibilidad ? "Disponible" : "No disponible"
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
  );
}
