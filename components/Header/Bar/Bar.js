import React from "react";
import Image from "next/image";
import IPN from "../../../resources/ipnWhite.png";
import SGL from "../../../resources/SglWhite.png";
import { useRouter } from "next/router";

export default function Bar() {
  const router = useRouter();
  return (
    <div className="top-bar">
      <div className="main_bar main-container">
        <LogoSGL router={router} />
        <a className="TITLE" href="/">
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
      alt="IPN Logo"
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
      alt="SGL Logo"
      width="110px"
      height="60px"
    />
  );
}
