import { FiltroStyled, BtnFiltro } from "./FiltrosDispositivos.styles";
import PropTypes from 'prop-types';

export const FiltroDispositivos = ({ funcao }) => {
    return(
        <FiltroStyled>
            <BtnFiltro value="Todos" onClick={funcao}>Todos</BtnFiltro>
            <BtnFiltro value="Quarto" onClick={funcao}>Quarto</BtnFiltro>
            <BtnFiltro value="Cozinha" onClick={funcao}>Cozinha</BtnFiltro>
            <BtnFiltro value="Sala de jantar" onClick={funcao}>Sala de jantar</BtnFiltro>
            <BtnFiltro value="Área de serviço" onClick={funcao}>Área de serviço</BtnFiltro>
        </FiltroStyled>
    );
};

FiltroDispositivos.propTypes = {
    funcao: PropTypes.func.isRequired,
};