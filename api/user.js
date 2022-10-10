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

export async function getMeApi(id, logout) {
  try {
    const url = `${URL}/api/users/getMe`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    return null;
  }
}

/*
export async function loginApi(formData) {
  const url = `${URL}/api/users/login`;
  try {
    axios
      .post(url, {
        email: "afds@gmail.com",
        password: "e10adc3949ba59abbe56e057f20f883e",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("e axios post" + error);
      });
  } catch (error) {
    console.log(error);
    return null;
  }
}
*/
/*

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
    console.log(response);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
*/
