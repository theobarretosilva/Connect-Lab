import { PESStyled } from "../BoxLogin/BoxLogin.styles"
import { BoxCadastroStyled, BtnCadastrese, CadastreseStyled, DivBaseStyled, DivCamposStyled, InputCadastroStyled, PLoginStyled } from "./BoxCadastro.styles"

export const BoxCadastro = () => {

const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if(cep?.lenght !== 8){
        return;
    }
    fetch(`viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
}

    return(
        <BoxCadastroStyled>
            <CadastreseStyled>Cadastre-se</CadastreseStyled>
            <form>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Nome completo*</PESStyled>
                        <InputCadastroStyled type={'text'} placeholder="Seu nome completo" required/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>E-mail*</PESStyled>
                        <InputCadastroStyled type={'email'} placeholder="Seu email" required/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Link da foto de perfil</PESStyled>
                        <InputCadastroStyled type={'url'} placeholder="Link da sua foto" />
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Telefone</PESStyled>
                        <InputCadastroStyled type={'text'} placeholder="Seu telefone" />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Senha*</PESStyled>
                        <InputCadastroStyled type={'password'} placeholder="Sua senha" required/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Confirmação de senha*</PESStyled>
                        <InputCadastroStyled type={'password'} placeholder="Confirme a sua senha" required/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>CEP*</PESStyled>
                        <InputCadastroStyled type={'text'} placeholder="Seu CEP" required onBlur={checkCEP}/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Logradouro/Endereço*</PESStyled>
                        <InputCadastroStyled type={'text'} placeholder="Seu logradouro/endereço" required/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Cidade*</PESStyled>
                        <InputCadastroStyled type={'text'} placeholder="Sua cidade" required/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Complemento</PESStyled>
                        <InputCadastroStyled type={'text'} placeholder="Complemento do endereço" />
                    </DivCamposStyled>
                </DivBaseStyled>
                <DivBaseStyled>
                    <DivCamposStyled>
                        <PESStyled>Número*</PESStyled>
                        <InputCadastroStyled type={'number'} placeholder="O número do seu endereço" required/>
                    </DivCamposStyled>
                    <DivCamposStyled>
                        <PESStyled>Bairro*</PESStyled>
                        <InputCadastroStyled type={'text'} placeholder="Seu bairro" required/>
                    </DivCamposStyled>
                </DivBaseStyled>
                <BtnCadastrese>Cadastre-se</BtnCadastrese>
            </form>
            <PLoginStyled>Login</PLoginStyled>
        </BoxCadastroStyled>
    )
}