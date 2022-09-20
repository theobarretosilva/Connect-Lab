import styled from "styled-components";

export const SectionDetalheStyled = styled.section`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: 4px 4px 15px 1px ${({ theme }) => theme.sombras.primaria};
    border-radius: 15px;
    margin-top: 6%;
    width: 28%;
    text-align: center;
`