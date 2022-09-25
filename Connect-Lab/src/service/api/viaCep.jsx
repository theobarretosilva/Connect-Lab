// import PropTypes from 'prop-types';

// export const checkCEP = (e, { setValor, setFoco }) => {
//     const cep = e.target.value.replace(/\D/g, "");
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then((res) => res.json())
//         .then((data) => {
//             {setValor("endereco", data.logradouro)}
//             {setValor}("estado", data.uf)
//             {setValor}("cidade", data.localidade);
//             {setValor}("bairro", data.bairro);
//             {setFoco}("numeroEndereco");
//     });
// };

// checkCEP.propTypes = {
//     setValor: PropTypes.object.isRequired,
//     setFoco: PropTypes.object.isRequired,
// };