import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size } from "lodash";
import { getUserLabsApi } from "../api/user";
import UserLayout from "../layouts/UserLayout";

export default function Account() {
  const { auth, logout, setReloadUser } = useAuth();
  const [labs, setLabs] = useState(null);
  const [user, setUser] = useState([]);
  const router = useRouter();

  if (auth?.idUser === undefined) router.push("/");
  if (auth?.idUser === null) return null;
  if (auth?.idUser)
    return (
      <div className="acc-home">
        <UserLayout
          className="home"
          auth={auth}
          logout={logout}
          user={user}
        ></UserLayout>
      </div>
    );
}
