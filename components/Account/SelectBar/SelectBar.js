import React, { Component, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import CaptureForm from "./Equipamiento/CaptureForm";
import RequestForm from "./Equipamiento/RequestForm";
import classNames from "classnames";

export default function SelectBar(props) {
  const { equips } = props;
  const [activeItem, setActiveItem] = useState(false);

  const onShowForm = () => {
    setActiveItem(!activeItem);
  };

  const { Header, Content } = Layout;
  return (
    <>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["Equipamientos"]}
        style={{}}
      >
        <Menu.Item
          key="Consultar equipamiento"
          name="Consultar equipamiento"
          active={activeItem === "Equipamientos"}
          disabled={activeItem}
          onClick={onShowForm}
        >
          Equipamientos
        </Menu.Item>
        <Menu.Item
          key="Nuevo Equipamiento"
          className="new_equipment"
          name="Nuevo Equipamiento"
          active={activeItem === "Nuevo Equipamiento"}
          onClick={onShowForm}
          disabled={!activeItem}
        >
          Nuevo Equipamiento
        </Menu.Item>

        <Menu.Item
          key="Nuevo Adeudo"
          className="new_adeudo"
          name="Nuevo Adeudo"
          active={activeItem === "Nuevo Adeudo"}
          onClick={onShowForm}
        >
          Nuevo Adeudo
        </Menu.Item>
        <Menu.Item
          key="Consultar Adeudo"
          name="Consultar Adeudo"
          active={activeItem === "Consultar Adeudo"}
          onClick={onShowForm}
        >
          Consultar Adeudo
        </Menu.Item>
      </Menu>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {activeItem ? <RequestForm equips={equips} /> : <CaptureForm />}
      </Content>
    </>
  );
}
