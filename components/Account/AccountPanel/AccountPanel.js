import { useEffect, useState } from "react";
import { map, size } from "lodash";
import { useRouter } from "next/router";
import { Button, Loader } from "semantic-ui-react";
import {
  getUserLabsApi,
  getItemsLabApi,
  getEstadosEquipoApi,
  getDebtsLabApi,
  getAllDebts,
  getAllEquipo,
  AllLab,
} from "../../../api/user";
import SelectBar from "../SelectBar/";
import TasksPanel from "../TasksPanel/TasksPanel";
import { Select } from "antd";
//<PanelModulos equips={equips} />
export default function AccountPanel(props) {
  const { auth, logout } = props;
  const [labs, setLabs] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [equips, setEquips] = useState(undefined);
  const [estadosEquipos, setEstadosEquipos] = useState(undefined);
  const [debts, setDebts] = useState(undefined);
  const [reloadData, setReloadData] = useState(false);
  const [selectedLab, setSelectedLab] = useState(0);
  const [index, setIndex] = useState(null);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (auth.idUser) {
        if (auth.idRol == 1) {
          setName("Coordinador NO DB");
          const resLabs = await AllLab();
          setLabs(resLabs?.data || []);
          const resEquipos = await getAllEquipo();
          const resDebts = await getAllDebts();
          setDebts(resDebts?.data || []);
          setEquips(resEquipos?.data || []);
        } else {
          const res = await getUserLabsApi(auth.idUser, logout);
          console.log(res);
          if (size(res.data?.labs) >= 0) {
            setLabs(res.data?.labs || []);
            setName(res.data?.nombreusuario);
            setSelectedLab(res.data?.labs[0].id);
            console.log(labs);
          }
        }

        //get de estados, tipos de fallo que se pasarán entre capture y edit forms
        const estados = await getEstadosEquipoApi();
        if (size(estados?.data) >= 0) setEstadosEquipos(estados?.data);
        else setEstadosEquipos([]);
        console.log(estadosEquipos);
      }

      setReloadData(false);
    })();
  }, [reloadData]);

  useEffect(() => {
    (async () => {
      if (selectedLab == 0) {
        setReloadData(true);
      } else {
        const res = await getItemsLabApi(selectedLab, logout);
        if (size(res?.data) > 0) {
          console.log(res.data);
          setEquips(res.data || []);
        }
        const res2 = await getDebtsLabApi(selectedLab, logout);
        if (size(res2?.data) > 0) {
          console.log(res.data);
          setDebts(res2.data || []);
        }
      }
    })();
  }, [selectedLab]);

  return (
    <div>
      {name ? (
        <div className="main-container panel seccion">
          {!labs && <Loader active> Cargando información del usuario</Loader>}
          <PanelLaboratorios
            idRol={auth.idRol}
            labs={labs}
            setSelectedLab={setSelectedLab}
            selectedLab={selectedLab}
            index={index}
          />

          <TasksPanel
            estadosEquipos={estadosEquipos}
            equips={equips}
            selectedLab={selectedLab}
            debts={debts}
            index={index}
            setIndex={setIndex}
          />

          <PanelUsuario name={name} logout={logout} router={router} />
        </div>
      ) : (
        <>
          <Loader active> Cargando información del usuario 2</Loader>
        </>
      )}
    </div>
  );
}

function PanelLaboratorios(props) {
  const { labs, setSelectedLab, selectedLab, idRol, index } = props;
  return (
    <div className="panel__left">
      <h3>Laboratorios disponibles</h3>
      <Select
        name="idequipo"
        placeholder="Laboratorio"
        style={{
          width: 250,
        }}
        onSelect={(value) => {
          setSelectedLab(value);
        }}
        defaultActiveFirstOption="true"
      >
        {idRol == 6 && index == null && <Option value={"0"}>Todos</Option>}
        {idRol == 6 && index != null && index % 2 === 0 && (
          <Option value={"0"}>Todos</Option>
        )}
        {map(labs, (lab) => (
          <Option value={`${lab.Id_laboratorio}`} selected={"selected"}>
            {lab.Nombre_laboratorio}
          </Option>
        ))}
      </Select>
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
        <span>Bienvenid@ {}</span>
      </p>
      <p>
        <span>Tipo de cuenta</span>
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
/*
function LabTap(props) {
  const { lab, setSelectedLab, selectedLab } = props;
  return (
    
  );
}
*/
