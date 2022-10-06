import Bar from "./Bar";
import UserNavbar from "./UserNavbar";

export default function Header() {
  return (
    <div className="header">
      <Bar />
      <UserNavbar/>
    </div>
  );
}
