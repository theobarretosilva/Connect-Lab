import { AcessarStyled, BoxLoginStyled, BtnLogin, DivStyled, InputStyled, PCadastreseStyled, PESStyled, SpanStyled } from './BoxLogin.styles.jsx'
import { useForm } from "react-hook-form";
import { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/defaultThemes'
import { Link } from 'react-router-dom';
import * as yup from 'yup'

export const BoxLogin = () => {
    // eslint-disable-next-line no-unused-vars
    const { authenticated, login } = useContext(AuthContext);

    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (email, password) => {
        console.log("submit", email, password)
        login(email, password)
    }

    // eslint-disable-next-line no-unused-vars
    const validationSchema = yup.object({
        email: yup.string().email().required(),
        senha: yup.string().min(8).required()
    })
    
    return(
        <ThemeProvider theme={myTheme}>
            <main>
                <BoxLoginStyled>
                    <AcessarStyled>Acessar</AcessarStyled>
                    {/* {String(authenticated)} */}
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
                    <Link to={"/cadastroUsu"}><PCadastreseStyled>Cadastre-se</PCadastreseStyled></Link>
                </BoxLoginStyled>
            </main>
        </ThemeProvider>
        
    )
}