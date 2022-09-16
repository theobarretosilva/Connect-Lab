import { PESStyled } from "../BoxLogin/BoxLogin.styles"
import { BoxCadastroStyled, BtnCadastrese, CadastreseStyled, DivBaseStyled, DivCamposStyled, InputCadastroStyled, PLoginStyled } from "./BoxCadastro.styles"
import { useForm } from "react-hook-form";
// import { cadastrarUsu } from "../../service/axios";
// import { ErrorMessage } from "@hookform/error-message";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { phoneNumber } from "../../utils/validations";

export const BoxCadastro = () => {

    const validationSchema = yup.object({
        nomeCompleto: yup.string().required(),
        dataDeNascimento: yup.date(),
        email: yup.string().email().required(),
        linkFotoPerfil: yup.string().url(),
        senha: yup.string().min(8).required(),
        confirmacaoSenha: yup.string().oneOf([yup.ref('senha'), null]).required(),
        telefone: yup.string().matches(phoneNumber),
        cep: yup.number().max(8).required(),
        estado: yup.string().required(),
        cidade: yup.string().required(),
        bairro: yup.string().required(),
        endereco: yup.string().required(),
        numeroEndereco: yup.number().required(),
        complementoEndereco: yup.string(),
    });

    const {register, handleSubmit, setValue, setFocus } = useForm({resolver: yupResolver(validationSchema)});

    const onSubmit = (e) => {
        console.log(e)

        // cadastrarUsu(e)
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setValue('endereco', data.logradouro);
                setValue('estado', data.uf)
                setValue('cidade', data.localidade);
                setValue('bairro', data.bairro);
                setFocus('numeroEndereco');
        })
    }

    function onError(error){
        console.log('error: ', error)
    }

    return(
        <BoxCadastroStyled>
            <CadastreseStyled>Cadastre-se</CadastreseStyled>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Nome completo*</PESStyled>
                        <InputCadastroStyled 
                            type={'text'} 
                            {...register('nomeCompleto', { required: "Preencha este campo!"})}
                            placeholder="Seu nome completo" 
                        />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Data de nascimento</PESStyled>
                        <InputCadastroStyled 
                            type={'date'}
                            {...register('dataDeNascimento')}
                        />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>E-mail*</PESStyled>
                        <InputCadastroStyled
                            type={'email'}
                            {...register('email', { required: "Preencha este campo!"})}
                            placeholder="Seu email" 
                        />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Link da foto de perfil</PESStyled>
                        <InputCadastroStyled
                            type={'url'}
                            {...register('linkFotoPerfil')}
                            placeholder="Link da sua foto"
                        />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Senha*</PESStyled>
                        <InputCadastroStyled
                            type={'password'}
                            {...register('senha', { min:8, max:12, required: "A senha deve ter entre 8 e 12 caracteres!"})}
                            placeholder="Sua senha"
                        />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Confirmação de senha*</PESStyled>
                        <InputCadastroStyled
                            type={'password'}
                            {...register('confirmacaoSenha', { min:8, max:12, required: "A senha deve ter entre 8 e 12 caracteres!"})}
                            placeholder="Confirme a sua senha"
                        />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Telefone</PESStyled>
                        <InputCadastroStyled
                            type={'text'}
                            {...register('telefone')}
                            placeholder="Seu telefone"
                        />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>CEP*</PESStyled>
                        <InputCadastroStyled
                            type={'text'}
                            {...register('cep', { required: "Preencha este campo!" })}
                            placeholder="Seu CEP"
                            onBlur={checkCEP}
                        />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Estado*</PESStyled>
                        <InputCadastroStyled
                            type={'text'}
                            {...register('estado', { required: "Preencha este campo!"})}
                            placeholder={'Seu estado'}
                        />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Cidade*</PESStyled>
                        <InputCadastroStyled
                            type={'text'}
                            {...register('cidade', { required: "Preencha este campo!" })}
                            placeholder={'Sua cidade'}
                        />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Bairro*</PESStyled>
                        <InputCadastroStyled
                            type={'text'}
                            {...register('bairro', { required: "Preencha este campo!"})}
                            placeholder={"Seu bairro"}
                        />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Logradouro/Endereço*</PESStyled>
                        <InputCadastroStyled
                            type={'text'}
                            {...register('endereco', { required: "Preencha este campo!" })}
                            placeholder={"Seu logradouro/endereço"}
                        />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Número*</PESStyled>
                        <InputCadastroStyled
                            type={'number'}
                            {...register('numeroEndereco', { required: "Preencha este campo!" })}
                            placeholder="O número do seu endereço"
                        />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Complemento</PESStyled>
                        <InputCadastroStyled
                            type={'text'}
                            {...register('complementoEndereco')}
                            placeholder="Complemento do endereço"
                        />
                    </DivCamposStyled>
                </DivBaseStyled>
                <BtnCadastrese>Cadastre-se</BtnCadastrese>
            </form>
            <PLoginStyled>Login</PLoginStyled>
        </BoxCadastroStyled>
    )
}