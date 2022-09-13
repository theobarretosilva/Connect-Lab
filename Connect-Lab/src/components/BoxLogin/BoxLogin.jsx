import './BoxLogin.styles.jsx'
import { AcessarStyled, MainLogin } from './BoxLogin.styles.jsx'

export const BoxLogin = () => {
    return(
        <MainLogin>
            <div id='boxLogin'>
                <AcessarStyled>Acessar</AcessarStyled>
                <div>
                    <p>E-mail</p>
                    <input type="email" name="email" id="emailLogin" />
                </div>
                <div>
                    <p>Senha</p>
                    <input type="password" name="senha" id="senhaLogin" />
                </div>
                <button id='btnFazerLogin'>Fazer login</button>
                <p id='pCadastrese'>Cadastre-se</p>
            </div>
        </MainLogin>
    )
}