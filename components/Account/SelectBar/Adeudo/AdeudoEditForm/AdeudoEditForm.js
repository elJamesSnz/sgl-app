import { Formik } from "formik";
import { map } from "lodash";
import React, { useState } from "react";
import {
  Button,
  Icon,
  Input,
  Form,
  Item,
  Select,
  Option,
} from "semantic-ui-react";

export default function AdeudoEditForm(props) {
  const { viewAdeudo } = props;
  const [editable, setEditable] = useState(false);
  console.log(viewAdeudo);
  //<div className={`${navActive ? "active" : ""} nav__menu-list`}>
  let NombreAlumno_Completo =
    `${viewAdeudo.Nombre_alumno} ` +
    `${viewAdeudo.Paterno_alumno} ` +
    `${viewAdeudo.Materno_alumno}`;

  let NombreEmpleado_Completo =
    `${viewAdeudo.Nombre_empleado} ` +
    `${viewAdeudo.Paterno_empleado} ` +
    `${viewAdeudo.Materno_empleado}`;

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
          <Input
            className={`Nombre_laboratorio ${
              editable ? "disabled" : "disabled"
            }`}
            name="nombrelaboratorio"
            type="text"
            //placeholder="Nombre del Laboratorio"

            placeholder={
              viewAdeudo.Nombre_laboratorio
                ? `${viewAdeudo.Nombre_laboratorio}`
                : "Sin asignar"
            }
          />
          <Item>Nombre del Alumno:</Item>
          <Input
            className={`Nombre_alumno ${editable ? "disabled" : "disabled"}`}
            name="nombre"
            type="text"
            //placeholder="Nombre del Alumno"
            placeholder={`${NombreAlumno_Completo}`}
          />
          <Item>Boleta_adeudo:</Item>
          <Input
            className={`boleta ${editable ? "disabled" : "disabled"}`}
            name="boleta"
            type="text"
            rows={4}
            //placeholder="Boleta del alumno"

            placeholder={
              viewAdeudo.Boleta_adeudo
                ? `${viewAdeudo.Boleta_adeudo}`
                : "Sin asignar"
            }
          />
          <Item>Carrera:</Item>
          <Input
            className={`Nombre_carrera ${editable ? "" : "disabled"}`}
            name="carrera"
            type="text"
            //placeholder="Carrera"

            placeholder={
              viewAdeudo.Nombre_carrera
                ? `${viewAdeudo.Nombre_carrera}`
                : "Sin asignar"
            }
          />
          <Item>Correo:</Item>
          <Input
            className={`Correo_alumno ${editable ? "" : "disabled"}`}
            name="correo"
            type="text"
            //placeholder="Correo"
            placeholder={
              viewAdeudo.Correo_alumno
                ? `${viewAdeudo.Correo_alumno}`
                : "No hay correo registrado"
            }
          />
          <Item>Fecha de peticion</Item>
          <Input
            className={`Fecha_alta ${editable ? "" : "disabled"}`}
            name="fecha_peticion"
            type="text"
            //placeholder="MM/DD/AAAA"

            placeholder={
              viewAdeudo.Fecha_alta ? `${viewAdeudo.Fecha_alta}` : "Sin asignar"
            }
          />
          <Item>Fecha de entrega:</Item>
          <Input
            className={`Fecha_entrega ${editable ? "" : "disabled"}`}
            name="fecha_entrega"
            type="text"
            //placeholder="MM/DD/AAAA"

            placeholder={
              viewAdeudo.Fecha_entrega
                ? `${viewAdeudo.Fecha_entrega}`
                : "Sin asignar"
            }
          />
          <Item>Nombre equipo adeudado:</Item>
          <Input
            className={`Nombre_equipo ${editable ? "disabled" : "disabled"}`}
            name="nombreequipo"
            type="text"
            //placeholder="Nombre equipo adeudado"

            placeholder={
              viewAdeudo.Nombre_equipo
                ? `${viewAdeudo.Nombre_equipo}`
                : "Sin asignar"
            }
          />
          <Item>Asignatura:</Item>
          <Input
            className={`Asignatura_adeudo ${editable ? "" : "disabled"}`}
            name="materia"
            type="text"
            //placeholder="Asignatura"

            placeholder={
              viewAdeudo.Asignatura_adeudo
                ? `${viewAdeudo.Asignatura_adeudo}`
                : "Sin asignar"
            }
          />
          <Item>Profesor:</Item>
          <Input
            className={`Nombre_empleado ${editable ? "" : "disabled"}`}
            name="profesor"
            type="text"
            //placeholder="Profesor"
            placeholder={`${NombreEmpleado_Completo}`}
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
        <div className="AdeudoEditForm__actions__left">
          <Button onClick={() => setEditable(!editable)}>
            <Icon name="edit"></Icon>
          </Button>
          <Button disabled={!editable}>
            <Icon name="save"></Icon>
          </Button>
        </div>
        <div className="AdeudoEditForm__actions__right">
          <Button active={editable} onClick={() => {}}>
            <Icon name="check"></Icon>
          </Button>
          <p>Margar como entregado</p>
        </div>
      </div>
    </div>
  );
}
