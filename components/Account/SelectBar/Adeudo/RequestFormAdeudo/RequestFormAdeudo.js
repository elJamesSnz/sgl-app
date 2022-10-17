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
import { Object } from "lodash";
const { Meta } = Card;

export default function RequestFormAdeudo(props) {
  const { debts } = props;
  const [debtsView, setDebtsView] = useState([]);
  useEffect(() => {
    (() => {
      setDebtsView(debts);
    })();
  }, [debts]);

  return debts ? (
    <>
      <div className="search__bar">
        <Input
          name="Alumnos_beneficiados"
          type="text"
          placeholder="Boleta"
          focus="true"
          onChange={async (e) => {
            if (e.target.value.trim().length === 10 || e.target.value.trim().length === 12) {
              await setDebtsView(debts);
              setDebtsView(
                debtsView.filter((data) =>
                  String(data.boleta).includes(e.target.value.trim())
                )
              );
            } else {
              setDebtsView(debts);
            }
          }}
        />
        <p>
          Elementos encontrados: <span>{debtsView.length}</span>
        </p>
      </div>
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
      <div></div>
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

function filterByValue(array, string) {
  return array.filter((o) =>
    Object.keys(o).some((k) =>
      o[k].toLowerCase().includes(string.toLowerCase())
    )
  );
}
