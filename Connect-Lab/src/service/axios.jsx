import axios from "axios";
import { buildAxiosConfig } from "../utils/config.jsx";

export const fazerLogin = (usuario, senha) => {
    const dados = {
      username: usuario,
      password: senha,
    };
  
    return axios.post("https://connectlab.onrender.com/auth/login", dados);
};
  
export const buscarListaDispositivos = () => {
    return axios.get("http://localhost:3030/devices", buildAxiosConfig());
};

export const buscarUsuario = () => {
    return axios.get("http://localhost:3030/usuario", buildAxiosConfig());
};