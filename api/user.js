import { URL } from "../utils/constants";
import { authFetch } from "../utils/fetch";

//import axios from "axios";
export async function loginApi(formData) {
  try {
    const url = `${URL}/api/users/login`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUserLabsApi(idUser) {
  try {
    const url = `${URL}/api/users/getMe?idUser=${idUser}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function AllLab() {
  try {
    const url = `${URL}/api/users/AllLab`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function getDebtsLabApi(idLab) {
  try {
    const url = `${URL}/api/debts/DebtByLab?idLab=${idLab}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function registerDebtApi(formData) {
  try {
    const url = `${URL}/api/debts/PostAdeudo`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    console.log(formData);
    const response = await fetch(url, params);
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getDebtApi(idLab) {
  try {
    const url = `${URL}/api/debts/Debt?idLab=${idLab}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function getAllDebts() {
  try {
    const url = `${URL}/api/debts/AllDebts`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function getAllEquipo() {
  try {
    const url = `${URL}/api/equips/getAllEquipo`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function getEstadosEquipoApi() {
  try {
    const url = `${URL}/api/equips/getEstadosEquipo`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function getItemsLabApi(idLab) {
  try {
    const url = `${URL}/api/equips/getEquipsByLab?idLab=${idLab}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return null;
  }
}

export async function getDisponibilidadApi() {
  try {
    const url = `${URL}/api/users/getDisponibilidad`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
