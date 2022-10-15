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
import { useState, useEffect } from "react";
const { Meta } = Card;

export default function RequestFormAdeudo(props) {
  const { debts } = props;
  const [debtsView, setDebtsView] = useState(debts);

  useEffect(() => {
    (() => {
      setDebtsView(debts);
    })();
  }, [debts]);

  return debts ? (
    <>
      <Input
        name="Alumnos_beneficiados"
        type="text"
        placeholder="Boleta"
        onChange={(value) => handleCambio(value)}
      />
      <CardItem debtsView={debtsView} />
    </>
  ) : (
    <>No hay adeudos por mostrar</>
  );
}

function CardItem(props) {
  const { debtsView, setDebtsView = { setDebtsView } } = props;

  return (
    <>
      <div>
        
      </div>
      <div className="equipments">
        {debtsView && size(debtsView) === 0 && (
          <div>
            <h3>No hay adeudos para este laboratorio</h3>
          </div>
        )}
        {map(debtsView, (debt) => (
          <Card
            key={debt.code}
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
              title={`Equipo: ${debt.equipo}`}
              description={`Adeudor ${debt.name}. boleta ${
                debt.boleta
              }. Fallo ${debt.fallo || "Ninguno"}`}
            />
          </Card>
        ))}
      </div>
    </>
  );
}
