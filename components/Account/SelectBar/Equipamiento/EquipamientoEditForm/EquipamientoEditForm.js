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
  const { viewEquip, estadosEquipos, disponibilidadEquipo } = props;
  const [editable, setEditable] = useState(false);
  console.log(viewEquip);
  return (
    <EditFormEquipo
      disponibilidadEquipo={disponibilidadEquipo}
      estadosEquipos={estadosEquipos}
      editable={editable}
      setEditable={setEditable}
      viewEquip={viewEquip}
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

    console.log(options);
    console.log(optionsDisponibilidad);
  }

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
            >
              <Item>Laboratorio actual: </Item>
              <Item>
                {viewEquip.Nombre_laboratorio
                  ? viewEquip.Nombre_laboratorio
                  : `Sin asignar`}
              </Item>
              <Input
                className={`nombre ${editable ? "" : "disabled"}`}
                name="nombre"
                type="text"
                //placeholder="Nombre del Laboratorio"
                

                placeholder={
                  viewEquip.Nombre_laboratorio
                    ? `${viewEquip.Nombre_laboratorio}`
                    : "Sin asignar"
                }
              />
              <Item>Nombre del equipo:</Item>
              <Input
                className={`nombreequipo ${editable ? "" : "disabled"}`}
                name="nombreequipo"
                type="text"
                placeholder={
                  viewEquip.Nombre_equipo
                    ? `${viewEquip.Nombre_equipo}`
                    : "Sin asignar"
                }
              />
              <Item>Codigo Cams:</Item>
              <Input
                className={`correo ${editable ? "" : "disabled"}`}
                name="codigo_barras"
                type="text"
                //placeholder="Codigo de Barras"
                placeholder={
                  viewEquip.Cams_equipo
                    ? `${viewEquip.Cams_equipo}`
                    : "Sin asignar"
                }
              />
              <Item>Modelo:</Item>
              <Input
                className={`modelo ${editable ? "" : "disabled"}`}
                name="modelo"
                type="text"
                rows={4}
                //placeholder="Modelo"

                placeholder={
                  viewEquip.Modelo_equipo
                    ? `${viewEquip.Modelo_equipo}`
                    : "Sin asignar"
                }
              />
              <Item>Año:</Item>
              <Input
                className={`ano ${editable ? "" : "disabled"}`}
                name="ano"
                type="text"
                //placeholder="Año"

                placeholder={
                  viewEquip.Año_equipo
                    ? `${viewEquip.Año_equipo}`
                    : "Sin asignar"
                }
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
              />
              <Item>Estatus actual: {viewEquip.Descripcion_estado}</Item>
              <Dropdown
                disabled={!editable}
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
                <Option placeholder={`${estado.Id_estado}`.trim()}>
                  {estado.Descripcion_estado}
                </Option>
              ))}*/
