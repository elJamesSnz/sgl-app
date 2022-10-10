import React from "react";
import Image from "next/image";
import mypic from "../../../resources/ipnWhite.png";

export default function Bar() {
  return (
    <div className="top-bar">
      <div className="main_bar main-container">
        <a className="SGL">LOGO SGL</a>
        <a className="TITLE">
          Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías
          Avanzadas
        </a>
        <LogoIPN />
      </div>
    </div>
  );
}

function LogoIPN() {
  return (
    <Image
      className="IPN"
      src={mypic}
      alt="Picture of the author"
      width="50px"
      height="70px"
    />
  );
}
