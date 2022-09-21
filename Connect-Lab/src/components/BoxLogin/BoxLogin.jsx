import { AcessarStyled, BoxLoginStyled, BtnLogin, DivStyled, InputStyled, PCadastreseStyled, PESStyled } from './BoxLogin.styles.jsx'
import { useForm } from "react-hook-form";
import { useContext } from 'react'
import { AutenticacaoContext } from '../../contexts/Autenticacao/AutenticacaoContext.jsx';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/defaultThemes'
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { InputError } from '../InputError/InputError.jsx';
import { fazerLogin } from '../../service/api/axios.jsx';
import { GlobalStyle } from '../../styles/globalStyle.jsx';

export const BoxLogin = () => {
    // eslint-disable-next-line no-unused-vars
    const { authenticated, login } = useContext(AutenticacaoContext);

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        senha: yup.string().min(8).required()
    })

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});

    function timeOutRedirect() {
        setTimeout(() => Navigate("/"), 5000);
    }

    const onSubmit = (dados) => {
        console.log(dados.email, dados.senha)
        fazerLogin(dados.email, dados.senha)
        timeOutRedirect();
    }
    
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <main>
                <BoxLoginStyled>
                    <AcessarStyled>Acessar</AcessarStyled>
                    {String(authenticated)}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DivStyled>
                            <PESStyled>E-mail</PESStyled>
                            {errors?.email?.type && <InputError type={errors.email.type} field="email" />}
                            <InputStyled
                                placeholder="Seu e-mail"
                                type="email" 
                                {...register("email")}
                            />
                        </DivStyled>
                        <DivStyled>
                            <PESStyled>Senha</PESStyled>
                            {errors?.senha?.type && <InputError type={errors.senha.type} field="senha" />}
                            <InputStyled 
                                placeholder="Sua senha" 
                                type="password" 
                                {...register("senha")} 
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