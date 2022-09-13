import './BoxLogin.styles.jsx'
import { AcessarStyled, BoxLoginStyled, BtnLogin, DivStyled, InputStyled, PCadastreseStyled, PESStyled } from './BoxLogin.styles.jsx'

export const BoxLogin = () => {
    return(
        <main>
            <BoxLoginStyled>
                <AcessarStyled>Acessar</AcessarStyled>
                <form>
                    <DivStyled>
                        <PESStyled>E-mail</PESStyled>
                        <InputStyled placeholder='Seu e-mail' type={'email'}/>
                    </DivStyled>
                    <DivStyled>
                        <PESStyled>Senha</PESStyled>
                        <InputStyled placeholder='Sua senha' type={'password'}/>
                    </DivStyled>
                    <BtnLogin>Fazer login</BtnLogin>
                </form>
                <PCadastreseStyled>Cadastre-se</PCadastreseStyled>
            </BoxLoginStyled>
        </main>
    )
}