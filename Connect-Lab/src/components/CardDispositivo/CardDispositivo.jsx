import { DivDispositivoStyled, ImgProdutoStyled, PNomeDispStyled, DivLocOnOffStyled, PLocOnOffStyled, DivStyled, DetalhesStyled } from "./CardDispositivo.styles";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const CardDispositivo = ({ img, descriImg, nomeDisp, localDisp, POnOff, BtnOnOff, clickDetails, idDisp }) => {
    return(
        <DivDispositivoStyled>
            <DivStyled>
                <ImgProdutoStyled src={img} alt={descriImg}/>
                <DivLocOnOffStyled>
                    <PNomeDispStyled>{nomeDisp}</PNomeDispStyled>
                    <PLocOnOffStyled>{localDisp} | {POnOff}</PLocOnOffStyled>
                </DivLocOnOffStyled>
                {BtnOnOff}
            </DivStyled>
            <Link to="/detalhesDisp"><DetalhesStyled value={idDisp} onClick={clickDetails}>Mais detalhes</DetalhesStyled></Link>
        </DivDispositivoStyled>        
    );
};

CardDispositivo.propTypes = {
    img: PropTypes.string.isRequired,
    descriImg: PropTypes.string,
    nomeDisp: PropTypes.string.isRequired,
    localDisp: PropTypes.string.isRequired,
    POnOff: PropTypes.string.isRequired,
    BtnOnOff: PropTypes.node.isRequired,
    clickDetails: PropTypes.func.isRequired,
    idDisp: PropTypes.string.isRequired,
};