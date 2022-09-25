import { BtnAddStyled, CardStyled, ImgDispStyled, TipoDispStyled } from "./CardAddDisp.styles"
import PropTypes from 'prop-types';

export const CardAddDisp = ({ linkFotoDispositivo, nomeDisposivito, idDispositivo, noClique }) => {

    return(
        <CardStyled>
            <ImgDispStyled src={linkFotoDispositivo}/>
            <TipoDispStyled>{nomeDisposivito}</TipoDispStyled>
            <BtnAddStyled onClick={noClique} value={idDispositivo}>Adicionar</BtnAddStyled>
        </CardStyled>
    );
};

CardAddDisp.propTypes = {
    linkFotoDispositivo: PropTypes.string.isRequired,
    nomeDisposivito: PropTypes.string.isRequired,
    idDispositivo: PropTypes.string.isRequired,
    noClique: PropTypes.func.isRequired,
};