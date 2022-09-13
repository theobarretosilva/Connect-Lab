import { PESStyled } from "../BoxLogin/BoxLogin.styles"
import { BoxCadastroStyled, BtnCadastrese, CadastreseStyled, DivCamposStyled, InputCadastroStyled, PLoginStyled } from "./BoxCadastro.styles"

export const BoxCadastro = () => {
    return(
        <BoxCadastroStyled>
            <CadastreseStyled>Cadastre-se</CadastreseStyled>
            <form>
                <DivCamposStyled>
                    <PESStyled>Nome completo*</PESStyled>
                    <InputCadastroStyled type={'text'} placeholder="Seu nome completo" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>E-mail*</PESStyled>
                    <InputCadastroStyled type={'email'} placeholder="Seu email" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Link da foto de perfil</PESStyled>
                    <InputCadastroStyled type={'url'} placeholder="Link da sua foto" />
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Telefone</PESStyled>
                    <InputCadastroStyled type={'text'} placeholder="Seu telefone" />
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Senha*</PESStyled>
                    <InputCadastroStyled type={'password'} placeholder="Sua senha" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Confirmação de senha*</PESStyled>
                    <InputCadastroStyled type={'password'} placeholder="Confirme a sua senha" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>CEP*</PESStyled>
                    <InputCadastroStyled type={'number'} placeholder="Seu CEP" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Logradouro/Endereço*</PESStyled>
                    <InputCadastroStyled type={'text'} placeholder="Seu logradouro/endereço" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Cidade*</PESStyled>
                    <InputCadastroStyled type={'text'} placeholder="Sua cidade" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Complemento</PESStyled>
                    <InputCadastroStyled type={'text'} placeholder="Complemento do endereço" />
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Número*</PESStyled>
                    <InputCadastroStyled type={'number'} placeholder="O número do seu endereço" required/>
                </DivCamposStyled>
                <DivCamposStyled>
                    <PESStyled>Bairro*</PESStyled>
                    <InputCadastroStyled type={'text'} placeholder="Seu bairro" required/>
                </DivCamposStyled>
                <BtnCadastrese>Cadastre-se</BtnCadastrese>
            </form>
            <PLoginStyled>Login</PLoginStyled>
        </BoxCadastroStyled>
    )
}