import axios from "axios";
import { buildAxiosConfig } from "../utils/config.jsx";

export const cadastrarUsu = (nome, dataNasc, emailUsu, linkFoto, senha, telefone, cep, estado, cidade, bairro, endereco, numeroEndereco, complemento) => {
    const dadosCadastro = {
        email: emailUsu,
        password: senha,
        fullName: nome,
        photoUrl: linkFoto,
        phone: telefone,
        birthDate: dataNasc,
        userAddress: {
            zipCode: cep,
            street: endereco,
            number: numeroEndereco,
            neighborhood: bairro,
            city: cidade,
            estate: estado,
            complement: complemento
        }
    }

    return axios.post("http://localhost:3030/auth/register", dadosCadastro)
}

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