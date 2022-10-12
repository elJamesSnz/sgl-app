import { useEffect, useState } from "react";
import { map, size } from "lodash";
import { useRouter } from "next/router";
import { Button, Loader } from "semantic-ui-react";
import { getUserLabsApi, getItemsLabApi } from "../../../api/user";
import SelectBar from "../SelectBar/";

export default function AccountPanel(props) {
  const { auth, logout } = props;
  const [labs, setLabs] = useState(null);
  const [name, setName] = useState(null);
  const [selectedLab, setSelectedLab] = useState(null);
  const [equips, setEquips] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (auth.idUser) {
        const res = await getUserLabsApi(auth.idUser, logout);

        if (size(res.data.labs) >= 0) {
          setLabs(res.data.labs || []);
          setName(res.data.nombre);
          setSelectedLab(res.data.labs[0].id);
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (auth.idUser && selectedLab) {
        const res = await getItemsLabApi(selectedLab, logout);
        console.log(res.data.equip);
        if (size(res.data.equip) > 0) {
          setEquips(res.data.equip || []);
        }
      }
    })();
  }, [selectedLab]);

  return (
    <div>
      {name ? (
        <div className="main-container panel seccion">
          {!labs && <Loader active> Cargando información del usuario</Loader>}
          <PanelLaboratorios labs={labs} setSelectedLab={setSelectedLab} />
          <PanelModulos equips={equips} selectedLab={selectedLab} />
          <PanelUsuario name={name} logout={logout} router={router} />
        </div>
      ) : (
        <>No hay usuario</>
      )}
    </div>
  );
}

function PanelLaboratorios(props) {
  const { labs, setSelectedLab } = props;
  return (
    <div className="panel__left">
      {map(labs, (lab) => (
        <LabTap lab={lab} setSelectedLab={setSelectedLab} />
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
  const { lab, setSelectedLab } = props;
  return (
    <div className="panel__left__labTab">
      <p id={lab.id} onClick={() => setSelectedLab(lab.id)}>
        {lab.name}
      </p>
    </div>
  );
}
