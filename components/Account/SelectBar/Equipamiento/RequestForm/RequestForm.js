import React from "react";
import {
  Button,
  Segment,
  Divider,
  Input,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { map, size } from "lodash";
const { Meta } = Card;

export default function RequestForm(props) {
  const { equips } = props;
  console.log(equips);
  return equips ? <CardItem equips={equips} /> : <>No hay equipos</>;
}

function CardItem(props) {
  const { equips } = props;

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
              <SettingOutlined key="view" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={`Equipo: ${equip.name}`}
              description={`Marca ${equip.mode}. Año ${equip.ano}. Fallo ${
                equip.fallo || "Ninguno"
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
