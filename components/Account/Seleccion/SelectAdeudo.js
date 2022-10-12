import React, { Component, useState } from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import CaptureFormAdeudo from "../Adeudo/CaptureFormAdeudo";
import RequestForm from "../Adeudo/RequestFormAdeudo";

export default function SelectBar() {
  const [activeItem, setActiveItem] = useState(false);

  const onShowForm = () => {
    setActiveItem(!activeItem);
  };
  
  const { Header, Content } = Layout;
  return (
  <Layout>
    <Header style={{backgroundColor: "#790252", padding: '5px',marginTop: -27}}>
      <Menu mode="horizontal" defaultSelectedKeys={['Nuevo Equipamiento']} style={{backgroundColor: "#dbdbdb"}}>
        <Menu.Item 
          key="Nuevo Adeudo"
          className="new_adeudo"
          name="Nuevo Adeudo"
          active={activeItem === "Nuevo Adeudo"}
          onClick={onShowForm}>
          Nuevo Adeudo
        </Menu.Item>
        <Menu.Item 
          key="Consultar Adeudo"
          name="Consultar Adeudo"
          active={activeItem === "Consultar Adeudo"}
          onClick={onShowForm}>
          Consultar Adeudo
        </Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {activeItem ? <CaptureFormAdeudo /> : <RequestForm/>}
    </Content>
  </Layout>
  );
}
