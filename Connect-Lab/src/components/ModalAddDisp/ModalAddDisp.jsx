import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BoxModalStyled, BtnAddStyled, BtnCancelarStyled, DivBtnsStyled, DivSelectStyled, FundoTotalModalStyled, LabelModalStyled, SelectModalStyled, TituloModalStyled } from "./ModalAddDisp.style"
import PropTypes from "prop-types"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { InputError } from "../InputError/InputError"
import { useForm } from "react-hook-form"
import { addDispUsu } from "../../service/api/axios"

export const ModalAddDisp = ({ nomeDispositivo, closeModal, nomeLocal, idLocal }) => {
    
    const validacao = yup.object({
        local: yup.string().required(),
        comodo: yup.string().required(),
    });

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validacao)});

    const onSubmit = (dados) => {
        console.log(dados.local, dados.comodo)
    }
    
    const mandarDispAPI = () => {
        addDispUsu()
    }

    const locaisDisp = JSON.parse(localStorage.getItem("locaisAddDisp"));
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <FundoTotalModalStyled>
                <BoxModalStyled>
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
                            <SelectModalStyled required>
                                <option selected disabled value="">Selecione o cômodo</option>
                                <option value="quarto">Quarto</option>
                                <option value="cozinha">Cozinha</option>
                                <option value="salaDeEstar">Sala de estar</option>
                                <option value="salaDeJantar">Sala de jantar</option>
                                <option value="areaDeServico">Área de serviço</option>
                            </SelectModalStyled>
                        </DivSelectStyled>
                        <DivBtnsStyled>
                            <BtnCancelarStyled onClick={()=> closeModal(false)}>Cancelar</BtnCancelarStyled>
                            <BtnAddStyled onClick={mandarDispAPI}>Adicionar</BtnAddStyled>
                        </DivBtnsStyled>
                    </form>
                    
                </BoxModalStyled>
            </FundoTotalModalStyled>
        </ThemeProvider>
    );
};

ModalAddDisp.propTypes = {
    nomeDispositivo: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    nomeLocal: PropTypes.string.isRequired,
    idLocal: PropTypes.string.isRequired,
};