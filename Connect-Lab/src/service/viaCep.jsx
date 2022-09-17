// import { useForm } from "react-hook-form";

// export const checkCEP = (e) => {
//     const {setValue, setFocus} = useForm();

//     const cep = e.target.value.replace(/\D/g, "");
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then((res) => res.json())
//         .then((data) => {
//             setValue("endereco", data.logradouro);
//             setValue("estado", data.uf)
//             setValue("cidade", data.localidade);
//             setValue("bairro", data.bairro);
//             setFocus("numeroEndereco");
//     })
// }