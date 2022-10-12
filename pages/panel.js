import React, { useState, useEffect } from "react";
import { authFetch } from "../utils/fetch";
import MainLayout from "../layouts/MainLayout";
import { useRouter } from "next/router";

export default function Panel(props) {
  const { idUser, logout } = props;
  const [user, setUser] = useState(undefined);

  if (user === undefined) return <></>;

  return (
    <>
      {user ? (
        <div className="main-container panel seccion">
          <PanelLaboratorios />
          <PanelModulos />
          <PanelUsuario />
        </div>
      ) : (
        <>No hay usuario</>
      )}
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
