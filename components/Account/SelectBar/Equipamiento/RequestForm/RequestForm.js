import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Segment,
  Divider,
  Input,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import { EditFilled, DeleteFilled, EyeFilled } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { eq, map, size } from "lodash";
import MainModal from "../../../../Modal/MainModal";
import EquipamientoEditForm from "../EquipamientoEditForm/EquipamientoEditForm";
const { Meta } = Card;

export default function RequestForm(props) {
  const { equips } = props;
  const [showModal, setShowModal] = useState(false);
  const [viewEquip, setViewEquip] = useState([]);

  const onShowModal = async (id) => {
    await setViewEquip(null);
    for (let index = 0; index < equips.length; index++) {
      const element = equips[index];
      if (element?.idequipo == id) {
        setViewEquip(element);
      }
    }

    if (viewEquip) setShowModal(true);
    else console.log(id);
  };
  const onCloseModal = () => setShowModal(false);

  if (showModal) return <EquipamientoEditForm viewEquip={viewEquip} />;

  return equips ? (
    <>
      <CardItem
        equips={equips}
        showModal={showModal}
        onShowModal={onShowModal}
        onCloseModal={onCloseModal}
        viewEquip={viewEquip}
        setViewEquip={setViewEquip}
      />
    </>
  ) : (
    <>No hay equipos</>
  );
}

function CardItem(props) {
  const { equips, onShowModal } = props;

  return (
    <>
      <div className="equipments">
        {equips && size(equips) === 0 && (
          <div>
            <h3>No hay equipos para este laboratorio</h3>
          </div>
        )}
        {map(equips, (equip) => (
          <Card
            key={equip.code}
            className="equipments__card"
            cover={
              <img
                alt="example"
                //src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_epf5hcwaMn4XXjm0F1bWC1dWjIJ18-_TcA&usqp=CAU"
              />
            }
            actions={[
              <Button onClick={() => onShowModal(equip.idequipo)}>
                <EyeFilled/>
              </Button>,
              <EditFilled />,
              <DeleteFilled />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={`Equipo: ${equip.Nombre_equipo}`}
              description={`Marca ${equip.Marca_equipo}. Año ${
                equip.Año_equipo
              }. Disponibilidad:  ${
                equip.Disponibilidad_equipo ? "Disponible" : "No Disponible"
              }`}
            />
          </Card>
        ))}
      </div>
    </>
  );
}

function CardDescripcion() {
  const { equip } = props;
  return (
    <p>
      {`Marca ${equip.mode}. \nAño ${equip.ano} \nFallo: ${
        equip.fallo || "Ninguno"
      }`}
    </p>
  );
}

/*
<MainModal
        show={showModal}
        setShow={setShowModal}
        title={"Equipo"}
        size="small"
      >
        <EquipamientoEditForm viewEquip={viewEquip} />
      </MainModal>
*/
