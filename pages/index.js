import MainLayout from "../layouts/MainLayout";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { auth, logout, setReloadUser } = useAuth();
  const router = useRouter();

  if (auth?.idUser === null) return null;

  if (auth?.idUser === undefined)
    return (
      <div className="home">
        <MainLayout className="home"></MainLayout>
      </div>
    );

  if (auth?.idUser) router.push("/account");
}
