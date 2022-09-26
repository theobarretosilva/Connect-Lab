import * as yup from 'yup';
import { cep } from "../../utils/validations";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { atualizaUsuario } from "../../service/api/axios";
import { BoxCadastroStyled, BtnCadastrese, CadastreseStyled, DivBaseStyled, DivInputStyled, InputCadastroStyled, PLoginStyled } from "../BoxCadastro/BoxCadastro.styles"
import { InputError } from "../InputError/InputError";
import { PESStyled } from "../BoxLogin/BoxLogin.styles"
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const BoxEditPerfil = () => {
    const validationSchema = yup.object({
        nomeCompleto: yup.string().required(),
        email: yup.string().email().required(),
        linkFotoPerfil: yup.string().url(),
        cep: yup.string().matches(cep),
        estado: yup.string().required(),
        cidade: yup.string().required(),
        bairro: yup.string().required(),
        endereco: yup.string().required(),
        numeroEndereco: yup.number().required(),
        complementoEndereco: yup.string(),
    });

    const {
        register,
        handleSubmit,
        setValue,
        setFocus,
        formState: { errors },
    } = useForm({resolver: yupResolver(validationSchema)});

    const onSubmit = (e) => {
        try{
            atualizaUsuario(e.nomeCompleto, e.dataDeNscimento, e.email, e.linkFotoPerfil, e.senha, e.telefone, e.cep, e.estado, e.cidade, e.bairro, e.endereco, e.numeroEndereco, e.complementoEndereco);
        } catch (error) {
            console.log(error);
        };
    };

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setValue("endereco", data.logradouro);
                setValue("estado", data.uf)
                setValue("cidade", data.localidade);
                setValue("bairro", data.bairro);
                setFocus("numeroEndereco");
        });
    };

    const populaInputs = () => {
        const dadosLS = JSON.parse(localStorage.getItem("dadosUsuario"));
        setValue("nomeCompleto", dadosLS.user.nomeCompleto);
        setValue("email", dadosLS.user.email);
        setValue("linkFotoPerfil", dadosLS.user.linkFotoPerfil);
        setValue("telefone", dadosLS.user.telefone);
        setValue("cep", dadosLS.user.cep);
        setValue("estado", dadosLS.user.estado);
        setValue("cidade", dadosLS.user.cidade);
        setValue("bairro", dadosLS.user.bairro);
        setValue("endereco", dadosLS.user.endereco);
        setValue("numeroEndereco", dadosLS.user.numeroEndereco);
        setValue("complementoEndereco", dadosLS.user.complementoEndereco);
    };

    useEffect(()=> {
        populaInputs();
    });

    function onError(error){
        console.log(error);
    };

    return(
        <main>
            <BoxCadastroStyled>
                <CadastreseStyled>Editar meus dados</CadastreseStyled>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <DivBaseStyled>
                        <DivInputStyled>
                            <PESStyled>Nome completo *</PESStyled>
                            <InputCadastroStyled 
                                type={"text"}
                                {...register("nomeCompleto")}
                                placeholder="Ex: Joana Silveira de Albuquerque"
                                onBlur={populaInputs}
                            />
                            {errors?.nomeCompleto?.type && <InputError type={errors.nomeCompleto.type} field="nomeCompleto" />}
                        </DivInputStyled>
                        <DivInputStyled>
                            <PESStyled>Data de nascimento</PESStyled>
                            <InputCadastroStyled 
                                type="text"
                                {...register("dataDeNascimento")}
                                placeholder="Ex: dd/mm/aaaa"
                                disabled
                            />
                        </DivInputStyled>
                    </DivBaseStyled>
                    <DivBaseStyled>
                        <DivInputStyled>
                            <PESStyled>E-mail *</PESStyled>
                            <InputCadastroStyled
                                type="text"
                                {...register("email")}
                                placeholder="Ex: email@exemplo.com"
                            />
                            {errors?.email?.type && <InputError type={errors.email.type} field="email" />}
                        </DivInputStyled>
                        <DivInputStyled>
                            <PESStyled>Link da foto de perfil</PESStyled>
                            <InputCadastroStyled
                                type="url"
                                {...register("linkFotoPerfil")}
                                placeholder="Ex: https://avatars..."
                            />
                        </DivInputStyled>
                    </DivBaseStyled>
                    <DivBaseStyled>
                        <DivInputStyled>
                            <PESStyled>Celular</PESStyled>
                            <InputCadastroStyled
                                type="tel"
                                {...register("telefone")}
                                placeholder="Ex: (99) 99999-9999"
                            />
                        </DivInputStyled>
                        <DivInputStyled>
                            <PESStyled>CEP *</PESStyled>
                            <InputCadastroStyled
                                type="text"
                                {...register("cep")}
                                placeholder="Ex: 88101260"
                                onBlur={checkCEP}
                            />
                            {errors?.cep?.type && <InputError type={errors.cep.type} field="cep" />}
                        </DivInputStyled>
                    </DivBaseStyled>
                    <DivBaseStyled>
                        <DivInputStyled>
                            <PESStyled>Estado *</PESStyled>
                            <InputCadastroStyled
                                type="text"
                                {...register("estado")}
                                placeholder="Ex: Santa Catarina"
                            />
                            {errors?.estado?.type && <InputError type={errors.estado.type} field="estado" />}
                        </DivInputStyled>
                        <DivInputStyled>
                            <PESStyled>Cidade *</PESStyled>
                            <InputCadastroStyled
                                type="text"
                                {...register("cidade")}
                                placeholder="Ex: São José"
                            />
                            {errors?.cidade?.type && <InputError type={errors.cidade.type} field="cidade" />}
                        </DivInputStyled>
                    </DivBaseStyled>
                    <DivBaseStyled>
                        <DivInputStyled>
                            <PESStyled>Bairro *</PESStyled>
                            <InputCadastroStyled
                                type="text"
                                {...register("bairro")}
                                placeholder="Ex: Campinas"
                            />
                            {errors?.bairro?.type && <InputError type={errors.bairro.type} field="bairro" />}
                        </DivInputStyled>
                        <DivInputStyled>
                            <PESStyled>Endereço *</PESStyled>
                            <InputCadastroStyled
                                type="text"
                                {...register("endereco")}
                                placeholder="Ex: Avenida 9 de julho"
                            />
                            {errors?.endereco?.type && <InputError type={errors.endereco.type} field="endereco" />}
                        </DivInputStyled>
                    </DivBaseStyled>
                    <DivBaseStyled>
                        <DivInputStyled>
                            <PESStyled>Número *</PESStyled>
                            <InputCadastroStyled
                                type="number"
                                {...register("numeroEndereco")}
                                placeholder="Ex: 10"
                            />
                            {errors?.numeroEndereco?.type && <InputError type={errors.numeroEndereco.type} field="numeroEndereco" />}
                        </DivInputStyled>
                        <DivInputStyled>
                            <PESStyled>Complemento</PESStyled>
                            <InputCadastroStyled
                                type="text"
                                {...register("complementoEndereco")}
                                placeholder="Complemento do endereço"
                            />
                            {errors?.complementoEndereco?.type && <InputError type={errors.complementoEndereco.type} field="complementoEndereco" />}
                        </DivInputStyled>
                    </DivBaseStyled>
                    <BtnCadastrese>Salvar</BtnCadastrese>
                </form>
                <Link to={"/perfil"}><PLoginStyled>Cancelar</PLoginStyled></Link>
            </BoxCadastroStyled>
        </main>
    );
};