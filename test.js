
const URL = "https://sgl-server.herokuapp.com";

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
      console.log(error);
    });
} catch (error) {
  console.log(error);
  return null;
}
