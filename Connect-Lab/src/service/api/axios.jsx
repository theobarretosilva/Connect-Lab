import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { buildAxiosConfig } from "../../utils/config.jsx";

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
            localStorage.setItem("dadosUsuario", JSON.stringify(response.data))
            localStorage.setItem("meutoken", JSON.stringify(response.data.token))
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
    .catch((error) => console.log(error));
};

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
            localStorage.setItem("dadosUsuario", JSON.stringify(response.data))
            localStorage.setItem("meutoken", JSON.stringify(response.data.token))
            localStorage.setItem("idUsuario", JSON.stringify(response.data.user._id))
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

export const atualizaUsuario = (nome, dataNasc, emailUsu, linkFoto, senha, telefone, cep, estado, cidade, bairro, endereco, numeroEndereco, complemento) => {
    const dadosAtualizacao = {
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
    const dadosLS = JSON.parse(localStorage.getItem("idUsuario"));

    axios.put(`http://localhost:3030/users/${dadosLS}`, dadosAtualizacao, buildAxiosConfig())
        .then((response) => {
            console.log(response)
            localStorage.setItem("dadosUsuAPI", JSON.stringify(response.data))
            return toast.success('Dados atualizados com sucesso!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        })
        .catch((error) => {
            console.log(error)
            return toast.error('Ops! Algo deu errado!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        });
}

export const buscarListaDispositivos = () => {
    return axios.get("http://localhost:3030/devices", buildAxiosConfig())
        .then((response) => response.data);
};

export const buscarListaLocais = () => {
    return axios.get("http://localhost:3030/locals", buildAxiosConfig())
        .then((response) => response.data)
}

export const addDispUsu = (idUser, idDevice, idLocal, comodo) => {
    const dadosDispUsu = {
        "user": idUser,
        "device": idDevice,
        "is_on": true,
        "local": idLocal,
        "room": comodo
    }

    return axios.post("http://localhost:3030/userDevices", dadosDispUsu, buildAxiosConfig())
        .then((response) => {
            console.log(response)
            console.log(response.statusText)
        })
        .catch((error) => console.log(error))
}

export const buscarDispUsu = () => {
    const dadosLS = JSON.parse(localStorage.getItem("idUsuario"));

    return axios.get(`http://localhost:3030/userDevices/user/${dadosLS}`, buildAxiosConfig())
        .then((response)=> {
            console.log(response)
            console.log(response.data)
            localStorage.setItem("dispositivosDoUsuario", JSON.stringify(response.data))
        })
        .catch((error) => console.log(error));
};

export const deletDispUsu = (idDisp) => {

    return axios.delete(`http://localhost:3030/userDevices/${idDisp}`, buildAxiosConfig())
        .then((response)=> {
            console.log(response)
            if(response.statusText === "OK"){
                setTimeout(() => {
                    window.location.reload()
                }, 10000)
            }
        })
        .catch((error)=> console.log(error));
};

export const buscarUsuario = () => {
    return axios.get("http://localhost:3030/usuario", buildAxiosConfig());
};

export const dispOnOff = (idDisp, onOff) => {
    const isOn = {
        "is_on": onOff,
    };

    return axios.put(`http://localhost:3030/userDevices/${idDisp}`, isOn, buildAxiosConfig())
        .then((response)=> console.log(response))
}