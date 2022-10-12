import { useEffect, useState } from "react";
import { getUserLabsApi } from "../../../api/user";
import { map, size } from "lodash";
import { useRouter } from "next/router";

export default function AccountPanel(props) {
  const { auth, logout } = props;
  const [labs, setLabs] = useState(null);
  const [name, setName] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (auth.idUser) {
        const res = await getUserLabsApi(auth.idUser, logout);

        if (size(res.data.labs) >= 0) {
          setLabs(res.data.labs || []);
          setName(res.data.nombre);
        }
      }
    })();
  }, []);

  if (!name || !labs) {
    return null;
  }

  return (
    <>
      {name ? (
        <div className="main-container panel seccion">
          {!labs && <Loader active> Cargando información del usuario</Loader>}
          <PanelLaboratorios labs={labs} />
          <PanelModulos />
          <PanelUsuario name={name} />
        </div>
      ) : (
        <>No hay usuario</>
      )}
    </>
  );
}

function PanelLaboratorios(props) {
  const { labs } = props;
  console.log(labs);
  return (
    <div className="panel__left">
      {map(labs, (lab) => (
        <LabTap lab={lab} />
      ))}
    </div>
  );
}
function PanelModulos(props) {
  return (
    <div className="panel__principal">
      <p>panel</p>
    </div>
  );
}
function PanelUsuario(props) {
  const { name } = props;
  return (
    <div className="panel__right">
      <p>
        <span>Profesor</span>
      </p>
      <p>{name}</p>
    </div>
  );
}

function LabTap(props) {
  const { lab } = props;
  return (
    <div className="panel__left__labTab">
      <p>{lab.name}</p>
    </div>
  );
}
