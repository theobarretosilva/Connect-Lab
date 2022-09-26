import { BoxModalStyled, BtnAddStyled, BtnCancelarStyled, DivBtnsStyled, DivSelectStyled, FundoTotalModalStyled, LabelModalStyled, SelectModalStyled, TituloModalStyled } from "./ModalAddDisp.style"
import PropTypes from "prop-types"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { InputError } from "../InputError/InputError"
import { useForm } from "react-hook-form"
import { addDispUsu } from "../../service/api/axios"
import { Loading } from "../Loading/Loading"
import { useState } from "react"

export const ModalAddDisp = ({ nomeDispositivo, closeModal }) => {
    const [removeLoading, setRemoveLoading] = useState(true)

    const idUsuario = JSON.parse(localStorage.getItem("idUsuario"))
    const dispSelecionado = JSON.parse(localStorage.getItem("dadosDispSelected"));
    const idDispSelecionado = dispSelecionado[0]._id;
    
    const validacao = yup.object({
        local: yup.string().required(),
        comodo: yup.string().required(),
    });

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validacao)});

    const onSubmit = (dados) => {
        addDispUsu(idUsuario, idDispSelecionado, dados.local, dados.comodo)
            .then((value) => {
                setRemoveLoading(false)
            })
    }

    const locaisDisp = JSON.parse(localStorage.getItem("locaisAddDisp"));

    return(
        <FundoTotalModalStyled>
            <BoxModalStyled>
                {removeLoading ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TituloModalStyled>{nomeDispositivo}</TituloModalStyled>
                        <DivSelectStyled>
                            <LabelModalStyled>Local *</LabelModalStyled>
                            {errors?.email?.type && <InputError type={errors.email.type} field="local" />}
                            <SelectModalStyled {...register("local")}>
                                <option selected disabled value="selecioneLocal">Selecione o local</option>
                                {locaisDisp.map((value, key)=> {
                                    return <option value={value._id} key={key}>{value.description}</option>
                                })}
                            </SelectModalStyled>
                        </DivSelectStyled>
                        <DivSelectStyled>
                            <LabelModalStyled>Cômodo *</LabelModalStyled>
                            <SelectModalStyled {...register("comodo")}>
                                <option selected disabled value="">Selecione o cômodo</option>
                                <option value="Quarto">Quarto</option>
                                <option value="Cozinha">Cozinha</option>
                                <option value="Sala de estar">Sala de estar</option>
                                <option value="Sala de jantar">Sala de jantar</option>
                                <option value="Área de serviço">Área de serviço</option>
                            </SelectModalStyled>
                        </DivSelectStyled>
                        <DivBtnsStyled>
                            <BtnCancelarStyled onClick={()=> closeModal(false)}>Cancelar</BtnCancelarStyled>
                            <BtnAddStyled>Adicionar</BtnAddStyled>
                        </DivBtnsStyled>
                    </form>
                ) : (<Loading />)}
            </BoxModalStyled>
        </FundoTotalModalStyled>
    );
};

ModalAddDisp.propTypes = {
    nomeDispositivo: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};