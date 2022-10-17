import React, { Component, useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import CaptureForm from "../SelectBar/Equipamiento/CaptureForm";
import RequestForm from "../SelectBar/Equipamiento/RequestForm";
import CaptureFormAdeudo from "../SelectBar/Adeudo/CaptureFormAdeudo";
import RequestFormAdeudo from "../SelectBar/Adeudo/RequestFormAdeudo";
import classNames from "classnames";
import { Icon } from "semantic-ui-react";
import { forEach, map, size } from "lodash";
import { useRouter } from "next/router";
import { Button, Loader } from "semantic-ui-react";

export default function TasksPanel(props) {
  const { equips, debts, selectedLab, index, setIndex } = props;

  const [totalElements, setTotalElements] = useState(0);

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
      icon: "clipboard outline",
      statsTitle: "adeudos",
      data: debts,
      id: 2,
    },
  ];

  return (
    <>
      <div className="availabletasks__panel">
        {index === null ? (
          <>
            {map(MENU_LIST, (list) => (
              <MenuTasks list={list} setIndex={setIndex} id={list.id} />
            ))}
          </>
        ) : (
          <>
            <div className="availabletasks__panel__main">
              <Back setIndex={setIndex} className="return" />
              <ShowComponent
                index={index}
                equips={equips}
                selectedLab={selectedLab}
                debts={debts}
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

function ShowComponent(props) {
  const { index, equips, selectedLab, debts } = props;
  switch (index) {
    case 0:
      return <RequestForm equips={equips} />;
    case 1:
      return <CaptureForm selectedLab={selectedLab} index={index} />;
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
    case 4:
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
