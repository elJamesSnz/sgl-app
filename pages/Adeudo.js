import MainLayout from "../layouts/MainLayout";
import SelectAdeudo from "../components/Account/Seleccion/SelectAdeudo";

export default function Home() {
  return (
    <div className="home">
      <MainLayout className="home">
        <br />
        <SelectAdeudo></SelectAdeudo>
      </MainLayout>
    </div>
  );
}
