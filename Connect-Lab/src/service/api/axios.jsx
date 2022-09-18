import axios from "axios";
import { toast } from "react-toastify";
import { buildAxiosConfig } from "../../utils/config.jsx";
import "react-toastify/dist/ReactToastify.css";
import { enviarLS } from "../../components/BoxCadastro/BoxCadastro.jsx";
// import { Redirect } from "react-router-dom";

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
            // setTimeout(()=> {<Redirect to={{ pathname: "/", state: { from: location } }} replace={true}/>}, 5100)
            enviarLS(response.data)
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

export const fazerLogin = (emailUsu, senhaUsu) => {
    const dadosLogin = {
      email: emailUsu,
      password: senhaUsu,
    };
  
    return axios.post("http://localhost:3030/auth/login", dadosLogin)
    .then((response) => {
        console.log(response)
        console.log(response.statusText)
        if(response.statusText === "OK"){
            enviarLS(response.data)
            return toast.success('Login efetuado com sucesso. Redirecionando você para a página inicial!', {
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
};
  
export const buscarListaDispositivos = () => {
    return axios.get("http://localhost:3030/devices", buildAxiosConfig());
};

export const buscarUsuario = () => {
    return axios.get("http://localhost:3030/usuario", buildAxiosConfig());
};