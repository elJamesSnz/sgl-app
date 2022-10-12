import React, { Component, useState } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import CaptureForm from "../Equipamiento/CaptureForm";
import RequestForm from "../Equipamiento/RequestForm";

export default function SelectBar() {
  const [activeItem, setActiveItem] = useState(false);

  const onShowForm = () => {
    setActiveItem(!activeItem);
  };

  return (
    <>
      <div className="tabular">
        <div className="tabular__top">
          <Menu attached="top" tabular >
            <Menu.Item
              className="new_equipment"
              name="Nuevo Equipamiento"
              active={activeItem === "Nuevo Equipamiento"}
              onClick={onShowForm}
              disabled={activeItem}
            />
            <Menu.Item />
            <Menu.Item
              name="Consultar equipamiento"
              active={activeItem === "Consultar equipamiento"}
              onClick={onShowForm}
              disabled={!activeItem}
            />
          </Menu>
        </div>
        <div className="tabular__buttom">
          {activeItem ? <CaptureForm /> : <RequestForm />}
        </div>
      </div>
    </>
  );
}
