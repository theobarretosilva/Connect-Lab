import styled from "styled-components";

export const DivDispSelecStyled = styled.div`
    background: ${({ theme }) => theme.colors.primaria};
    box-shadow: inset 0px 6px 6px ${({ theme }) => theme.colors.octonaria};
    border-radius: 10px;
    width: 283px;
    display: flex;
    cursor: pointer;
`