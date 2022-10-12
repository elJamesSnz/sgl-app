import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size } from "lodash";
import { getUserLabsApi } from "../api/user";

export default function Account() {
  const { auth, logout, setReloadUser } = useAuth();

  const [labs, setLabs] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (auth?.idUser) {
        const response = await getUserLabsApi(auth?.idUser);
        console.log(response);
        if (size(response?.Labs) >= 0) {
          setLabs(response?.Labs || []);
        }
      }
    })();
  }, []);

  if (auth?.idUser === undefined) router.push("/");
  if (auth?.idUser === null) return null;
  if (auth?.idUser) return <p>logueado</p>;
}
