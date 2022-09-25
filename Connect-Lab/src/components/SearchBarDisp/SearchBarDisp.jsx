import { InputSearchStyled, PNomeDispStyled, SectionSearchbarStyled } from "./SearchBarDisp.styles";
import PropTypes from 'prop-types';

export const SearchBarDisp = ({ func }) => {
    return(
        <SectionSearchbarStyled>
            <PNomeDispStyled>Pesquise um dispositivo:</PNomeDispStyled>
            <InputSearchStyled onChange={func} type="text" placeholder="Ex: Lâmpada inteligente, fechadura eletrônica..."/>
        </SectionSearchbarStyled>
    );
};

SearchBarDisp.propTypes = {
    func: PropTypes.func.isRequired,
};