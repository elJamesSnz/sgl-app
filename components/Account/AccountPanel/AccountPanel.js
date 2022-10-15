import { useEffect, useState } from "react";
import { map, size } from "lodash";
import { useRouter } from "next/router";
import { Button, Loader } from "semantic-ui-react";
import {
  getUserLabsApi,
  getItemsLabApi,
  getDebtsLabApi,
} from "../../../api/user";
import SelectBar from "../SelectBar/";
import TasksPanel from "../TasksPanel/TasksPanel";
//<PanelModulos equips={equips} />
export default function AccountPanel(props) {
  const { auth, logout } = props;
  const [labs, setLabs] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [selectedLab, setSelectedLab] = useState(undefined);
  const [equips, setEquips] = useState(undefined);
  const [debts, setDebts] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (auth.idUser) {
        const res = await getUserLabsApi(auth.idUser, logout);
        if (size(res.data?.labs) >= 0) {
          setLabs(res.data?.labs || []);
          setName(res.data?.nombre);
          setSelectedLab(res.data?.labs[0].id);
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (auth.idUser && selectedLab) {
        const res = await getItemsLabApi(selectedLab, logout);
        if (size(res.data?.equip) > 0) {
          setEquips(res.data.equip || []);
        }
      }

      const res2 = await getDebtsLabApi(selectedLab, logout);
      if (size(res2.data?.adeudo) > 0) {
        setDebts(res2.data.adeudo || []);
      }
    })();
  }, [selectedLab]);

  return (
    <div>
      {name ? (
        <div className="main-container panel seccion">
          {!labs && <Loader active> Cargando información del usuario</Loader>}
          <PanelLaboratorios
            labs={labs}
            setSelectedLab={setSelectedLab}
            selectedLab={selectedLab}
          />

          <TasksPanel equips={equips} selectedLab={selectedLab} debts={debts} />

          <PanelUsuario name={name} logout={logout} router={router} />
        </div>
      ) : (
        <>
          <Loader active> Cargando información del usuario</Loader>
        </>
      )}
    </div>
  );
}

function PanelLaboratorios(props) {
  const { labs, setSelectedLab, selectedLab } = props;
  return (
    <div className="panel__left">
      <h3>Lab disponibles</h3>
      {map(labs, (lab) => (
        <LabTap
          lab={lab}
          setSelectedLab={setSelectedLab}
          selectedLab={selectedLab}
        />
      ))}
    </div>
  );
}
function PanelModulos(props) {
  const { equips } = props;
  return (
    <div className="panel__principal">
      <SelectBar equips={equips} />
    </div>
  );
}
function PanelUsuario(props) {
  const { name, logout, router } = props;
  return (
    <div className="panel__right">
      <p>
        <span>Profesor</span>
      </p>
      <p>{name}</p>
      <Button
        onClick={() => {
          logout();
          router.push("/");
        }}
      >
        Salir
      </Button>
    </div>
  );
}

function LabTap(props) {
  const { lab, setSelectedLab, selectedLab } = props;
  return (
    <div className="panel__left__labTab">
      <p
        id={lab.id}
        onClick={() => setSelectedLab(lab.id)}
        className={lab.id == selectedLab ? "labTap-active" : "labTap-inactive"}
      >
        {lab.name}
      </p>
    </div>
  );
}
