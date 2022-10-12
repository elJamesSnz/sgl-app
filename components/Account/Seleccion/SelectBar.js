import React, { Component, useState } from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import CaptureForm from "../Equipamiento/CaptureForm";
import RequestForm from "../Equipamiento/RequestForm";

export default function SelectBar() {
  const [activeItem, setActiveItem] = useState(false);

  const onShowForm = () => {
    setActiveItem(!activeItem);
  };
  
  const { Header, Content } = Layout;
  return (
  <Layout>
    <Header style={{backgroundColor: "#790252", padding: '5px'}}>
      <Menu mode="horizontal" defaultSelectedKeys={['Nuevo Equipamiento']} style={{backgroundColor: "#dbdbdb"}}>
        <Menu.Item 
          key="Nuevo Equipamiento"
          className="new_equipment"
          name="Nuevo Equipamiento"
          active={activeItem === "Nuevo Equipamiento"}
          onClick={onShowForm}
          >
          Nuevo Equipamiento
        </Menu.Item>
        <Menu.Item 
          key="Consultar equipamiento"
          name="Consultar equipamiento"
          active={activeItem === "Consultar equipamiento"}
          onClick={onShowForm}
          >
          Consultar equipamiento
        </Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {activeItem ? <RequestForm /> : <CaptureForm />}
    </Content>
  </Layout>
  );
}
