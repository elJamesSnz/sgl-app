import React, { useState } from "react";
import { Button, Icon, Input, Form,Item } from "semantic-ui-react";

export default function AdeudoEditForm(props) {
  const { viewAdeudo } = props;
  const [editable, setEditable] = useState(false);
  console.log(viewAdeudo);
  //<div className={`${navActive ? "active" : ""} nav__menu-list`}>

  return (
    <div className={`AdeudoEditForm`}>
      <div className={`AdeudoEditForm__form`}>
        {/* <div className={`AdeudoEditForm__info ${editable ? "" : "disabled"}`}>
          <p>info de la form</p>
          <p>{viewAdeudo.idlaboratorio}</p>
        </div> */}
        <Form
        className="adeudo_edit"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ padding: "10px" }}
        >
            <Item>Laboratorio</Item>
            <Input className={`nombrelaboratorio ${editable ? "" : "disabled"}`}
            name="nombrelaboratorio"
            type="text"
            placeholder="Nombre del Laboratorio"
            value ={`${viewAdeudo.nombrelaboratorio}`}
            />
            <Item>Nombre del Alumno:</Item>
            <Input className={`nombrealumno ${editable ? "" : "disabled"}`}
            name="nombre"
            type="text"
            placeholder="Nombre del Alumno"
            value ={`${viewAdeudo.nombrealumno}`}
            />
            <Item>Boleta:</Item>
            <Input className={`boleta ${editable ? "" : "disabled"}`}
            name="boleta"
            type="text"
            rows={4}
            placeholder="Boleta del alumno"
            value ={`${viewAdeudo.boleta}`}
            />
            <Item>Carrera:</Item>
            <Input className={`carrera ${editable ? "" : "disabled"}`}
            name="carrera"
            type="text"
            placeholder="Carrera"
            value ={`${viewAdeudo.carrera}`}
            />
            <Item>Correo:</Item>
            <Input className={`correo ${editable ? "" : "disabled"}`}
            name="correo"
            type="text"
            placeholder="Correo"
            value ={`${viewAdeudo.correo}`}
            />   
            <Item>Fecha de peticion</Item>
            <Input className={`fecha_peticion ${editable ? "" : "disabled"}`}
                name="fecha_peticion"
                type="text"
                placeholder="MM/DD/AAAA"
                value ={`${viewAdeudo.fecha_peticion}`}
            />
            <Item>Fecha de entrega:</Item>
            <Input className={`fecha_entrega ${editable ? "" : "disabled"}`}
                name="fecha_entrega"
                type="text"
                placeholder="MM/DD/AAAA"
                value ={`${viewAdeudo.fecha_entrega}`}
            />
            <Item>Asignatura:</Item>
            <Input className={`materia ${editable ? "" : "disabled"}`}
                name="materia"
                type="text"
                placeholder="Asignatura"
                value ={`${viewAdeudo.materia}`}
            />
            <Item>Profesor:</Item>
            <Input className={`profesor ${editable ? "" : "disabled"}`}
                name="profesor"
                type="text"
                placeholder="Profesor"
                value ={`${viewAdeudo.profesor}`}
            />
            <Item>Estatus:</Item>
            <Input className={`estatus ${editable ? "" : "disabled"}`}
                name="estatus"
                type="text"
                placeholder="Estatus"
                value ={`${viewAdeudo.estatus ? "Entregado":"No entregado"}`}
            />
        </Form>
        <div className="AdeudoEditForm__img">
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
      <div className="AdeudoEditForm__actions">
        <Button>
          <Icon name="edit"></Icon>
        </Button>
        <Button>
          <Icon name="save"></Icon>
        </Button>
      </div>
    </div>
  );
}
