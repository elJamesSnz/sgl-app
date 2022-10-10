import React from "react";
import Image from "next/image";
import IPN from "../../../resources/ipnWhite.png";
import SGL from "../../../resources/SglWhite.png";

export default function Bar() {
  return (
    <div className="top-bar">
      <div className="main_bar main-container">
        <LogoSGL />
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
      src={IPN}
      alt="Picture of the author"
      width="50px"
      height="70px"
    />
  );
}

function LogoSGL() {
  return (
    <Image
      className="SGL"
      src={SGL}
      alt="Picture of the author"
      width="110px"
      height="60px"
    />
  );
}