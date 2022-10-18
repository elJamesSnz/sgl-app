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
import { EyeFilled, EditFilled, DeleteFilled } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { map, size } from "lodash";
import { useState, useEffect } from "react";
import { Object } from "lodash";
import MainModal from "../../../../Modal/MainModal";
import AdeudoEditForm from "../AdeudoEditForm/AdeudoEditForm";
const { Meta } = Card;

export default function RequestFormAdeudo(props) {
  const { debts } = props;

  const [debtsView, setDebtsView] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [viewAdeudo, setViewAdeudo] = useState([]);

  const onShowModal = async (id) => {
    await setViewAdeudo(null);
    for (let index = 0; index < debts.length; index++) {
      const element = debts[index];
      if (element?.idlaboratorio == id) {
        setViewAdeudo(element);
      }
    }

    if (viewAdeudo) setShowModal(true);
    else console.log(id);
  };
  const onCloseModal = () => setShowModal(false);

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
            if (
              e.target.value.trim().length === 10 ||
              e.target.value.trim().length === 12
            ) {
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
      <CardItem
        debtsView={debtsView}
        showModal={showModal}
        onShowModal={onShowModal}
        onCloseModal={onCloseModal}
      />
      <MainModal
        show={showModal}
        setShow={setShowModal}
        title={"Adeudo"}
        size="small"
      >
        <AdeudoEditForm viewAdeudo={viewAdeudo} />
      </MainModal>
    </>
  ) : (
    <>No hay adeudos por mostrar</>
  );
}

function CardItem(props) {
  const { debtsView, setDebtsView, onShowModal } = props;
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
                //src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_epf5hcwaMn4XXjm0F1bWC1dWjIJ18-_TcA&usqp=CAU"
              />
            }
            actions={[
              <Button onClick={() => onShowModal(debt.idlaboratorio)}>
                <EyeFilled />
              </Button>,
              <EditFilled />,
              <DeleteFilled />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={`Equipo: ${debt.nombreequipo}`}
              description={`Adeudor ${debt.nombrealumno}. Boleta ${
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
