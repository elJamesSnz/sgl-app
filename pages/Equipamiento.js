import MainLayout from "../layouts/MainLayout";
import CaptureForm from "../components/Account/Equipamiento/CaptureForm/CaptureForm";
import RequestForm from "../components/Account/Equipamiento/RequestForm/RequestForm";

export default function Equipamiento() {
  //Aqui va el useState(false)
  return (
    <div className="home">
      <MainLayout className="home">
      Captura de los Equipos
      <CaptureForm></CaptureForm>
      Visualizacion de los Equipos
      <RequestForm></RequestForm>
      </MainLayout>
    </div>
  );
}

