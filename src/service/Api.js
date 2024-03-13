import axios from "axios";
// auth
export const instance = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clear = () => {
  instance.defaults.headers.common.Authorization = ``;
};
