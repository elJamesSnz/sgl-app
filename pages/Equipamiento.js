import MainLayout from "../layouts/MainLayout";
import SelectBar from "../components/Account/Equipamiento/Seleccion/SelectBar";

export default function Equipamiento() {
  //Aqui va el useState(false)
  return (
    <div className="home">
      <MainLayout className="home">
        <SelectBar />
      </MainLayout>
    </div>
  );
}
