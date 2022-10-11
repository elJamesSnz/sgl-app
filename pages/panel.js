import React from "react";
import useAuth from "../hooks/useAuth";
import MainLayout from "../layouts/MainLayout";

export default function Account() {
  const auth = useAuth();
  return (
    <>
      <MainLayout>
        <div className="main-container panel seccion">
          <PanelLaboratorios />
          <PanelModulos />
          <PanelUsuario />
        </div>
      </MainLayout>
    </>
  );
}

function PanelLaboratorios(props) {
  return (
    <div className="panel__left">
      <p>panel PanelLaboratorios</p>
    </div>
  );
}
function PanelModulos(props) {
  return (
    <div className="panel__principal">
      <p>panel</p>
    </div>
  );
}
function PanelUsuario(props) {
  return (
    <div className="panel__right">
      <p>panel PanelUsuario</p>
    </div>
  );
}
