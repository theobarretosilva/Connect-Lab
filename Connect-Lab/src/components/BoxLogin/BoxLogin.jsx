import { AcessarStyled, BoxLoginStyled, BtnLogin, DivStyled, InputStyled, PCadastreseStyled, PESStyled } from './BoxLogin.styles.jsx'
import { useForm } from "react-hook-form";
import { useContext } from 'react'
import { AuthContext } from "../../contexts/auth"
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../styles/defaultThemes'
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { InputError } from '../InputError/InputError.jsx';

export const BoxLogin = () => {
    // eslint-disable-next-line no-unused-vars
    const { authenticated, login } = useContext(AuthContext);

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        senha: yup.string().min(8).required()
    })

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationSchema)});

    const onSubmit = (email, password) => {
        console.log("Dados de login: ", email, password)
        login(email, password)
    }
    
    return(
        <ThemeProvider theme={myTheme}>
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