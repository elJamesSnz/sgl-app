import { Formik } from "formik";
import { map, size } from "lodash";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Icon,
  Input,
  Form,
  Item,
  Select,
  Option,
  TextArea,
} from "semantic-ui-react";
import { DatePicker, Checkbox } from "antd";

export default function AdeudoEditForm(props) {
  const { viewAdeudo } = props;
  const [editable, setEditable] = useState(false);
  //Indica si es editar un equipo o agregar uno
  const [agregar, setAgregar] = useState(false);
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [componentDisabled2, setComponentDisabled2] = useState(false);
  useEffect(() => {
    if (viewAdeudo == null || size(viewAdeudo) == 0) {
      setAgregar(true);
    }
  }, []);

  console.log(viewAdeudo);

  var NombreAlumno_Completo = null;
  var NombreEmpleado_Completo = null;

  if (!agregar) {
    NombreAlumno_Completo =
      `${viewAdeudo.Nombre_alumno} ` +
      `${viewAdeudo.Paterno_alumno} ` +
      `${viewAdeudo.Materno_alumno}`;

    NombreEmpleado_Completo =
      `${viewAdeudo.Nombre_empleado} ` +
      `${viewAdeudo.Paterno_empleado} ` +
      `${viewAdeudo.Materno_empleado}`;
  }

  const formik = useFormik({
    initialValues: initualValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      if (agregar) {
        //VALIDACIONES AGREGAR
      } else {
        //VALIDACIONES EDITAR
      }
      console.log(formData);

      if (agregar) {
        // const response = await RegisterEquipApi(formData);
        alert("agregar");
      } else {
        //const response = await EditFormEquipo(formData);
        alert("editar");
      }

      //console.log(response);
      //router.push("/");
    },
  });

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
          {/* ALUMNO */}
          <Item>Nombre del Alumno:</Item>
          <Input
            className={`Nombre_alumno ${editable ? "" : "disabled"}`}
            name="nombre"
            type="text"
            //placeholder="Nombre del Alumno"
            placeholder={
              NombreAlumno_Completo ? `${NombreAlumno_Completo}` : "Sin asignar"
            }
          />
          <Item>Boleta_adeudo:</Item>
          <Input
            className={`boleta ${editable ? "" : "disabled"}`}
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

          {/* ADEUDO */}

          <br></br>
          <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          >
            Adeuda un equipo
          </Checkbox>
          <Item>Nombre equipo adeudado:</Item>
          <Input
            className={`Nombre_equipo ${editable ? "" : "disabled"}`}
            name="nombreequipo"
            type="text"
            //placeholder="Nombre equipo adeudado"
            placeholder={
              viewAdeudo.Nombre_equipo
                ? `${viewAdeudo.Nombre_equipo}`
                : "Sin asignar"
            }
            disabled={!componentDisabled}
          />
          <br></br>
          <Item>Descripcion del equipo adeudado:</Item>
          <TextArea disabled
            className={`Descripcion_equipo ${editable ? "" : "disabled"}`}
            name="Descripcion_equipo"
            type="text"
            //placeholder="Nombre equipo adeudado"
            placeholder={
              viewAdeudo.Descripcion_equipo
                ? `${viewAdeudo.Descripcion_equipo}`
                : "Sin asignar"
            }
            disabled={!componentDisabled}
          />
          <Item>Modelo equipo adeudado:</Item>
          <Input
            className={`Modelo_equipo ${editable ? "" : "disabled"}`}
            name="Modelo"
            type="text"
            //placeholder="Nombre equipo adeudado"
            placeholder={
              viewAdeudo.Modelo_equipo
                ? `${viewAdeudo.Modelo_equipo}`
                : "Sin asignar"
            }
            disabled={!componentDisabled}
          />
          
          <br></br>
          <Checkbox
            checked={componentDisabled2}
            onChange={(e) => setComponentDisabled2(e.target.checked)}
          >
            Adeuda un componente 
          </Checkbox>
          <Item>Nombre del componente:</Item>
          <Input
            className={`Nombre_componente ${
              editable || agregar ? "" : "disabled"
            }`}
            //name="Manual_equipo"
            type="text"
            placeholder="Nombre del Componente"
            /* placeholder={
              viewEquip.Nombre_componente
                ? `${viewEquip.Nombre_componente}`
                : "Sin asignar"
            } */
           // onChange={formik.handleChange}
           // onValuesChange={onFormLayoutChange}
           disabled={!componentDisabled2}
           // error={formik.errors.Manual_equipo}
          />
          <br></br>
          <Item>Descripcion del componente adeudado:</Item>
          <TextArea disabled
            className={`Descripcion_componente ${editable ? "" : "disabled"}`}
            name="Descripcion_componente"
            type="text"
            //placeholder="Nombre equipo adeudado"
            /* placeholder={
              viewAdeudo.Descripcion_componente
                ? `${viewAdeudo.Descripcion_componente}`
                : "Sin asignar"
            } */
            disabled={!componentDisabled2}
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
            placeholder={
              NombreEmpleado_Completo
                ? `${NombreEmpleado_Completo}`
                : "Sin asignar"
            }
          />
          <Item>Fecha de peticion</Item>
          <DatePicker
            className={`Fecha_alta ${editable ? "" : "disabled"}`}
            name="fecha_peticion"
            type="text"
            //placeholder="MM/DD/AAAA"

            placeholder={
              viewAdeudo.Fecha_alta ? `${viewAdeudo.Fecha_alta}` : "Sin asignar"
            }
            // onChange = {(event) => this.setState({startDate: event.target.value})}
          />
          <Item>Fecha de entrega:</Item>
          <DatePicker
            className={`Fecha_entrega ${editable ? "" : "disabled"}`}
            name="fecha_entrega"
            type="text"
            //placeholder="MM/DD/AAAA"

            placeholder={
              viewAdeudo.Fecha_entrega
                ? `${viewAdeudo.Fecha_entrega}`
                : "Sin asignar"
            }
            //onChange = {(event) => this.setState({startDate: event.target.value})}
          />
        <Item>Estado del adeudo:</Item>
          <Input
            className={`Descripcion_estado_adeudo ${editable ? "" : "disabled"}`}
            name="profesor"
            type="text"
            //placeholder="Profesor"
            placeholder={
              Descripcion_estado_adeudo
                ? `${viewAdeudo.Descripcion_estado_adeudo}`
                : "Sin asignar"
            }
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
          {!agregar && (
            <Button onClick={() => setEditable(!editable)}>
              <>
                <span>Editar</span>
                <Icon name="edit"></Icon>
              </>
            </Button>
          )}

          <Form onSubmit={formik.handleSubmit}>
            {!agregar && (
              <Button disabled={!editable} type="submit">
                <Icon name="save"></Icon>
              </Button>
            )}
            {agregar && (
              <Button disabled={editable} type="submit">
                <Icon name="save"></Icon>
              </Button>
            )}
          </Form>
        </div>
        {!agregar && (
          <div className="AdeudoEditForm__actions__right">
            <Button active={editable} onClick={() => {}}>
              <Icon name="check"></Icon>
            </Button>
            <p>Margar como entregado</p>
          </div>
        )}
      </div>
    </div>
  );
}
function initualValues() {
  return {
    Alumnos_equipo: "",
    Asignatura_equipo: "",
    Año_equipo: "",
    Cams_equipo: "",
    Descripcion: "",
    Descripcion_equipo: "",
    Descripcion_estado: "",
    Descripcion_fallo_equipo: "",
    Disponibilidad_equipo: "",
    Estado_equipo: "",
    Foto_equipo: "",
    Id_laboratorio: "",
    Manual_equipo: "",
    Marca_equipo: "",
    Modelo_equipo: "",
    Nombre_equipo: "",
    Nombre_laboratorio: "",
    Practicas_equipo: "",
    Utilidad_equipo: "",
    Descripcion_estado_adeudo: "",
  };
}

function validationSchema() {
  return {
    Alumnos_equipo: Yup.string(),
    Asignatura_equipo: Yup.string(),
    Año_equipo: Yup.string(),
    Cams_equipo: Yup.string(),
    Descripcion: Yup.string(),
    Descripcion_equipo: Yup.string(),
    Descripcion_estado: Yup.string(),
    Descripcion_fallo_equipo: Yup.string(),
    Disponibilidad_equipo: Yup.string(),
    Estado_equipo: Yup.string(),
    Foto_equipo: Yup.string(),
    Id_laboratorio: Yup.string(),
    Manual_equipo: Yup.string(),
    Marca_equipo: Yup.string(),
    Modelo_equipo: Yup.string(),
    Nombre_equipo: Yup.string(),
    Nombre_laboratorio: Yup.string(),
    Practicas_equipo: Yup.string(),
    Utilidad_equipo: Yup.string(),
    Descripcion_estado_adeudo: Yup.string(),
  };
}
