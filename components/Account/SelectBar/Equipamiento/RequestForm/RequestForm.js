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
            className="equipments__card"
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
              title={equip.name}
              description={equip.desc}
            />
          </Card>
        ))}
      </div>
    </>
  );
}
/*

<div className="equipments">
      <Card
        className="equipments__card"
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>

*/
