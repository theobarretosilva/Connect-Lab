import { AcessarStyled, BoxLoginStyled, BtnLogin, DivStyled, InputStyled, PCadastreseStyled, PESStyled, SpanStyled } from './BoxLogin.styles.jsx'
import { useForm } from "react-hook-form";
import { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"

export const BoxLogin = () => {
    const { authenticated, login } = useContext(AuthContext);

    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (email, password) => {
        console.log("submit", email, password)
        login(email, password)
    }
    
    return(
        <main>
            <BoxLoginStyled>
                <AcessarStyled>Acessar</AcessarStyled>
                {String(authenticated)}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DivStyled>
                        <PESStyled>E-mail</PESStyled>
                        {errors.email?.type === 'required' && <SpanStyled>Preenchimento obrigatório!</SpanStyled>}
                        <InputStyled
                            placeholder='Seu e-mail' 
                            type={'email'} 
                            {...register("email", {required: true})}
                        />
                    </DivStyled>
                    <DivStyled>
                        <PESStyled>Senha</PESStyled>
                        {errors.senha?.type === 'required' && <SpanStyled>Preenchimento obrigatório!</SpanStyled>}
                        <InputStyled 
                            placeholder='Sua senha' 
                            type={'password'} 
                            {...register("senha", {required: true, minLength: 8})} 
                        />
                    </DivStyled>
                    <BtnLogin>Fazer login</BtnLogin>
                </form>
                <PCadastreseStyled>Cadastre-se</PCadastreseStyled>
            </BoxLoginStyled>
        </main>
    )
}