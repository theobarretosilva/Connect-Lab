import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/defaultThemes";
import { GlobalStyle } from "../../styles/globalStyle";
import { FiltroStyled, BtnFiltro, BtnFiltroSelecionado } from "./FiltrosDispositivos.styles";
import PropTypes from 'prop-types';
import { useState } from "react";

export const FiltroDispositivos = ({ funcao }) => {
    const [filtrado, setFiltrado] = useState("Todos");

    function teste(){
        if(filtrado === "Todos"){
            <BtnFiltroSelecionado>Todos</BtnFiltroSelecionado>
        }else if(filtrado !== "Todos"){
            <BtnFiltro value="Todos" onClick={setFiltrado("Todos")}>Todos</BtnFiltro>
        }else if(filtrado === "Quarto"){
            <BtnFiltroSelecionado>Quarto</BtnFiltroSelecionado>
        }else if(filtrado !== "Quarto"){
            <BtnFiltro value="Quarto" onClick={setFiltrado("Quarto")}>Quarto</BtnFiltro>
        }else if(filtrado === "Cozinha"){
            <BtnFiltroSelecionado>Cozinha</BtnFiltroSelecionado>
        }else if(filtrado !== "Cozinha"){
            <BtnFiltro value="Cozinha" onClick={setFiltrado("Cozinha")}>Cozinha</BtnFiltro>
        }else if(filtrado === "Sala de jantar"){
            <BtnFiltroSelecionado>Sala de jantar</BtnFiltroSelecionado>
        }else if(filtrado !== "Sala de jantar"){
            <BtnFiltro value="Sala de jantar" onClick={setFiltrado("Sala de jantar")}>Sala de jantar</BtnFiltro>
        }else if(filtrado === "Área de serviço"){
            <BtnFiltroSelecionado>Área de serviço</BtnFiltroSelecionado>
        }else if(filtrado !== "Área de serviço"){
            <BtnFiltro value="Área de serviço" onClick={setFiltrado("Área de serviço")}>Área de serviço</BtnFiltro>
        }
    }
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <FiltroStyled>
                {teste}
            </FiltroStyled>
        </ThemeProvider>
    );
};

FiltroDispositivos.propTypes = {
    funcao: PropTypes.func.isRequired,
};