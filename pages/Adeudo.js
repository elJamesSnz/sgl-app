import MainLayout from "../layouts/MainLayout";
import CaptureFormAdeudo from "../components/Account/Adeudo/CaptureFormAdeudo/CaptureFormAdeudo";

export default function Home() {
  return (
    <div className="home">
      <MainLayout className="home">
        <br />
        <CaptureFormAdeudo></CaptureFormAdeudo>
      </MainLayout>
    </div>
  );
}
