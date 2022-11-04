import { map, size } from "lodash";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Icon,
  Input,
  Form,
  Item,
  Select,
  Dropdown,
} from "semantic-ui-react";
import { registerEquipApi } from "../../../../../api/user";

export default function EquipamientoEditForm(props) {
  const { viewEquip, estadosEquipos, disponibilidadEquipo } = props;
  const [editable, setEditable] = useState(false);
  const [disponibilidad, setDisponibilidad] = useState(undefined);
  const [estado, setEstado] = useState(undefined);
  const [agregar, setAgregar] = useState(undefined);
  console.log(viewEquip);
  return (
    <EditFormEquipo
      disponibilidadEquipo={disponibilidadEquipo}
      estadosEquipos={estadosEquipos}
      editable={editable}
      setEditable={setEditable}
      viewEquip={viewEquip}
      disponibilidad={disponibilidad}
      setDisponibilidad={setDisponibilidad}
      estado={estado}
      setEstado={setEstado}
    />
  );
}

function EditFormEquipo(props) {
  const {
    editable,
    setEditable,
    estadosEquipos,
    disponibilidadEquipo,
    viewEquip,
    selectedLab,
    disponibilidad,
    setDisponibilidad,
    estado,
    setEstado,
  } = props;

  let options = [];
  let optionsDisponibilidad = [];

  {
    let j = 0;
    for (j; j < size(disponibilidadEquipo); j++) {
      const aux = {
        key: j,
        text: disponibilidadEquipo[j].Descripcion,
        value: disponibilidadEquipo[j].Id_disponibilidad_equipo,
      };

      optionsDisponibilidad.push(aux);
    }

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

  const formik = useFormik({
    initialValues: initualValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      if (formData.Alumnos_equipo == "" || formData.Alumnos_equipo == null)
        formData.Alumnos_equipo = viewEquip.Alumnos_equipo;

      if (!disponibilidad || disponibilidad == null)
        formData.Disponibilidad_equipo = viewEquip.Disponibilidad_equipo;
      else formData.Disponibilidad_equipo = disponibilidad;

      if (!estado || estado == null)
        formData.Estado_equipo = viewEquip.Estado_equipo;
      else formData.Estado_equipo = estado;

      if (formData.estado == 2) formData.estado = 2;
      if (formData.estado == 3) formData.estado = 3;
      if (formData.Disponibilidad == 1) formData.Disponibilidad = true;
      if (formData.Disponibilidad == 2) formData.Disponibilidad = false;
      if (formData.id_carrera == 1) formData.id_carrera = 1;
      if (formData.id_carrera == 2) formData.id_carrera = 2;
      if (formData.id_carrera == 3) formData.id_carrera = 3;
      if (formData.id_carrera == 4) formData.id_carrera = 4;
      if (formData.id_carrera == 5) formData.id_carrera = 5;
      formData.idLaboratorio = selectedLab;
      formData.Id_equipo = viewEquip.Id_equipo;
      console.log(formData);
      //const response = await registerEquipApi(formData);
      //console.log(response);
      //router.push("/");
    },
  });

  return (
    <>
      <div className="EquipamientoEditForm">
        <div className="EquipamientoEditForm__form">
          <div>
            <Form
              className="equipamiento_edit"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              style={{ padding: "10px" }}
              onSubmit={formik.handleSubmit}
            >
              <Item>Laboratorio actual: </Item>
              <Item>
                {viewEquip.Nombre_laboratorio
                  ? viewEquip.Nombre_laboratorio
                  : `Sin asignar`}
              </Item>
              <Input
                disabled={!editable}
                className={`nombre ${!editable ? "" : "disabled"}`}
                name="nombre"
                type="text"
                //placeholder="Nombre del Laboratorio"
                placeholder={
                  viewEquip.Nombre_laboratorio
                    ? `${viewEquip.Nombre_laboratorio}`
                    : "Nombre del Laboratorio (sin asignar)"
                }
              />
              <Item>Nombre del equipo:</Item>
              <Input
                className={`Nombre_equipo ${editable ? "" : "disabled"}`}
                name="Nombre_equipo"
                type="text"
                placeholder={
                  viewEquip.Nombre_equipo
                    ? `${viewEquip.Nombre_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Nombre_equipo}
              />
              <Item>Codigo Cams:</Item>
              <Input
                className={`Cams_equipo ${editable ? "" : "disabled"}`}
                name="Cams_equipo"
                type="text"
                //placeholder="Codigo de Barras"
                placeholder={
                  viewEquip.Cams_equipo
                    ? `${viewEquip.Cams_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Cams_equipo}
              />
              <Item>Modelo:</Item>
              <Input
                className={`Modelo_equipo ${editable ? "" : "disabled"}`}
                name="Modelo_equipo"
                type="text"
                rows={4}
                //placeholder="Modelo"
                placeholder={
                  viewEquip.Modelo_equipo
                    ? `${viewEquip.Modelo_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Modelo_equipo}
              />
              <Item>Año:</Item>
              <Input
                className={`Año_equipo ${editable ? "" : "disabled"}`}
                name="Año_equipo"
                type="text"
                //placeholder="Año"
                placeholder={
                  viewEquip.Año_equipo
                    ? `${viewEquip.Año_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Año_equipo}
              />
              <Item>Descripción</Item>
              <Input
                className={`Descripcion_equipo ${editable ? "" : "disabled"}`}
                name="Descripcion_equipo"
                type="text"
                //placeholder="Descripción"
                placeholder={
                  viewEquip.Descripcion_equipo
                    ? `${viewEquip.Descripcion_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Descripcion_equipo}
              />
              <Item>Nombre del manual:</Item>
              <Input
                className={`Manual_equipo ${editable ? "" : "disabled"}`}
                name="Manual_equipo"
                type="text"
                //placeholder="Nombre del manual"
                placeholder={
                  viewEquip.Manual_equipo
                    ? `${viewEquip.Manual_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Manual_equipo}
              />
              <Item>Estatus actual: {viewEquip.Descripcion_estado}</Item>
              <Dropdown
                nombre="Estado_equipo"
                disabled={!editable}
                clearable
                search
                selection
                options={options}
                style={{
                  width: 170,
                }}
                onChange={(e, { value }) => setEstado(value)}
              />
              <Item>Descripción del fallo:</Item>
              <Input
                className={`Descripcion_fallo_equipo ${
                  editable ? "" : "disabled"
                }`}
                name="Descripcion_fallo_equipo"
                type="text"
                //placeholder="Descripción del fallo"
                placeholder={
                  viewEquip.Descripcion_fallo_equipo
                    ? `${viewEquip.Descripcion_fallo_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Descripcion_fallo_equipo}
              />

              <Item>
                Disponibilidad actual: {String(viewEquip.Descripcion)}
              </Item>
              <Dropdown
                disabled={!editable}
                clearable
                search
                selection
                options={optionsDisponibilidad}
                style={{
                  width: 170,
                }}
                onChange={(e, { value }) => setDisponibilidad(value)}
              />
            </Form>
          </div>
          <div className="EquipamientoEditForm__other">
            <Form
              className="equipamiento_edit2"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
              style={{ padding: "10px" }}
            >
              <Item>Marca Equipo</Item>
              <Input
                className={`Marca_equipo ${editable ? "" : "disabled"}`}
                name="Marca_equipo"
                type="text"
                //placeholder="Marca del equipo"
                placeholder={
                  viewEquip.Marca_equipo
                    ? `${viewEquip.Marca_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Marca_equipo}
              />
              <Item>Alumnos beneficiados</Item>
              <Input
                className={`Alumnos_equipo ${editable ? "" : "disabled"}`}
                name="Alumnos_equipo"
                type="text"
                //placeholder="Marca del equipo"
                placeholder={
                  viewEquip.Alumnos_equipo
                    ? `${viewEquip.Alumnos_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Alumnos_equipo}
              />
              <Item>Asignaturas del equipo</Item>
              <Input
                className={`Asignatura_equipo ${editable ? "" : "disabled"}`}
                name="Asignatura_equipo"
                type="text"
                //placeholder="Asignaturas del equipo"
                placeholder={
                  viewEquip.Asignatura_equipo
                    ? `${viewEquip.Asignatura_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Asignatura_equipo}
              />
              <Item>Prácticas del equipo</Item>
              <Input
                className={`Practicas_equipo ${editable ? "" : "disabled"}`}
                name="Practicas_equipo"
                type="text"
                //placeholder="Prácticas del equipo"
                placeholder={
                  viewEquip.Practicas_equipo
                    ? `${viewEquip.Practicas_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Practicas_equipo}
              />
              <Item>Utilidades del equipo</Item>
              <Input
                className={`Utilidad_equipo ${editable ? "" : "disabled"}`}
                name="Utilidad_equipo"
                type="text"
                //placeholder="Utilidades del equipo"
                placeholder={
                  viewEquip.Utilidad_equipo
                    ? `${viewEquip.Utilidad_equipo}`
                    : "Sin asignar"
                }
                onChange={formik.handleChange}
                error={formik.errors.Utilidad_equipo}
              />
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
            </Form>
          </div>
        </div>
        <div className="EquipamientoEditForm__actions">
          <Button onClick={() => setEditable(!editable)}>
            <span>Editar</span>
            <Icon name="edit"></Icon>
          </Button>
          <Form onSubmit={formik.handleSubmit}>
            <Button disabled={!editable} type="submit">
              <Icon name="save"></Icon>
            </Button>
          </Form>
        </div>
      </div>
    </>
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
  };
}
