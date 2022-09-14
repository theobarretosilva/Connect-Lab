import { AcessarStyled, BoxLoginStyled, BtnLogin, DivStyled, InputStyled, PCadastreseStyled, PESStyled, SpanStyled } from './BoxLogin.styles.jsx'
import { useForm } from "react-hook-form";

export const BoxLogin = () => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data)

    return(
        <main>
            <BoxLoginStyled>
                <AcessarStyled>Acessar</AcessarStyled>
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