import { SpanErrorStyled } from "./InputError.styles";
import PropTypes from 'prop-types';
import errors from '../../utils/errors.json';

export const InputError = ({type, field}) => {
    return <SpanErrorStyled>{errors[field][type]}</SpanErrorStyled>
};

InputError.propTypes = {
    type: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
};