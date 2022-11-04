import React, { Component, useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import classNames from "classnames";
import { Icon } from "semantic-ui-react";
import { forEach, map, size } from "lodash";
import { useRouter } from "next/router";
import { Button, Loader } from "semantic-ui-react";
import useAuth from "../../../hooks/useAuth";
import EquipamientoEditForm from "../SelectBar/Equipamiento/EquipamientoEditForm/EquipamientoEditForm";
import CaptureForm from "../SelectBar/Equipamiento/CaptureForm";
import RequestForm from "../SelectBar/Equipamiento/RequestForm";
import CaptureFormAdeudo from "../SelectBar/Adeudo/CaptureFormAdeudo";
import RequestFormAdeudo from "../SelectBar/Adeudo/RequestFormAdeudo";
import ReportesNoAdeudo from "../SelectBar/ReportesNoAdeudo";
export default function TasksPanel(props) {
  const {
    equips,
    debts,
    selectedLab,
    index,
    setIndex,
    estadosEquipos,
    disponibilidadEquipo,
  } = props;
  const [totalElements, setTotalElements] = useState(0);
  const { auth, logout, setReloadUser } = useAuth();

  console.log(equips);
  console.log(debts);

  const MENU_LIST = [
    {
      title: "Equipamiento",
      icon: "computer",
      statsTitle: "equipos",
      data: equips,
      id: 0,
    },
    {
      title: "Adeudo",
      icon: "address card outline",
      statsTitle: "adeudos",
      data: debts,
      id: 2,
    },
  ];

  const ADMIN_LIST = [
    {
      title: "Reporte no adeudos",
      icon: "clipboard outline",
      statsTitle: "reportes",
      data: debts,
      id: 20,
    },
  ];

  return (
    <>
      <div className="availabletasks__panel">
        {index === null ? (
          <>
            {map(MENU_LIST, (list) => (
              <MenuTasks
                list={list}
                setIndex={setIndex}
                id={list.id}
                auth={auth}
              />
            ))}
            {auth.idRol == 1 &&
              map(ADMIN_LIST, (listAdmin) => (
                <MenuTasksAdmin
                  list={listAdmin}
                  setIndex={setIndex}
                  id={listAdmin.id}
                  auth={auth}
                />
              ))}
          </>
        ) : (
          <>
            <div className="availabletasks__panel__main">
              <Back setIndex={setIndex} className="return" />
              <ShowComponent
                disponibilidadEquipo={disponibilidadEquipo}
                estadosEquipos={estadosEquipos}
                index={index}
                equips={equips}
                selectedLab={selectedLab}
                debts={debts}
                auth={auth}
                setIndex={setIndex}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

function MenuTasks(props) {
  const { list, setIndex, id } = props;

  return (
    <>
      <div className="availabletasks__panel__corner">
        <div className="availabletasks__panel__task">
          <Icon name={list.icon} size="huge" />
          <div className="availabletasks__panel__task__info">
            <div className="availabletasks__panel__task__info__title">
              <p>{list.title}</p>
            </div>
            <div className="availabletasks__panel__task__info__stats">
              <p>
                <span>Total de {list.statsTitle}</span> {size(list.data)}
              </p>
            </div>
          </div>
          <div className="availabletasks__panel__task__actions">
            <Button
              animated
              className="availabletasks__panel__task__actions_btn"
              onClick={() => setIndex(id)}
            >
              <Button.Content visible>Ver {list.statsTitle}</Button.Content>
              <Button.Content hidden>
                <Icon name="unordered list" />
              </Button.Content>
            </Button>
            <Button
              className="availabletasks__panel__task__actions_btn"
              onClick={() => setIndex(id + 1)}
            >
              <Icon name="add" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuTasksAdmin(props) {
  const { list, setIndex, id } = props;

  return (
    <>
      <div className="availabletasks__panel__corner">
        <div className="availabletasks__panel__task">
          <Icon name={list.icon} size="huge" />
          <div className="availabletasks__panel__task__info">
            <div className="availabletasks__panel__task__info__title">
              <p>{list.title}</p>
            </div>
          </div>
          <div className="availabletasks__panel__task__actions">
            <Button
              animated
              className="availabletasks__panel__task__actions_btn"
              onClick={() => setIndex(id)}
            >
              <Button.Content visible>Ver {list.statsTitle}</Button.Content>
              <Button.Content hidden>
                <Icon name="unordered list" />
              </Button.Content>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function ShowComponent(props) {
  const {
    index,
    equips,
    selectedLab,
    debts,
    auth,
    setIndex,
    estadosEquipos,
    disponibilidadEquipo,
  } = props;

  switch (index) {
    case 0:
      return (
        <RequestForm
          disponibilidadEquipo={disponibilidadEquipo}
          estadosEquipos={estadosEquipos}
          equips={equips}
        />
      );
    case 1:
      let viewEquip = [];
      return (
        <EquipamientoEditForm
          disponibilidadEquipo={disponibilidadEquipo}
          estadosEquipos={estadosEquipos}
          viewEquip={viewEquip}
        />
      );
    case 2:
      return <RequestFormAdeudo debts={debts} equips={equips} />;
    case 3:
      return (
        <CaptureFormAdeudo
          selectedLab={selectedLab}
          equips={equips}
          index={index}
        />
      );
    case 20:
      if (auth.idRol == 1) {
        return <ReportesNoAdeudo />;
      } else {
        setIndex(null);
      }
  }
}

function Back(props) {
  const { setIndex } = props;
  return (
    <>
      <Button onClick={() => setIndex(null)}>
        <Icon name="caret left" />
      </Button>
    </>
  );
}

/*
<CaptureForm
          disponibilidadEquipo={disponibilidadEquipo}
          estadosEquipos={estadosEquipos}
          selectedLab={selectedLab}
          index={index}
        />

*/
