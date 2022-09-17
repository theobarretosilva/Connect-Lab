import axios from "axios";
import { toast } from "react-toastify";
import { buildAxiosConfig } from "../utils/config.jsx";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "react-router";

export const post = (nome, dataNasc, emailUsu, linkFoto, senha, telefone, cep, estado, cidade, bairro, endereco, numeroEndereco, complemento) => {
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
            state: estado,
            complement: complemento
        }
    }
    
    axios.post('http://localhost:3030/auth/register', dadosCadastro)
    .then((response) => {
        console.log(response)
        console.log(response.statusText)
        if(response.statusText === "Created"){
            setTimeout(()=> redirect("/login"), 5100)
            return toast.success('Usuário cadastrado com sucesso! Redirecionando você para a página de login!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        }
    })
    .catch((error) => console.log(error))
}

export const fazerLogin = (email, senha) => {
    const dadosLogin = {
      username: email,
      password: senha,
    };
  
    return axios.post("https://connectlab.onrender.com/auth/login", dadosLogin);
};
  
export const buscarListaDispositivos = () => {
    return axios.get("http://localhost:3030/devices", buildAxiosConfig());
};

export const buscarUsuario = () => {
    return axios.get("http://localhost:3030/usuario", buildAxiosConfig());
};