import { PESStyled } from "../BoxLogin/BoxLogin.styles"
import { BoxCadastroStyled, BtnCadastrese, CadastreseStyled, DivBaseStyled, DivCamposStyled, InputCadastroStyled, PLoginStyled } from "./BoxCadastro.styles"
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const BoxCadastro = () => {

const {register, handleSubmit, setValue, setFocus, errors} = useForm();

const onSubmit = (e) => {
    console.log(e)
}

const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            setValue('address', data.logradouro);
            setValue('state', data.uf)
            setValue('city', data.localidade);
            setValue('neighborhood', data.bairro);
            setFocus('addressNumber');
    })
}

    return(
        <BoxCadastroStyled>
            <CadastreseStyled>Cadastre-se</CadastreseStyled>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Nome completo*</PESStyled>
                        <InputCadastroStyled name="nomeCompleto" type={'text'} {...register('Nome completo')} placeholder="Seu nome completo" ref={ register("nomeCompleto", { required: "Preencha este campo!"}) }/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Data de nascimento</PESStyled>
                        <InputCadastroStyled name="DataDeNascimento" type={'date'} {...register('Data de nascimento')} placeholder="dd/mm/aaaa"  ref={ register("DataDeNascimento", { required: false})}/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>E-mail*</PESStyled>
                        <InputCadastroStyled name="Email" type={'email'} {...register('E-mail')} placeholder="Seu email" ref={ register("Email", { required: "Preencha este campo!"}) }/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Link da foto de perfil</PESStyled>
                        <InputCadastroStyled name="LinkFotoPerfil" type={'url'} {...register('Link da foto de perfil')} placeholder="Link da sua foto" ref={ register("LinkFotoPerfil", { required: false})}/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Senha*</PESStyled>
                        <InputCadastroStyled name="Senha" type={'password'} {...register('Senha')} placeholder="Sua senha" ref={ register("Senha", { required: "Preencha este campo!"}) }/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Confirmação de senha*</PESStyled>
                        <InputCadastroStyled name="ConfirmacaoSenha" type={'password'} placeholder="Confirme a sua senha" ref={ register("ConfirmacaoSenha", { required: "Preencha este campo!"}) }/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Telefone</PESStyled>
                        <InputCadastroStyled name="Telefone" type={'text'} placeholder="Seu telefone" />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>CEP*</PESStyled>
                        <InputCadastroStyled name="CEP" type={'text'} placeholder="Seu CEP" onBlur={checkCEP} required/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Estado*</PESStyled>
                        <InputCadastroStyled name="Estado" type={'text'} {...register('state')} placeholder="Seu logradouro/endereço" required/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Cidade*</PESStyled>
                        <InputCadastroStyled name="Cidade" type={'text'} {...register('city')} placeholder="Sua cidade" required/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Bairro*</PESStyled>
                        <InputCadastroStyled name="Bairro" type={'text'} {...register('neighborhood')} placeholder="Seu bairro" required/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Logradouro/Endereço*</PESStyled>
                        <InputCadastroStyled name="Endereco" type={'text'} {...register('address')} placeholder="Seu logradouro/endereço" required/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Número*</PESStyled>
                        <InputCadastroStyled name="NumeroEndereco" type={'number'} {...register('addressNumber')} placeholder="O número do seu endereço" required/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Complemento</PESStyled>
                        <InputCadastroStyled name="ComplementoEndereco" type={'text'} placeholder="Complemento do endereço" />
                    </DivCamposStyled>
                </DivBaseStyled>
                <BtnCadastrese>Cadastre-se</BtnCadastrese>
            </form>
            <PLoginStyled>Login</PLoginStyled>
        </BoxCadastroStyled>
    )
}