import React, { Component, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import CaptureFormAdeudo from "./Adeudo/CaptureFormAdeudo";
import RequestForm from "./Adeudo/RequestFormAdeudo";

export default function SelectBar() {
  const [activeItem, setActiveItem] = useState(false);

  const onShowForm = () => {
    setActiveItem(!activeItem);
  };

  const { Header, Content } = Layout;
  return (
    <>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["Nuevo Equipamiento"]}
        style={{ backgroundColor: "#dbdbdb" }}
      >
        
      </Menu>

      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {activeItem ? <RequestForm /> : <CaptureFormAdeudo />}
      </Content>
    </>
  );
}

function MenuTabBuilder(props) {
  const { key, cName, name, active, onClick } = props;
  return (
    <Menu.Item
      key={key}
      className={cName}
      name={name}
      active={active}
      onClick={onClick}
    ></Menu.Item>
  );
}
